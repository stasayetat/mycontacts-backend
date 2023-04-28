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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactRepository = void 0;
require("reflect-metadata");
const inversify_1 = require("inversify");
const mongoose_1 = __importStar(require("mongoose"));
let ContactRepository = class ContactRepository {
    constructor() {
        this.contactSchema = new mongoose_1.Schema({
            name: {
                type: String,
                required: [true, "Please add the contact name"],
            },
            email: {
                type: String,
                required: [true, "Please add the contact email"],
            },
            phone: {
                type: String,
                required: [true, "Please add the contact phone"],
            },
        }, {
            timestamps: true
        });
        this.contactModel = mongoose_1.default.model("Contact", this.contactSchema);
    }
    async getAllContacts() {
        return this.contactModel.find({});
    }
    async createNewContact(name, email, phone) {
        return this.contactModel.create({
            name,
            email,
            phone
        });
    }
    async findOneContact(updateID) {
        console.log(`ID: ${updateID}`);
        return this.contactModel.findById(updateID);
    }
    async updateContact(id, contactUpdate) {
        console.log(`ID: ${id}`);
        const contact = this.contactModel.findByIdAndUpdate(id, {
            name: contactUpdate.name,
            email: contactUpdate.email,
            phone: contactUpdate.phone
        }, {
            new: true
        });
        return contact;
    }
    async deleteOneContact(id) {
        console.log(`ID: ${id}`);
        return this.contactModel.findByIdAndDelete(id, {
            new: true
        });
    }
};
ContactRepository = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], ContactRepository);
exports.ContactRepository = ContactRepository;
//# sourceMappingURL=contact.repository.js.map