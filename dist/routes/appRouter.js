"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
const express_1 = __importDefault(require("express"));
const error_1 = require("../utils/error");
const cv_record_1 = require("../records/cv.record");
exports.appRouter = express_1.default.Router();
exports.appRouter
    .get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    throw new error_1.ValidationError('Przepraszamy, spróbuj za kilka minut ponownie!');
}))
    .get('/get-items', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield cv_record_1.CvRecord.listAll();
    data.sort((a, b) => {
        return a.index - b.index;
    });
    res.json(data);
}))
    .get('/get-one/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const data = yield cv_record_1.CvRecord.getOne(id);
    res.json(data);
}));
//# sourceMappingURL=appRouter.js.map