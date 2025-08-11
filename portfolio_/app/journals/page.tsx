"use client";
import { useEffect, useState } from "react";

interface Blog {
  _id: string;
  title: string;
  content: string;
  image?: string | null;
  createdAt: string;
  updatedAt: string;
}

export default function JournalPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]); // <-- specify Blog[]

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data: Blog[]) => setBlogs(data));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 text-black">
      <h1 className="text-3xl font-bold mb-6 text-black">Journal</h1>
      <div className="space-y-6 text-black">
        {blogs.map((blog) => (
          <div key={blog._id} className="border p-4 rounded shadow text-black">
            <h2 className="text-xl font-semibold text-black">{blog.title}</h2>
            {blog.image && (
              <img src={blog.image} alt={blog.title} className="my-4" />
            )}
            <p>{blog.content}</p>
            <small className="text-black">
              {new Date(blog.createdAt).toLocaleDateString()}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}
