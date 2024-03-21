"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_1 = require("~/config/socket");
const errorResponse_core_1 = require("~/core/errorResponse.core");
class EventServices {
    static async getStatusPayment(req, res) {
        if (req.body === undefined) {
            throw new errorResponse_core_1.BadRequestError('Cannot get data').getNotice();
        }
        const { data } = req.body;
        if (!data) {
            throw new errorResponse_core_1.BadRequestError('Cannot get status').getNotice();
        }
        setTimeout(() => {
            socket_1.io.emit(`payment-success-${data}`, { data });
            console.log(data);
        }, 4000);
        // Optionally, you can return the interval ID if needed
        return { data };
    }
}
exports.default = EventServices;
