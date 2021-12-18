import express from "express";
const app = express();

const port = 3030;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const hey = [
  { name: "Tom", age: "18" },
  { name: "John", age: "20" },
];

app.post("/hello", (req, res) => {
  res.send("Hello " + req.body.name);
});

app.post("/hey", (req, res) => {
  res.json(hey);
});

app.listen(port, () => {
  console.log("Application started");
});
