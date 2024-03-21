'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuccessResponses = exports.OK = exports.CREATED = void 0;
const constants_1 = require("~/constants");
class SuccessResponses {
    message;
    status;
    data;
    options;
    constructor({ message, statusCode = constants_1.StatusCode.OK, reasonStatusCode = constants_1.ReasonError.OK, metadata }) {
        this.message = !message ? reasonStatusCode : message;
        this.status = statusCode;
        this.data = metadata;
    }
    send(res, headers = {}) {
        return res.status(this.status).json(this);
    }
}
exports.SuccessResponses = SuccessResponses;
class OK extends SuccessResponses {
    constructor({ message, metadata }) {
        super({ message, metadata });
    }
}
exports.OK = OK;
class CREATED extends SuccessResponses {
    constructor({ options = {}, message, statusCode = constants_1.StatusCode.CREATED, reasonStatusCode = constants_1.ReasonError.CREATED, metadata }) {
        super({ message, statusCode, reasonStatusCode, metadata });
        this.options = options;
    }
}
exports.CREATED = CREATED;
