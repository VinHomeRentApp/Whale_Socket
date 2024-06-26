"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_1 = require("~/config/socket");
const errorResponse_core_1 = require("~/core/errorResponse.core");
class EventServices {
    static async getStatusPayment(req, res) {
        if (req.body === undefined) {
            throw new errorResponse_core_1.BadRequestError('Cannot get data').getNotice();
        }
        const { userId, name } = req.body;
        if (!userId || !name) {
            throw new errorResponse_core_1.BadRequestError('Cannot get status').getNotice();
        }
        socket_1.io.emit(`payment-success-${userId}`, { name });
        socket_1.io.emit(`payment-success-admin`, { userId, name });
        return { data: { userId, name } };
    }
}
exports.default = EventServices;
