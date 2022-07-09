"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("express-async-errors");
const error_1 = require("./utils/error");
const appRouter_1 = require("./routes/appRouter");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000'
}));
app.use(express_1.default.json());
app.use('/api', appRouter_1.appRouter);
app.use(error_1.handleError);
app.listen(3021, '0.0.0.0', () => {
    console.log('Aplikacja nakurwia na porcie http://localhost:3021');
});
//# sourceMappingURL=index.js.map