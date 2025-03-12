"use client";

import { useState } from "react";
import Image from "next/image";

// Blog Data
const blogPosts = [
  {
    id: "blog-1",
    title: "Building a Profitable Software Services Business - Series",
    image: "/blogs/Building a Profitable Software Services Business.jpg",
    excerpt: "A deep dive into emerging web development trends...",
    content: `## Introduction`,
    date: "November 17, 2023",
    author: "Ashok Singh",
  },
  {
    id: "blog-2",
    title: "5 Effective Strategies for Boosting Gross Margin and Driving Business Growth",
    image: "/blogs/gross-margin.png",
    excerpt: "Scaling your Next.js application is crucial for performance...",
    content: `## Why Gross Margin Matters`,
    date: "May 3, 2023", 
    author: "Ashok Singh",
  },
];

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="max-w-4xl mx-auto py-10">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-6">Blog</h1>

      {/* Show Single Blog Post if selected */}
      {selectedPost ? (
        <div>
          <button
            className="mb-4 text-blue-500 underline"
            onClick={() => setSelectedPost(null)}
          >
            ← Back to Blogs
          </button>
          <h2 className="text-2xl font-bold mb-2">{selectedPost.title}</h2>
          <p className="text-gray-500 text-sm">
            {selectedPost.date} • By {selectedPost.author}
          </p>
          <Image
            src={selectedPost.image}
            alt={selectedPost.title}
            width={800}
            height={400}
            className="rounded-lg my-6 w-full"
            
            
          />
          <div className="prose max-w-none">{selectedPost.content}</div>
        </div>
      ) : (
        // Show Blog List
        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold hover:text-blue-500">
                  {post.title}
                </h2>
                <p className="text-gray-600">{post.excerpt}</p>
                <p className="text-sm text-gray-400 mt-2">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
