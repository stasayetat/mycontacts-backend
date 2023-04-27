import {NextFunction, Request, Response} from "express";

export interface IContactController {
    getContact: (req: Request, res: Response, next: NextFunction)=> Promise<void>;
    createContact: (req: Request, res: Response, next: NextFunction)=> Promise<void>;
    getOneContact: (req: Request, res: Response, next: NextFunction)=> Promise<void>;
    updateOneContact: (req: Request, res: Response, next: NextFunction)=> Promise<void>;
    deleteOneContact: (req: Request, res: Response, next: NextFunction)=> Promise<void>;
}