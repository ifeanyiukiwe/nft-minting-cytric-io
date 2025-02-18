const express = require("express");
const cors = require("cors");
require("dotenv").config();
const nftRoutes = require("./routes/nftRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // Allow React frontend
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

// Root route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Message API
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from the Node.js backend!" });
});

// NFT Routes
app.use("/api/nfts", nftRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
