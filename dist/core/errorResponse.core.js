"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerError = exports.NotModified = exports.ForbiddenError = exports.NotFoundError = exports.AuthFailureError = exports.BadRequestError = exports.ConflictRequestError = void 0;
const reasonPhrase_core_1 = __importDefault(require("./reasonPhrase.core"));
const statusCode_core_1 = __importDefault(require("./statusCode.core"));
class ErrorResponse extends Error {
    status;
    constructor(message, status) {
        super(message);
        this.status = status; //config
    }
}
class ConflictRequestError extends ErrorResponse {
    constructor(message = reasonPhrase_core_1.default.CONFLICT, statusCode = statusCode_core_1.default.CONFLICT) {
        super(message, statusCode);
    }
    getNotice = () => {
        return {
            message: this.message,
            status: this.status
        };
    };
}
exports.ConflictRequestError = ConflictRequestError;
class BadRequestError extends ErrorResponse {
    constructor(message = reasonPhrase_core_1.default.BAD_REQUEST, statusCode = statusCode_core_1.default.BAD_REQUEST) {
        super(message, statusCode);
    }
    getNotice = () => {
        return {
            message: this.message,
            status: this.status
        };
    };
}
exports.BadRequestError = BadRequestError;
class AuthFailureError extends ErrorResponse {
    constructor(message = reasonPhrase_core_1.default.UNAUTHORIZED, statusCode = statusCode_core_1.default.UNAUTHORIZED) {
        console.log(message);
        super(message, statusCode);
    }
    getNotice = () => {
        return {
            message: this.message,
            status: this.status
        };
    };
}
exports.AuthFailureError = AuthFailureError;
class NotFoundError extends ErrorResponse {
    constructor(message = reasonPhrase_core_1.default.NOT_FOUND, statusCode = statusCode_core_1.default.NOT_FOUND) {
        console.log(message);
        super(message, statusCode);
    }
    getNotice() {
        return {
            message: this.message,
            status: this.status
        };
    }
}
exports.NotFoundError = NotFoundError;
class NotModified extends ErrorResponse {
    constructor(message = reasonPhrase_core_1.default.NOT_MODIFIED, statusCode = statusCode_core_1.default.NOT_MODIFIED) {
        console.log(message);
        super(message, statusCode);
    }
    getNotice() {
        return {
            message: this.message,
            status: this.status
        };
    }
}
exports.NotModified = NotModified;
class ForbiddenError extends ErrorResponse {
    constructor(message = reasonPhrase_core_1.default.FORBIDDEN, statusCode = statusCode_core_1.default.FORBIDDEN) {
        console.log(message);
        super(message, statusCode);
    }
    getNotice() {
        return {
            message: this.message,
            status: this.status
        };
    }
}
exports.ForbiddenError = ForbiddenError;
class InternalServerError extends ErrorResponse {
    constructor(message = reasonPhrase_core_1.default.INTERNAL_SERVER_ERROR, statusCode = statusCode_core_1.default.INTERNAL_SERVER_ERROR) {
        console.log(message);
        super(message, statusCode);
    }
    getNotice() {
        return {
            message: this.message,
            status: this.status
        };
    }
}
exports.InternalServerError = InternalServerError;
