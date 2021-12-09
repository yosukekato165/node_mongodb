import express from "express";
const app = express();

const port = 3030;

app.post("/", function (req, res) {
  data.name = req.body.name;
  res.set("Content-Type", "application/json");
  res.json({ name: "tomato" });
});

app.listen(port);

console.log(`The server has started and is listening on port number: ${port}`);
