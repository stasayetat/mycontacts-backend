import {Router} from "express";

export interface IUserRoute {
    router: Router;
    bindRoutes: ()=> void;
}