import {config} from "dotenv";
import {ContactRoute} from "./routes/contact.route";
import {Container, inject, injectable} from "inversify";
import 'reflect-metadata';
import {TYPES} from "./types";
import {IContactController} from "./controllers/contact.controller.interface";
import {ContactController} from "./controllers/contact.controller";
import {App} from "./app";
import {IContactRoute} from "./routes/contact.route.interface";
import {ErrorHandler} from "./middlewares/error.handler";
import {IErrorHandler} from "./middlewares/error.handler.interface";
import {MongooseService} from "./config/db-connection";
import {ContactRepository} from "./repositories/contact.repository";
import {IContactRepository} from "./repositories/contact.repository.interface";
config();
const myContainer = new Container();
myContainer.bind<IContactController>(TYPES.IContactController).to(ContactController).inSingletonScope();
myContainer.bind<IContactRoute>(TYPES.IContactRoute).to(ContactRoute).inSingletonScope();
myContainer.bind<IErrorHandler>(TYPES.IErrorHandler).to(ErrorHandler).inSingletonScope();
myContainer.bind<MongooseService>(TYPES.MongooseService).to(MongooseService).inSingletonScope();
myContainer.bind<IContactRepository>(TYPES.IContactRepository).to(ContactRepository).inSingletonScope();
myContainer.bind<App>(TYPES.App).to(App);

async function start(): Promise<void> {
    const app = myContainer.get<App>(TYPES.App);
    await app.startApp();
}
start();



