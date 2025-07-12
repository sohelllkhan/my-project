import { useState } from "react";

const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];

const sections = [
  {
    title: "Donate Blood, Save Lives",
    text: "Blood donation is safe and healthy. Eligible adults (18–60 yrs, Hb >12g/dl, weight >50kg) can donate 450ml of blood every 3–4 months. The body replenishes the volume quickly. Platelet donors should avoid Plavix/Ticlid for 14 days before donation.",
    img: "/assets/images/a.jpg",
    reverse: false,
  },
  {
    title: "Real-Time Blood Tracking",
    text: "Hospitals can track inventory instantly and request specific blood types when needed.",
    img: "/assets/images/b.jpg",
    reverse: true,
  },
  {
    title: "Nationwide Emergency Support",
    text: "We connect patients and donors instantly during emergencies, anywhere in the country.",
    img: "/assets/images/c.jpg",
    reverse: false,
  },
];

function App() {
  const [selectedType, setSelectedType] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans bg-gray-50 min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="w-full px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img
              src="/assets/images/logo.svg"
              className="h-8 w-8"
              alt="Logo"
            />
            <span className="text-xl font-semibold text-red-700">Smart Blood Hub</span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-sm text-gray-700 hover:text-red-600">Home</a>
            <a href="#" className="text-sm text-gray-700 hover:text-red-600">Find Blood</a>
            <a href="#" className="text-sm text-gray-700 hover:text-red-600">Donate</a>
            <a href="#" className="text-sm text-gray-700 hover:text-red-600">Emergency</a>
            <a href="#" className="text-sm text-gray-700 hover:text-red-600">Contact</a>
          </nav>

          <button className="md:hidden text-gray-600 text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            ☰
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t px-4 py-2 space-y-2">
            <a href="#" className="block text-gray-700">Home</a>
            <a href="#" className="block text-gray-700">Find Blood</a>
            <a href="#" className="block text-gray-700">Donate</a>
            <a href="#" className="block text-gray-700">Emergency</a>
            <a href="#" className="block text-gray-700">Contact</a>
          </div>
        )}
      </header>

      {/* Hero Section with Background Video */}
      <section className="relative h-[400px] w-full">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/assets/videos/a.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Donate Blood. Save Lives.</h1>
          <p className="text-lg mt-3 max-w-2xl">
            Connecting donors, hospitals & patients with smart tech and real-time alerts.
          </p>
          <button className="mt-5 bg-red-600 hover:bg-red-700 px-6 py-2 rounded text-white font-medium">
            Become a Donor
          </button>
        </div>
      </section>

      {/* Alternating Content Sections */}
      {sections.map((s, index) => (
        <section key={index} className="py-16 bg-white w-full">
          <div className={`w-full flex flex-col md:flex-row ${s.reverse ? 'md:flex-row-reverse' : ''} items-center`}>
            <div className="w-full md:w-1/2 h-full">
              <img
                src={s.img}
                alt="section visual"
                className="w-full h-[300px] md:h-[450px] object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 p-6 md:p-12 text-center md:text-left">
              <h2 className="text-3xl font-bold text-red-700 mb-4">{s.title}</h2>
              <p className="text-gray-600 text-lg">{s.text}</p>
            </div>
          </div>
        </section>
      ))}

      {/* Blood Type Search */}
      <section className="w-full py-10 px-6 md:px-20 bg-gray-100">
        <h3 className="text-2xl font-semibold mb-4">Search Blood by Type</h3>
        <select
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-red-600"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="">Select Blood Type</option>
          {bloodTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>

        {selectedType && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded">
            <h4 className="text-lg font-medium text-red-700">Showing results for: {selectedType}</h4>
            <p className="text-sm text-gray-600">[Mock] Here you'd fetch and show donor data from MongoDB.</p>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-6 text-center text-gray-500 text-sm mt-auto">
        © 2025 Smart Blood Hub. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
