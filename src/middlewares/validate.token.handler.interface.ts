import {Request, NextFunction, Response} from "express";

export interface IValidateTokenHandler {
    validateToken: (req: Request, res: Response, next: NextFunction)=> Promise<void>;
}