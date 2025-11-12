import express from "express";

const app = express();
const PORT = 5111;

app.all("/", (req, res) => {
  res.send("I am up");
});

// Read
// Create
// update
// delete
app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
