"use client";

import Image from "next/image";

const blogs = [
  {
    title: "Book Blog",
    description: "A reflective blog sharing concise reviews and personal insights on books exploring identity, gender, and social justice.",
    image: "/images/obama.png", 
    link: "https://book-review-fawn.vercel.app/",
  },
  {
    title: "Book Group Review",
    description: "A team-run blog offering concise, thoughtful reviews of books on identity, gender, and African narratives.",
    image: "/images/book.png",
    link: "https://book-vlog.vercel.app/",
  },
];

export default function Blogs() {
  return (
    <section id="blogs" className="bg-transparent text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Blogs</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
          {blogs.map((blog, index) => (
            <a
              key={index}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <div className="relative w-full h-48">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="bg-gray-800 p-4 h-28 flex flex-col justify-center">
                <h3 className="text-lg font-semibold">{blog.title}</h3>
                <p className="text-sm text-gray-300">{blog.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
