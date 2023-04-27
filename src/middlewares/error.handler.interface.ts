import {Request, NextFunction, Response} from "express";

export interface IErrorHandler {
    errorHandler: (err: Error, req: Request, res: Response, next: NextFunction)=> void;

}