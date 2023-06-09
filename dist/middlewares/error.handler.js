"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
const inversify_1 = require("inversify");
require("reflect-metadata");
const constants_1 = require("../constants");
let ErrorHandler = class ErrorHandler {
    errorHandler(err, req, res, next) {
        const statusCode = res.statusCode ? res.statusCode : 500;
        res.json({
            title: constants_1.CONSTANTS[statusCode],
            message: err.message,
            stackTrace: err.stack,
            code: statusCode
        });
        res.end();
    }
};
ErrorHandler = __decorate([
    (0, inversify_1.injectable)()
], ErrorHandler);
exports.ErrorHandler = ErrorHandler;
//# sourceMappingURL=error.handler.js.map