"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const successResponse_core_1 = require("~/core/successResponse.core");
const event_services_1 = __importDefault(require("~/services/event.services"));
class EventController {
    async getPaymentStatus(req, res) {
        console.log(req.body);
        return new successResponse_core_1.OK({
            message: 'Payment Successfully!',
            metadata: await event_services_1.default.getStatusPayment(req, res)
        }).send(res);
    }
}
module.exports = new EventController();
