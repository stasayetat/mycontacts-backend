import {Request, NextFunction, Response} from "express";
import {IValidateTokenHandler} from "./validate.token.handler.interface";
import 'reflect-metadata';
import {injectable} from "inversify";
import {JwtPayload, verify} from "jsonwebtoken";
@injectable()
export class ValidateTokenHandler implements IValidateTokenHandler{
    async validateToken(req: Request, res: Response, next: NextFunction): Promise<void> {
        console.log("Validate token work!!!");
        let token;
        let authHeader = req.headers.Authorization || req.headers.authorization;
        if(authHeader && typeof authHeader == "string" && authHeader.startsWith('Bearer')) {
            token = authHeader.split(' ')[1];
            verify(token, process.env.ACCESS_TOKEN as string, (error, decoded)=> {
                if(error) {
                    res.status(401);
                    next(new Error(`User is not auth, error: ${error.message}`));
                } else {
                    console.log(decoded);
                    if(typeof decoded === 'string' || typeof decoded === 'undefined'){
                        next();
                    } else {
                        req.body.user = decoded.user;
                        next();
                    }
                }
            })
        } else {
            res.status(401);
            next(new Error(`User is not auth`));
        }
    }
}