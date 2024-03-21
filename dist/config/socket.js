"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socketSetup = exports.io = void 0;
const socket_io_1 = require("socket.io");
let io;
const socketSetup = (server) => {
    exports.io = io = new socket_io_1.Server(server, {
        cors: {
            origin: process.env.PORT_CLIENT || 'http://localhost:4200',
            methods: ['GET', 'POST']
        }
    });
    io.on('connection', (socket) => {
        console.log('New client connected', socket.id);
        socket.on('disconnect', () => {
            console.log('Client disconnected', socket.id);
        });
    });
};
exports.socketSetup = socketSetup;
