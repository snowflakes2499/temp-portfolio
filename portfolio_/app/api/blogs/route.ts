import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Blog from "@/models/Blog";

export async function GET() {
  await dbConnect();
  const blogs = await Blog.find().sort({ createdAt: -1 });
  return NextResponse.json(blogs);
}

export async function POST(req: Request) {
  const { adminPassword, title, content, image } = await req.json();

  if (adminPassword !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Wrong password" }, { status: 401 });
  }

  if (!title || !content) {
    return NextResponse.json(
      { error: "Title and content are required" },
      { status: 400 }
    );
  }

  try {
    await dbConnect();
    const newBlog = await Blog.create({ title, content, image });
    return NextResponse.json(newBlog, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error saving blog" }, { status: 500 });
  }
}
