import {inject, injectable} from "inversify";
import express, {Express, json} from "express";
import 'reflect-metadata';
import {TYPES} from "./types";
import {IContactRoute} from "./routes/contact.route.interface";
import {IErrorHandler} from "./middlewares/error.handler.interface";
import {MongooseService} from "./config/db-connection";
@injectable()
export class App {
    private app: Express;
    private readonly PORT: string | number;

    constructor(@inject(TYPES.IContactRoute) private contactRoute: IContactRoute,
                @inject(TYPES.IErrorHandler) private errorHandler: IErrorHandler,
                @inject(TYPES.MongooseService) private mongooseService: MongooseService) {
        this.app = express();
        this.PORT = process.env.PORT || 3000;
    }

    private useMiddlewares(): void{
        this.app.use(json());
        this.contactRoute.bindRoutes();
        this.app.use("/api/contacts", this.contactRoute.router);
        this.app.use(this.errorHandler.errorHandler);
    }

    public async startApp(): Promise<void> {
        await this.mongooseService.connectDb();
        this.useMiddlewares();
        this.app.listen(this.PORT, ()=> {
            console.log(`Port is ${process.env.PORT}`);
            console.log("Server has been started");
        });
    }
}