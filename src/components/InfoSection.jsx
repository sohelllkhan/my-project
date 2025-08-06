function InfoSection({ title, text, img, reverse }) {
  return (
    <section className="py-16 bg-white w-full">
      <div className={`w-full flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center`}>
        <div className="w-full md:w-1/2 h-full">
          <img src={img} alt="section visual" className="w-full h-[400px] md:h-[450px] object-cover" />
        </div>
        <div className="w-full md:w-1/2 p-6 md:p-12 text-center md:text-left">
          <h2 className="font-mono text-3xl font-bold text-red-700 mb-4">{title}</h2>
          <p className="font-mono text-gray-600 text-lg">{text}</p>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
