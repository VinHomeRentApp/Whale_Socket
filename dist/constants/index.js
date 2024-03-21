"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERROR = exports.MESSAGE = exports.ReasonError = exports.StatusCode = exports.DEFAULT_BASE_METHODS = exports.DEFAULT_PORT = exports.DUPLICATE_CODE_ERROR = void 0;
exports.DUPLICATE_CODE_ERROR = 11000;
exports.DEFAULT_PORT = 4000;
exports.DEFAULT_BASE_METHODS = ['GET', 'POST', 'PUT', 'DELETE'];
exports.StatusCode = {
    OK: 200,
    CREATED: 201
};
exports.ReasonError = {
    OK: 'Success',
    CREATED: 'Created'
};
var MESSAGE;
(function (MESSAGE) {
    MESSAGE["INVALID_JSON_TOKEN"] = "Json web token is invalid, try again";
    MESSAGE["EXPIRED_JSON_TOKEN"] = "Json web token is expired, try again";
})(MESSAGE || (exports.MESSAGE = MESSAGE = {}));
var ERROR;
(function (ERROR) {
    ERROR["CAST_ERROR"] = "CastError";
    ERROR[ERROR["DUPLICATE_VALUE"] = 11000] = "DUPLICATE_VALUE";
    ERROR["JSON_WEB_TOKEN_ERROR"] = "JsonWebTokenError";
    ERROR["TOKEN_EXPIRED"] = "TokenExpiredError";
})(ERROR || (exports.ERROR = ERROR = {}));
