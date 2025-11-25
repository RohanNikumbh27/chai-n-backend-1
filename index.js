import express from "express";
import dotenv from "dotenv";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Chai-n Backend!",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});