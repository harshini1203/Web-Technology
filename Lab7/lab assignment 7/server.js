const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello am Harshini" });
});

app.get("/about", (req, res) => {
  res.json({ message: "Hey everybody! Am Harshini and I am a student at SNU Chennai. I love to sing and dance.I also like to play chess." });
});



app.listen(3000, () => {
  console.log(`Server is running on port 3000.`);
});
