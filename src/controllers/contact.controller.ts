//@desc

import {NextFunction, Request, Response} from "express";
import {IContactController} from "./contact.controller.interface";
import {injectable} from "inversify";
import 'reflect-metadata';
@injectable()
export class ContactController implements IContactController{
    getContact (req: Request, res: Response, next: NextFunction): void {
        res.status(200).json({message: "Read contacts"});
    };

    createContact (req: Request, res: Response, next: NextFunction): void {
        console.log('Request body is ' + req.body);
        res.status(201).json({message: "Create contact"});
    };

    getOneContact (req: Request, res: Response): void {
    res.json({message: `Read for ${req.params.id}`});
    }

    updateOneContact (req: Request, res: Response): void {
        res.json({message: `Update for ${req.params.id}`});
    }

    deleteOneContact (req: Request, res: Response): void {
        res.json({message: `Delete for ${req.params.id}`});
    }
}
