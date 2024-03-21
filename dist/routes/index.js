"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const express_1 = require("express");
const events_1 = __importDefault(require("./events"));
const router = (0, express_1.Router)();
exports.Routes = router;
router.use('/event', events_1.default);
