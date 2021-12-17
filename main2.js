import express from "express";
const app = express();

const port = 3030;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/hello", (req, res) => {
  res.send("Hello " + req.body.name);
});

app.post("/hey", (req, res) => {
  res.send("Hey" + req.body.name);
});

app.listen(port, () => {
  console.log("Application started");
});
