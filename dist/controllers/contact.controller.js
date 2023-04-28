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
exports.ContactController = void 0;
const inversify_1 = require("inversify");
require("reflect-metadata");
const types_1 = require("../types");
const mongodb_1 = require("mongodb");
let ContactController = class ContactController {
    constructor(contactRepository) {
        this.contactRepository = contactRepository;
    }
    async getContact(req, res, next) {
        const allContacts = await this.contactRepository.getAllContacts();
        res.status(200).json(allContacts);
    }
    ;
    async createContact(req, res, next) {
        console.log('Request body is ' + req.body);
        const { name, email, phone } = req.body;
        if (!name || !email || !phone) {
            res.status(400);
            next(new Error("All field are mandatory"));
        }
        else {
            const contact = await this.contactRepository.createNewContact(name, email, phone);
            if (contact) {
                res.status(201).json(contact);
            }
            else {
                res.status(400);
                next(new Error("Something go wrong!"));
            }
        }
    }
    ;
    async getOneContact(req, res, next) {
        let contactID = this.createObjectID(req.params.id);
        let getContact;
        if (contactID instanceof mongodb_1.ObjectId) {
            getContact = await this.contactRepository.findOneContact(contactID);
        }
        if (!getContact) {
            res.status(404);
            next(new Error("Contact not found"));
        }
        else
            res.json(getContact);
    }
    async updateOneContact(req, res, next) {
        const contactID = this.createObjectID(req.params.id);
        if (contactID instanceof mongodb_1.ObjectId) {
            const cont = await this.contactRepository.updateContact(contactID, req.body);
            res.json(cont);
        }
        else {
            res.status(404);
            next(new Error("Something go wrong"));
        }
    }
    async deleteOneContact(req, res, next) {
        const contactID = this.createObjectID(req.params.id);
        if (contactID instanceof mongodb_1.ObjectId) {
            const deleteContact = await this.contactRepository.deleteOneContact(contactID);
            res.json(deleteContact);
        }
        else {
            res.status(404);
            next(new Error("Something in DELETE go wrong"));
        }
    }
    createObjectID(id) {
        let contactID;
        try {
            contactID = new mongodb_1.ObjectId(id);
        }
        catch (error) {
            if (error instanceof Error)
                console.log(`Error: ${error.message}`);
        }
        return contactID;
    }
};
ContactController = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(types_1.TYPES.IContactRepository)),
    __metadata("design:paramtypes", [Object])
], ContactController);
exports.ContactController = ContactController;
//# sourceMappingURL=contact.controller.js.map