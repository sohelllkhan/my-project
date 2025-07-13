import { useEffect, useState } from "react";

function DonorPage() {
  const [formData, setFormData] = useState({
    name: "",
    bloodGroup: "",
    area: "",
    phone: "",
  });
  const [coords, setCoords] = useState(null);
  const [loadingLocation, setLoadingLocation] = useState(true);
  const [donors, setDonors] = useState([]);

  // Auto-location + reverse geocode
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const lat = pos.coords.latitude;
          const lng = pos.coords.longitude;
          setCoords({ lat, lng });

          try {
            const res = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
            );
            const data = await res.json();
            const { suburb, city, town, village, state, country } = data.address;
            const place =
              suburb || city || town || village || state || country || "Unknown";
            setFormData((prev) => ({ ...prev, area: place }));
          } catch (err) {
            console.error("Geocode error:", err);
          } finally {
            setLoadingLocation(false);
          }
        },
        (err) => {
          console.error("GPS error:", err);
          setLoadingLocation(false);
        }
      );
    } else {
      console.warn("Geolocation not supported");
      setLoadingLocation(false);
    }
  }, []);

  // Load donors list from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/donors")
      .then((res) => res.json())
      .then(setDonors)
      .catch((err) => console.error("Error loading donors:", err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/donors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          latitude: coords?.lat,
          longitude: coords?.lng,
        }),
      });

      const result = await res.json();
      if (res.ok) {
        alert("✅ Donor added!");
        setDonors((prev) => [...prev, result]);
        setFormData({ name: "", bloodGroup: "", area: "", phone: "" });
      } else {
        alert("❌ Failed to add donor: " + result.error);
      }
    } catch (err) {
      console.error("Submit error:", err);
      alert("❌ Network error");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-red-700 mb-6 text-center">Register as Donor</h2>
      {loadingLocation && <p className="text-center text-gray-500">Detecting location...</p>}
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full border p-3 rounded"
          required
        />
        <input
          type="text"
          name="area"
          value={formData.area}
          onChange={handleChange}
          placeholder="Area"
          className="w-full border p-3 rounded"
          required
        />
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full border p-3 rounded"
          required
        />
        <select
          name="bloodGroup"
          value={formData.bloodGroup}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        >
          <option value="">Select Blood Group</option>
          {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map((bg) => (
            <option key={bg} value={bg}>
              {bg}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-3 rounded hover:bg-red-700"
        >
          Submit
        </button>
      </form>

      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4">🩸 Registered Donors</h3>
        <ul className="space-y-2">
          {donors.map((donor, idx) => (
            <li key={idx} className="border p-4 rounded bg-gray-50">
              <strong>{donor.name}</strong> ({donor.bloodGroup}) - {donor.area}  
              <div className="text-sm text-gray-500">📞 {donor.phone}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DonorPage;
