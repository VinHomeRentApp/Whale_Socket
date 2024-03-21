"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const constants_1 = require("./constants");
const errorResponse_core_1 = require("./core/errorResponse.core");
const errorHandler_1 = require("./middleware/errorHandler");
const routes_1 = require("./routes");
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)({
    origin: '*',
    methods: constants_1.DEFAULT_BASE_METHODS,
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.set('views', path_1.default.join(__dirname, 'views'));
app.use('/', express_1.default.static(path_1.default.join(__dirname, '../public')));
app.set('view engine', 'ejs');
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use('/api', routes_1.Routes);
app.get('/', (req, res) => {
    res.render('index');
});
app.all('*', (req, res, next) => {
    const err = new errorResponse_core_1.NotFoundError(`Route ${req.originalUrl} not found`).getNotice();
    next(err);
});
app.use(errorHandler_1.errorHandler);
exports.default = app;
