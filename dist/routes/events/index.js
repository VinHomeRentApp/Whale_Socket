"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const event_controller_1 = __importDefault(require("~/controllers/event.controller"));
const asyncHandler_1 = require("~/utils/asyncHandler");
const eventRouter = (0, express_1.Router)();
eventRouter.post('/payment-success', (0, asyncHandler_1.asyncHandler)(event_controller_1.default.getPaymentStatus));
exports.default = eventRouter;
