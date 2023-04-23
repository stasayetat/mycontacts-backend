import {inject, injectable} from "inversify";
import express, {Express, json} from "express";
import 'reflect-metadata';
import {TYPES} from "./types";
import {IContactRoute} from "./routes/contact.route.interface";
@injectable()
export class App {
    private app: Express;
    private readonly PORT: string | number;

    constructor(@inject(TYPES.IContactRoute) private contactRoute: IContactRoute) {
        this.app = express();
        this.PORT = process.env.PORT || 3000;
    }

    private useMiddlewares(): void{
        this.app.use(json());
        this.contactRoute.bindRoutes();
        this.app.use("/api/contacts", this.contactRoute.router);
    }

    public startApp(): void {
        this.useMiddlewares();
        this.app.listen(this.PORT, ()=> {
            console.log(`Port is ${process.env.PORT}`);
            console.log("Server has been started");
        });
    }
}