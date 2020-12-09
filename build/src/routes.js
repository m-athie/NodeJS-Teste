"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UsersController_1 = __importDefault(require("./controllers/UsersController"));
const routes = express_1.default.Router();
const UsersControllers = new UsersController_1.default();
routes.get('/users', UsersControllers.index);
routes.post('/users', UsersControllers.create);
exports.default = routes;
