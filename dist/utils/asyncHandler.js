"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncHandler = void 0;
const asyncHandler = (fn) => {
    //closeSure function
    return (req, res, next) => {
        return fn(req, res, next).catch(next);
    };
};
exports.asyncHandler = asyncHandler;
