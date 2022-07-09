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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CvRecord = void 0;
const db_1 = require("../utils/db");
const mongodb_1 = require("mongodb");
class CvRecord {
    constructor(obj) {
    }
    static listAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield db_1.cvValues.find().toArray();
        });
    }
    static getOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield db_1.cvValues.findOne({ _id: new mongodb_1.ObjectId(String(id)) });
        });
    }
}
exports.CvRecord = CvRecord;
//# sourceMappingURL=cv.record.js.map