const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.listen(2218, () => {
  console.log(`server is running on port 2218`);
});
