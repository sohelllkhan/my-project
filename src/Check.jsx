// src/Main.jsx
import { useState } from "react";
import App from "./App";
import DonorPage from "./donorpage";

function Check() {
  const [page, setPage] = useState("home");

  return (
    <>
      {page === "home" ? (
        <App goToDonate={() => setPage("donate")} />
      ) : (
        <DonorPage />
      )}
    </>
  );
}

export default Check;
