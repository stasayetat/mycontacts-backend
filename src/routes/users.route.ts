import {IUserRoute} from "./users.route.interface";
import {inject, injectable} from "inversify";
import 'reflect-metadata';
import {Router} from "express";
import {TYPES} from "../types";
import {IUsersController} from "../controllers/users.controller.interface";
import {ValidateMiddleware} from "../middlewares/validate.middleware";
import {UserRegisterDto} from "../dto/register.user.dto";
@injectable()
export class UsersRoute implements IUserRoute{
    public router: Router;

    constructor(@inject(TYPES.IUsersController) private userController: IUsersController) {
        this.router = Router();
    }
    bindRoutes(): void {
        this.router.post("/register", new ValidateMiddleware(UserRegisterDto).execute, this.userController.register.bind(this.userController));
        this.router.post("/login", this.userController.login.bind(this.userController));
        this.router.post("/current", this.userController.current.bind(this.userController));
    }



}