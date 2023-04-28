import {Request, NextFunction, Response} from "express";

export interface IUsersController {
    register: (req: Request, res: Response, next: NextFunction)=> Promise<void>;
    login: (req: Request, res: Response, next: NextFunction)=> Promise<void>;
    current: (req: Request, res: Response, next: NextFunction)=> Promise<void>;
}