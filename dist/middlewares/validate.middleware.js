"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateMiddleware = void 0;
const class_transformer_1 = require("class-transformer");
const contact_dto_1 = require("../dto/contact.dto");
const class_validator_1 = require("class-validator");
class ValidateMiddleware {
    constructor(classToValidate) {
        this.classToValidate = classToValidate;
    }
    execute(req, res, next) {
        const validateContact = (0, class_transformer_1.plainToInstance)(this.classToValidate, contact_dto_1.ContactDto);
        (0, class_validator_1.validate)(validateContact).then((errors) => {
            if (errors.length > 0) {
                res.status(400);
                next(new Error("Some fields are wrong"));
            }
            else {
                next();
            }
        });
    }
}
exports.ValidateMiddleware = ValidateMiddleware;
//# sourceMappingURL=validate.middleware.js.map