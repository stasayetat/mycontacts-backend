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
import {IUserRoute} from "./routes/users.route.interface";
import {UsersRoute} from "./routes/users.route";
import {IUsersController} from "./controllers/users.controller.interface";
import {UsersController} from "./controllers/users.controller";
import {IUsersRepository} from "./repositories/users.repostiory.interface";
import {UsersRepository} from "./repositories/users.repository";
import {IValidateTokenHandler} from "./middlewares/validate.token.handler.interface";
import {ValidateTokenHandler} from "./middlewares/validate.token.handler";
config();
const myContainer = new Container();
myContainer.bind<IContactController>(TYPES.IContactController).to(ContactController).inSingletonScope();
myContainer.bind<IContactRoute>(TYPES.IContactRoute).to(ContactRoute).inSingletonScope();
myContainer.bind<IErrorHandler>(TYPES.IErrorHandler).to(ErrorHandler).inSingletonScope();
myContainer.bind<MongooseService>(TYPES.MongooseService).to(MongooseService).inSingletonScope();
myContainer.bind<IContactRepository>(TYPES.IContactRepository).to(ContactRepository).inSingletonScope();
myContainer.bind<IUserRoute>(TYPES.IUserRoute).to(UsersRoute).inSingletonScope();
myContainer.bind<IUsersController>(TYPES.IUsersController).to(UsersController).inSingletonScope();
myContainer.bind<IUsersRepository>(TYPES.IUsersRepository).to(UsersRepository).inSingletonScope();
myContainer.bind<IValidateTokenHandler>(TYPES.IValidateTokenHandler).to(ValidateTokenHandler).inSingletonScope();
myContainer.bind<App>(TYPES.App).to(App);

async function start(): Promise<void> {
    const app = myContainer.get<App>(TYPES.App);
    await app.startApp();
}
start();



