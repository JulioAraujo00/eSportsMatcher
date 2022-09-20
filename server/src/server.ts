import express from "express";

const app = express();

app.get("/ads", (request, response) => {
  response.json([
    { id: 1, name: "Advertising" },
    { id: 2, name: "Advertising" },
    { id: 3, name: "Advertising" },
    { id: 4, name: "Advertising" },
  ]);
});

app.listen(3333);
