import {ClassConstructor, plainToClass, plainToInstance} from "class-transformer";
import {Request, NextFunction, Response} from "express";
import {ContactDto} from "../dto/contact.dto";
import {validate} from "class-validator";

export class ValidateMiddleware {
    constructor(private classToValidate: ClassConstructor<object>) {
    }

    execute = (req: Request, res: Response, next: NextFunction): void=> {
        console.log("Validate middleware works!!!");
        const validateContact = plainToInstance(this.classToValidate, req.body);
        validate(validateContact).then((errors)=> {
            if(errors.length > 0) {
                const errorsList = errors.join(', ');
                res.status(400);
                next(new Error(errorsList));
            } else {
                next();
            }
        });
    }
}