"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.socketSetup = exports.io = void 0;
const axios_1 = __importDefault(require("axios"));
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
        socket.on('check-status-payment-36', async (data) => {
            console.log(data);
            let status = true;
            if (!data.data || data.data.length === 0) {
                status = false;
            }
            else {
                const listIdPayment = data.data;
                for (let index = 0; index < listIdPayment.length; index++) {
                    const idPayment = listIdPayment[index];
                    const response = await axios_1.default.get(`https://whalehome.up.railway.app/api/v1/payment/${idPayment}`);
                    if (response.data.status === false) {
                        status = false;
                        break;
                    }
                }
            }
            console.log(status);
            io.emit('check-status-payment-36', { data: status });
        });
        socket.on('disconnect', () => {
            console.log('Client disconnected', socket.id);
        });
    });
};
exports.socketSetup = socketSetup;
