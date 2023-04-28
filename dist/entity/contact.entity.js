"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
class Contact {
    constructor(_name, _email, _phone) {
        this._name = _name;
        this._email = _email;
        this._phone = _phone;
    }
    get name() {
        return this._name;
    }
    get email() {
        return this._email;
    }
    get phone() {
        return this._phone;
    }
}
exports.Contact = Contact;
//# sourceMappingURL=contact.entity.js.map