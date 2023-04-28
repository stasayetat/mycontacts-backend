"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactRoute = void 0;
const express_1 = require("express");
const inversify_1 = require("inversify");
const types_1 = require("../types");
require("reflect-metadata");
const validate_middleware_1 = require("../middlewares/validate.middleware");
const contact_dto_1 = require("../dto/contact.dto");
let ContactRoute = class ContactRoute {
    constructor(contactController) {
        this.contactController = contactController;
        this.router = (0, express_1.Router)();
    }
    bindRoutes() {
        this.router.get('/', this.contactController.getContact.bind(this.contactController));
        this.router.get('/:id', this.contactController.getOneContact.bind(this.contactController));
        this.router.post('/', new validate_middleware_1.ValidateMiddleware(contact_dto_1.ContactDto).execute, this.contactController.createContact.bind(this.contactController));
        this.router.put('/:id', this.contactController.updateOneContact.bind(this.contactController));
        this.router.delete('/:id', this.contactController.deleteOneContact.bind(this.contactController));
    }
};
ContactRoute = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(types_1.TYPES.IContactController)),
    __metadata("design:paramtypes", [Object])
], ContactRoute);
exports.ContactRoute = ContactRoute;
//# sourceMappingURL=contact.route.js.map