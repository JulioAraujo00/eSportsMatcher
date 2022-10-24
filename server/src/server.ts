import express, { request } from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient({
  log: ["query"],
});

app.get("/games", async (req, res) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        },
      },
    },
  });
  return res.json(games);
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

app.listen(3333, () => console.log("listening"));
