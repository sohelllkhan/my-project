function Hero({ goToDonate }) {
  return (
    <section className="relative h-[400px] w-full">
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
        <source src="./assets/videos/a.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold">Donate Blood. Save Lives.</h1>
        <p className=" text-lg mt-3 max-w-2xl">Connecting donors, hospitals & patients with smart tech and real-time alerts.</p>
        <button onClick={() => goToDonate && goToDonate()} className="mt-5 bg-red-600 hover:bg-red-700 px-6 py-2 rounded text-white font-medium">
          Become a Donor
        </button>
      </div>
    </section>
  );
}

export default Hero;
