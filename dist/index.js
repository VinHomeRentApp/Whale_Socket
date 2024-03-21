"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const socket_1 = require("./config/socket");
const constants_1 = require("./constants");
const PORT = process.env.PORT || constants_1.DEFAULT_PORT;
const server = app_1.default.listen(PORT, () => {
    console.log(`Server is start at PORT: ${PORT}`);
    (0, socket_1.socketSetup)(server);
});
exports.default = server;
