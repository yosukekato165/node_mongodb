import express from "express";
const app = express();

app.post("/", function (req, res) {
  const data = { name: "tomato" };
  data.name = req.body.name;
  res.set("Content-Type", "application/json");
  res.json(data);
});

app.listen(9000);
