"use client";

import Image from "next/image";

const projects = [
  {
    title: "Ankole Grill Website",
    description: "A professional website for Ankole Grill Kenya, showcasing their authentic African cuisine ,restaurant locations, menu ,events, and online ordering system",
    image: "/images/ankole.png", // put your screenshot here
    link: "https://lwambisrat.github.io/Ankole-Grill-Website/",
  },
  {
    title: "Movie List",
    description: "A sleek web app showcasing the latest films with genre-based categories and detailed movie pages",
    image: "/images/movie.png",
    link: "https://next-api-request.vercel.app/",
  },
  {
    title: "E-Commerce Storefront",
    description: "A responsive online shop showcasing products with categories, pricing,ratings, and detailed views designed for a smooth shopping experience",
    image: "/images/e-commerce.png",
    link: "https://e-commerce-website-delta-eight.vercel.app/home",
  },
  {
    title: "Rasi Prints",
    description: "A professional site for Rasi Screen Printing, showcasing their global print export services, and techniques from traditional textile to UV and CMYK printing",
    image: "/images/rasioffer.png",
    link: "https://lwambisrat.github.io/Responsive-Website/",
  },
  {
    title: "Moving Services Website",
    description: "A trusted moving company site offering packing, storage, transport, and instant quotes designed for clarity and customer conversion.",
    image: "/images/riaadarif.png",
    link: "https://lwambisrat.github.io/Website/",
  },
  {
    title: "Chat App",
    description: "A real-time chat app using WebSockets.",
    image: "/images/chat.png",
    link: "https://your-chat-link.com",
  },
];

const groupProjects = [
  {
    title: "GreensMtaani App",
    description: "A local agri-tech platform linking customers with neighborhood vendors for fresh, affordable groceries and easy ordering",
    image: "/images/greensmtaani.png",
    link: "https://pulse-shift-informational-website.netlify.app/",
  },
  {
    title: "MyHaki - Legal Aid Platform",
    description: "AI-driven platform offering free, LSK-approved legal aid to pre-trial detainees in Kenya, with lawyer matching and real-time case tracking",
    image: "/images/myhaki.png",
    link: "https://myhaki-liard.vercel.app/",
  },
  {
    title: "Meal Mate – Recipe Finder App",
    description: "A simple, responsive web app to discover, search, and save recipes by category or name for easy meal planning",
    image: "/images/recipe.png",
    link: "https://recipe-explorer-neon.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-transparent mb-23 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* My Projects */}
        <h2 className="text-6xl font-bold text-center mb-4">My Projects</h2>
        <p className="text-center text-gray-300 mb-12">
          Explore my projects to see how I turn ideas into practical solutions with creativity and tech skills
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              {/* Image */}
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Red Panel */}
              <div className="bg-gray-800 p-4 h-28 flex flex-col justify-center">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-300">{project.description}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Group Projects */}
        <h2 className="text-3xl font-bold text-center mt-20 mb-4">Group Project</h2>
        <p className="text-center text-gray-300 mb-12">
          My group projects showcase collaboration with diverse teams, blending unique skills to deliver creative and impactful solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {groupProjects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="bg-gray-800 p-4 h-28 flex flex-col justify-center">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-300">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
