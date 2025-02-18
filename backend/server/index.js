const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// API Route
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from the Node.js backend!" });
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
