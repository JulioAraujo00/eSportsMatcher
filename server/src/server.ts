import express from "express";

const app = express();

app.get("/games", (req, res) => {
  return res.json([]);
});

app.post("/ads", (req, res) => {
  return res.status(201).json("createAdd");
});

app.get("/games/:id/ads", (request, response) => {
  // const gameId = request.params.id;

  response.json([
    { id: 1, name: "Advertising" },
    { id: 2, name: "Advertising" },
    { id: 3, name: "Advertising" },
    { id: 4, name: "Advertising" },
  ]);
});

app.get("/ads/:id/discord", (request, response) => {
  // const adId = request.params.id;

  response.json([]);
});

app.listen(3333);
