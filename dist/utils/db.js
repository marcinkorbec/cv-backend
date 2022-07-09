"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cvValues = exports.db = exports.client = void 0;
const mongodb_1 = require("mongodb");
const config_1 = require("../config/config");
exports.client = new mongodb_1.MongoClient(`mongodb+srv://marcin:${config_1.pwd}@cluster0.w7tz8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
exports.client.connect();
exports.db = exports.client.db('myFirstDatabase');
exports.cvValues = exports.db.collection('CV-values');
//# sourceMappingURL=db.js.map