import express from "express";
import dotenv from "dotenv";
import cors from "cors";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Chai-n Backend!",
  });
});

app.get("/jokes", (req, res) => {
  const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't skeletons fight each other? They don't have the guts.",
  ];
  res.json({data: jokes});
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});