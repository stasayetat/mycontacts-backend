import {IUsersController} from "./users.controller.interface";
import 'reflect-metadata';
import {inject, injectable} from "inversify";
import {Request, NextFunction, Response} from "express";
import {TYPES} from "../types";
import {IUsersRepository} from "../repositories/users.repostiory.interface";
import {UserRegisterDto} from "../dto/register.user.dto";
import {User} from "../entity/user.entity";
@injectable()
export class UsersController implements IUsersController {
    constructor(@inject(TYPES.IUsersRepository) private usersRepository: IUsersRepository) {
    }
    async register(req: Request<{}, {}, UserRegisterDto>, res: Response, next: NextFunction): Promise<void> {
        if(await this.usersRepository.userCheck(req.body.email)) {
            const newUser = new User(req.body.username, req.body.email);
            await newUser.setPassword(req.body.password, 10);
            const createdUser = await this.usersRepository.userRegister(newUser);
            if(createdUser) {
                res.status(201).json({
                    username: createdUser.username,
                    email: createdUser.email
                });
            } else {
                res.status(500);
                next(new Error("Error while register"));
            }
        } else {
            res.status(400);
            next(new Error("User already registered"));
        }

    }

    async login(req: Request, res: Response, next: NextFunction): Promise<void> {
        await this.usersRepository.userLogin();
        res.json({message: "Login the user"});
    }

    async current(req: Request, res: Response, next: NextFunction): Promise<void> {
        await this.usersRepository.userCurrent();
        res.json({message: "Current user"});
    }
}