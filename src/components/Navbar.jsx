function Navbar({ isMenuOpen, setIsMenuOpen }) {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="w-full px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="./assets/images/logo.svg" className="h-8 w-8" alt="Logo" />
          <span className=" font-mono text-xl font-extrabold text-red-700">SMART BLOOD HUBSmart Blood Hub is a modern web-based blood bank system designed to connect blood donors, recipients, and hospitals in a fast and reliable way. Its main goal is to make the blood donation process easier, safer, and more efficient, especially during emergencies. Users can register as donors or recipients, search for blood based on group or location, and send emergency blood requests. The system can also track nearby donors using GPS, send real-time notifications, and keep records of donation history. Hospitals or admins have their own panel to manage blood stock, approve requests, and monitor overall activity. Smart Blood Hub is built using React.js for the frontend, Tailwind CSS for styling, Node.js for backend API, and MongoDB Atlas for storing data online. The platform aims to reduce blood shortages, save lives, and promote regular blood donation through a smart and user-friendly interface.</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-sm text-gray-700 hover:text-red-600">Home</a>
          <a href="#finddonor" className="text-sm text-gray-700 hover:text-red-600">Find Blood</a>
          <a href="#bloodstock" className="text-sm text-gray-700 hover:text-red-600">Blood Stock</a>
          <a href="#" className="text-sm text-gray-700 hover:text-red-600">Emergency</a>
          <a href="#contact" className="text-sm text-gray-700 hover:text-red-600">Contact Us</a>
        </nav>
        <button className="md:hidden text-gray-600 text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-2 space-y-2">
          <a href="#" className="block text-gray-700">Home</a>
          <a href="#finddonor" className="block text-gray-700">Find Blood</a>
          <a href="#bloodstock" className="block text-gray-700">Blood Stock</a>
          <a href="#" className="block text-gray-700">Emergency</a>
          <a href="#contact" className="block text-gray-700">Contact Us</a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
