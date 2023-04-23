import {Router} from "express";

export interface IContactRoute {
    router: Router;
    bindRoutes: ()=> void;
}