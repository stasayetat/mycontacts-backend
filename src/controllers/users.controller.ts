import {IUsersController} from "./users.controller.interface";
import 'reflect-metadata';
import {inject, injectable} from "inversify";
import {Request, NextFunction, Response} from "express";
import {TYPES} from "../types";
import {IUsersRepository} from "../repositories/users.repostiory.interface";
import {UserRegisterDto} from "../dto/register.user.dto";
import {User} from "../entity/user.entity";
import {UserLoginDto} from "../dto/login.user.dto";
import {compare} from "bcrypt";
import {Secret, sign} from "jsonwebtoken";
@injectable()
export class UsersController implements IUsersController {
    constructor(@inject(TYPES.IUsersRepository) private usersRepository: IUsersRepository) {
    }
    async register(req: Request<{}, {}, UserRegisterDto>, res: Response, next: NextFunction): Promise<void> {
        if(await this.usersRepository.userCheck(req.body.email) == null) {
            const newUser = new User(req.body.username, req.body.email);
            await newUser.setPassword(req.body.password, Number(process.env.SALT));
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

    async login(req: Request<{}, {}, UserLoginDto>, res: Response, next: NextFunction): Promise<void> {
        const userDB = await this.usersRepository.userCheck(req.body.email);
        if(userDB && await compare(req.body.password, userDB.password)) {
            const accessToken = sign({
                user: {
                    id: userDB.id,
                    username: userDB.username,
                    email: userDB.email
                }},
                process.env.ACCESS_TOKEN as string,
                {
                    expiresIn: "15m"
                })
            res.status(200).json({
                accessToken
            })
        } else {
            res.status(401);
            next(new Error("Login failed"));
        }

    }

    public async current(req: Request, res: Response, next: NextFunction): Promise<void> {
        //await this.usersRepository.userCurrent();
        res.json(req.body.user);
    }
}