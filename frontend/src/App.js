import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Nav from "./component/Nav";
import NftM from "./pages/NftM";
import Nft from "./pages/Nft";
import Footer from "./component/Footer";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/message")
      .then((res) => setMessage(res.data.message))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<NftM message={message} />} />
          <Route path="/nft" element={<Nft />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
