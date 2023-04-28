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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const inversify_1 = require("inversify");
require("reflect-metadata");
const mongoose_1 = require("mongoose");
let UsersRepository = class UsersRepository {
    constructor() {
        this.userSchema = new mongoose_1.Schema({
            username: {
                type: String,
                required: [true, "Please add the user name"]
            },
            email: {
                type: String,
                required: [true, "Please add the user email"],
                unique: [true, 'This user already registered']
            },
            password: {
                type: String,
                required: [true, "Please add the password"]
            }
        }, {
            timestamps: true
        });
        this.userModel = (mongoose_1.Model);
        this.userModel = (0, mongoose_1.model)("User", this.userSchema);
    }
    async userRegister() {
    }
    async userCurrent() {
    }
    async userLogin() {
    }
};
UsersRepository = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], UsersRepository);
exports.UsersRepository = UsersRepository;
//# sourceMappingURL=users.repository.js.map