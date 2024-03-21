"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorResponse_core_1 = require("~/core/errorResponse.core");
const statusCode_core_1 = __importDefault(require("~/core/statusCode.core"));
const errorHandler = (err, req, res, next) => {
    console.log(err.stack);
    err.statusCode = err.status || statusCode_core_1.default.INTERNAL_SERVER_ERROR;
    err.message = err.message || 'Internal server error';
    if (err.name) {
        switch (err.name) {
            default:
                err = new errorResponse_core_1.InternalServerError('Internal server error');
                break;
        }
    }
    res.status(err.status).json({
        message: err.message,
        status: err.status
    });
    next();
};
exports.errorHandler = errorHandler;
