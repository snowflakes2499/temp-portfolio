"use client";

import { useState } from "react";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ adminPassword: password }),
    });

    if (res.status === 401) {
      setMessage("❌ Wrong password");
    } else {
      setLoggedIn(true);
      setMessage("");
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        content,
        image,
        adminPassword: password,
      }),
    });

    const data = await res.json();
    if (res.ok) {
      setMessage("✅ Blog added successfully!");
      setTitle("");
      setContent("");
      setImage("");
    } else {
      setMessage(data.error || "❌ Error adding blog");
    }
  }

  return (
    <div className="max-w-lg mx-auto p-6 text-black">
      {!loggedIn ? (
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="password"
            placeholder="Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 text-black placeholder:text-gray-600"
            required
          />
          <button type="submit" className="bg-blue-500 text-white p-2">
            Login
          </button>
          {message && <p className="text-red-500">{message}</p>}
        </form>
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-4 text-black">Add New Blog</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border p-2 text-black placeholder:text-gray-600"
              required
            />
            <textarea
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="border p-2 text-black placeholder:text-gray-600"
              required
            />
            <input
              type="text"
              placeholder="Image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="border p-2 text-black placeholder:text-gray-600"
            />
            <button type="submit" className="bg-green-500 text-white p-2">
              Add Blog
            </button>
          </form>
          {message && <p className="mt-4 text-black">{message}</p>}
        </>
      )}
    </div>
  );
}
