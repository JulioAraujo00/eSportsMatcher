import express from "express";

const app = express();

app.get("/games", (req, res) => {
  return res.json([]);
});

app.post("/ads", (req, res) => {
  return res.status(201).json("createAdd");
});

app.get("/ads", (request, response) => {
  response.json([
    { id: 1, name: "Advertising" },
    { id: 2, name: "Advertising" },
    { id: 3, name: "Advertising" },
    { id: 4, name: "Advertising" },
  ]);
});

app.listen(3333);
