"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socketSetup = exports.io = void 0;
const socket_io_1 = require("socket.io");
let io;
const socketSetup = (server) => {
    exports.io = io = new socket_io_1.Server(server, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST']
        }
    });
    io.on('connection', (socket) => {
        console.log('New client connected', socket.id);
        socket.on('private-message', ({ recipient, message }) => {
            io.to(recipient).emit('private-message', { sender: socket.id, message });
        });
        socket.on('check-status-payment', () => { });
        socket.on('disconnect', () => {
            console.log('Client disconnected', socket.id);
        });
    });
};
exports.socketSetup = socketSetup;
