"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
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
