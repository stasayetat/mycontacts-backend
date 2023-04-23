import {NextFunction, Request, Response} from "express";

export interface IContactController {
    getContact: (req: Request, res: Response, next: NextFunction)=> void;
    createContact: (req: Request, res: Response, next: NextFunction)=> void;
    getOneContact: (req: Request, res: Response, next: NextFunction)=> void;
    updateOneContact: (req: Request, res: Response, next: NextFunction)=> void;
    deleteOneContact: (req: Request, res: Response, next: NextFunction)=> void;
}