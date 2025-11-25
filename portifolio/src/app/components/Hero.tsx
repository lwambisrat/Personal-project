import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen bg-transparent flex flex-row items-center justify-center -mt-5 text-left px-6">
      <div>
      <Image
        src="/images/lwam's (5).jpg"
        alt="Lwam Bisrat"
        width={300}
        height={250}
        className="rounded-full shadow-lg"
      />
      </div>
      <div className="pl-6">
      <h1 className="mt-6 text-6xl font-bold pl-4">Hello, I’m Lwam Bisrat</h1>
      <h2 className="mt-5 ml-3 text-5xl  text-gray-300">Software Engineer</h2>
      <p className="mt-4 text-2xl ml-3 max-w-2xl text-gray-400">
        <i>Great technology is built not just with intelligence, but with the patience to refine, learn, and evolve over time!</i>
      </p>
      </div>
    </section>
  );
}
