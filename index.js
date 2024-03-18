const express = require("express");
const router = require('./routes/api')
const app = express();
const PORT = 8000;

// Routes Implementation
app.use("/api/v1", router);

// Undefined Route Implement
app.use("*", (req, res) => {
  res.status(404).send({ status: "fail", message: "not found" });
});

// Server on
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
