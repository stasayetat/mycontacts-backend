"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(_username, _email, _password) {
        this._username = _username;
        this._email = _email;
        this._password = _password;
    }
    get username() {
        return this._username;
    }
    get email() {
        return this._email;
    }
    get password() {
        return this._password;
    }
}
exports.User = User;
//# sourceMappingURL=user.entity.js.map