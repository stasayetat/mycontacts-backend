"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongooseService = void 0;
const mongoose_1 = require("mongoose");
require("reflect-metadata");
const inversify_1 = require("inversify");
let MongooseService = class MongooseService {
    async connectDb() {
        try {
            const connectDb = await (0, mongoose_1.connect)(process.env.CONNECTION_STRING);
            console.log("Database connected: " + connectDb.connection?.name);
        }
        catch (e) {
            console.log(e);
            process.exit(1);
        }
    }
};
MongooseService = __decorate([
    (0, inversify_1.injectable)()
], MongooseService);
exports.MongooseService = MongooseService;
//# sourceMappingURL=db-connection.js.map