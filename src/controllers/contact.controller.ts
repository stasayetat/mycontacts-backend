//@desc

import {NextFunction, Request, Response} from "express";
export class ContactController {
    getContact (req: Request, res: Response, next: NextFunction) {
        res.status(200).json({message: "Read contacts"});
    };

    createController (req: Request, res: Response, next: NextFunction) {
        res.status(201).json({message: "Create contact"});
    };

    getOneContact (req: Request, res: Response) {
    res.json({message: `Read for ${req.params.id}`});
    }

    updateOneContact (req: Request, res: Response) {
        res.json({message: `Update for ${req.params.id}`});
    }

    deleteOneContact (req: Request, res: Response) {
        res.json({message: `Delete for ${req.params.id}`});
    }



}
