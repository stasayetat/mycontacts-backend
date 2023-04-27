import {IErrorHandler} from "./error.handler.interface";
import {Request, NextFunction, Response} from "express";
import {injectable} from "inversify";
import 'reflect-metadata';
import {CONSTANTS} from '../constants';
import {isNumber} from "class-validator";
@injectable()
export class ErrorHandler implements IErrorHandler{
    errorHandler(err: Error, req: Request, res: Response, next: NextFunction): void {
        const statusCode: number = res.statusCode ? res.statusCode : 500;
        res.json({
            title: CONSTANTS[statusCode as keyof typeof CONSTANTS],
            message: err.message,
            stackTrace: err.stack,
            code: statusCode
        });
        res.end();
    }

}
