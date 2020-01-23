"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const listing_1 = require("./listing");
const app = express_1.default();
const port = 9000;
const one = 1;
const two = 2;
app.get("/", (_req, res) => {
    res.end(`1 + 2 = ${one + two}`);
});
//listings
//Delete-listing
app.get("/listings", (_req, res) => {
    return res.send(listing_1.listings);
});
app.listen(port);
console.log(`[app]: http://localhost:${port}`);
