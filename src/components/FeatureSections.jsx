import InfoSection from "./InfoSection";

const sections = [
  {
    title: "DONATE BLOOD, SAVE LIVES",
    text: "Donating blood is safe and healthy because it helps your body make new blood. You give about 450 ml of blood, which is only around 7.5% of the total blood in an adult's body, and your body replaces it quickly. Healthy people between 18 and 60 years old, who weigh more than 50 kg and have haemoglobin above 12 g/dl, can donate this amount. Your body can make back the lost blood within 24 hours. Men can donate every 3 months and women every 4 months if they are not sick. For platelet donation, the donor should also be between 18 and 60 years old, weigh more than 50 kg, and must not have taken Plavix or Ticlid in the past 14 days.",
    img: "./assets/images/a.jpg",
    reverse: false,
  },
  {
    title: "PRECAUTIONS TO BE TAKEN PRIOR TO BLOOD DONATION",
    text: "Before donating blood, you should take some precautions. Do not donate on an empty stomach; it’s better to eat something and wait 20 to 30 minutes after your meal. Make sure you had good sleep the night before. You should not donate if you have a fever or if you are taking any antibiotics, aspirin, or blood thinners.",
    img: "./assets/images/b.jpg",
    reverse: true,
  },
  {
    title: "ABOUT SBH",
    text: "Smart Blood Hub is a modern web-based blood bank system designed to connect blood donors, recipients, and hospitals in a fast and reliable way. Its main goal is to make the blood donation process easier, safer, and more efficient, especially during emergencies. Users can register as donors or recipients, search for blood based on group or location, and send emergency blood requests. The system can also track nearby donors using GPS, send real-time notifications, and keep records of donation history. Hospitals or admins have their own panel to manage blood stock, approve requests, and monitor overall activity. Smart Blood Hub is built using React.js for the frontend, Tailwind CSS for styling, Node.js for backend API, and MongoDB Atlas for storing data online. The platform aims to reduce blood shortages, save lives, and promote regular blood donation through a smart and user-friendly interface.",
    img: "./assets/images/c.jpg",
    reverse: false,
  },
];

function FeatureSections() {
  return (
    <>
      {sections.map((section, i) => (
        <InfoSection key={i} {...section} />
      ))}
    </>
  );
}

export default FeatureSections;
