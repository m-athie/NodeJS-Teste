"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const routes_1 = __importDefault(require("./routes"));
const app = express();
app.use(express.json());
app.use(routes_1.default);
app.listen(3333);
