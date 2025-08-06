import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

function BloodStockChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://my-project-4bw6.onrender.com/api/blood/summary")
   // fetch("http://localhost:5000/api/blood/summary")

      .then((res) => res.json())
      .then((resData) => {
        const formatted = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map((type) => ({
          bloodGroup: type,
          bags: resData.find((b) => b._id === type)?.count || 0,
        }));
        setData(formatted);
      })
      .catch((err) => console.error("❌ Error loading chart:", err));
  }, []);

  return (
    <section id="bloodstock">
    <div className="bg-white py-10 px-4 md:px-20">
      <h3 className="text-2xl font-semibold text-center text-red-700 mb-6">🩸 Blood Stock Summary</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="bloodGroup" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="bags" fill="#dc2626" />
        </BarChart>
      </ResponsiveContainer>
    </div>
    </section>
    
  );
}

export default BloodStockChart;
