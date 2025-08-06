import { useState } from "react";

function FindNearbyDonors() {
  
  const [bloodGroup, setBloodGroup] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchNearby = () => {
    if (!bloodGroup) return alert("Please select a blood group");

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;

        try {
          const res = await fetch(
           `http://localhost:5000/api/nearby-donors?bloodGroup=${bloodGroup}&lat=${lat}&lng=${lng}`
         );
//           const res = await fetch(
//   `http://localhost:5000/api/donors/nearby?bloodGroup=${bloodGroup}&lat=${lat}&lng=${lng}`
// );
          const data = await res.json();
          setResults(data);
        } catch (err) {
          console.error("Error fetching donors:", err);
          alert("❌ Failed to fetch nearby donors");
        } finally {
          setLoading(false);
        }
      },
      () => {
        alert("❌ Failed to get location");
        setLoading(false);
      }
    );
  };

  return (
    <section id="finddonor">
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-red-700 mb-6 text-center">
        🔍 Find Nearby Blood Donors
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
        <select
          className="w-full md:w-1/2 border p-3 rounded"
          value={bloodGroup}
          onChange={(e) => setBloodGroup(e.target.value)}
        >
          <option value="">Select Blood Group</option>
          {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map((bg) => (
            <option key={bg} value={bg}>
              {bg}
            </option>
          ))}
        </select>
        <button
          className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded"
          onClick={searchNearby}
          disabled={loading}
        >
          {loading ? "Searching..." : "Find Nearby Donors"}
        </button>
      </div>

      {results.length > 0 ? (
        <ul className="space-y-4">
          {results.map((donor, idx) => (
            <li key={idx} className="border p-4 rounded bg-gray-50">
              <strong>{donor.name}</strong> ({donor.bloodGroup}) - {donor.area}
              <div className="text-sm text-gray-600">📞 {donor.phone}</div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center">
          {loading ? "" : "No donors found yet."}
        </p>
      )}
    </div>
    </section>
  );
  
}

export default FindNearbyDonors;
