"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const inversify_1 = require("inversify");
const express_1 = __importStar(require("express"));
require("reflect-metadata");
const types_1 = require("./types");
const db_connection_1 = require("./config/db-connection");
let App = class App {
    constructor(contactRoute, userRoute, errorHandler, mongooseService) {
        this.contactRoute = contactRoute;
        this.userRoute = userRoute;
        this.errorHandler = errorHandler;
        this.mongooseService = mongooseService;
        this.app = (0, express_1.default)();
        this.PORT = process.env.PORT || 3000;
    }
    useMiddlewares() {
        this.app.use((0, express_1.json)());
        this.contactRoute.bindRoutes();
        this.userRoute.bindRoutes();
        this.app.use("/api/contacts", this.contactRoute.router);
        this.app.use("/api/users", this.userRoute.router);
        this.app.use(this.errorHandler.errorHandler);
    }
    async startApp() {
        await this.mongooseService.connectDb();
        this.useMiddlewares();
        this.app.listen(this.PORT, () => {
            console.log(`Port is ${process.env.PORT}`);
            console.log("Server has been started");
        });
    }
};
App = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(types_1.TYPES.IContactRoute)),
    __param(1, (0, inversify_1.inject)(types_1.TYPES.IUserRoute)),
    __param(2, (0, inversify_1.inject)(types_1.TYPES.IErrorHandler)),
    __param(3, (0, inversify_1.inject)(types_1.TYPES.MongooseService)),
    __metadata("design:paramtypes", [Object, Object, Object, db_connection_1.MongooseService])
], App);
exports.App = App;
//# sourceMappingURL=app.js.map