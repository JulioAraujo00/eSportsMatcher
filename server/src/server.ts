import express, { request } from "express";
import cors from "cors";

import { PrismaClient } from "@prisma/client";
import {
  convertHourStringToMinutes,
  convertMinutesToHourString,
} from "./utils/timeMetods";

const app = express();
app.use(express.json());
app.use(
  cors()
  // {
  //   origin:'endereço do front que vai usar esse backend'. Caso queira deixar em aber, não passar nenhum valor
  // }
);

const prisma = new PrismaClient({
  log: ["query"],
});

app.get("/games", async (req, res) => {
  const games = await prisma.game.findMany({
    //procurando todos os games
    include: {
      //join
      _count: {
        //aggregate
        select: {
          ads: true,
        },
      },
    },
  });
  return res.json(games);
});

app.post("/games/:id/ads", async (req, res) => {
  const gameId = req.params.id;
  const body: any = req.body;

  const ad = await prisma.ad.create({
    data: {
      gameId,
      name: body.name,
      yearsPlaying: body.yearsPlaying,
      discord: body.discord,
      weekDays: body.weekDays.join(","),
      hourStart: convertHourStringToMinutes(body.hourStart),
      hourEnd: convertHourStringToMinutes(body.hourEnd),
      useVoiceChannel: body.useVoiceChannel,
    },
  });

  return res.status(201).json(ad);
});

app.get("/games/:id/ads", async (request, response) => {
  const gameId = request.params.id;

  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      hourStart: true,
      hourEnd: true,
      useVoiceChannel: true,
    },
    where: {
      gameId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  response.json(
    ads.map((ad) => {
      return {
        ...ads,
        weekDays: ad.weekDays.split(","),
        hoursStart: convertMinutesToHourString(ad.hourStart),
        hoursEnd: convertMinutesToHourString(ad.hourEnd),
      };
    })
  );
});

app.get("/ads/:id/discord", async (request, response) => {
  const adId = request.params.id;

  const ad = await prisma.ad.findUniqueOrThrow({
    select: {
      discord: true,
    },
    where: {
      id: adId,
    },
  });

  return response.json({
    discord: ad.discord,
  });
});

app.listen(3333, () => console.log("listening"));
