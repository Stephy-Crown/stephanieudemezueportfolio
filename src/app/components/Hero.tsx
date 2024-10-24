export default function Hero() {
  return (
    <section className="h-screen flex text-center flex-col justify-center items-center bg-gray-800 text-white">
      <h1 className="text-5xl font-bold">Hi, I&apos;m Stephanie</h1>
      <p className="text-xl mt-4">Frontend Developer | Software Engineer</p>
      <a
        href="#projects"
        className="mt-6 py-2 px-6 bg-blue-600 rounded-full hover:bg-blue-700"
      >
        View My Work
      </a>
    </section>
  );
}
