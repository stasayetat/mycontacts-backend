import {IContactController} from "./controllers/contact.controller.interface";
import {IContactRoute} from "./routes/contact.route.interface";
import {MongooseService} from "./config/db-connection";
import {IContactRepository} from "./repositories/contact.repository.interface";
import {IUserRoute} from "./routes/users.route.interface";
import {IUsersController} from "./controllers/users.controller.interface";
import {IUsersRepository} from "./repositories/users.repostiory.interface";
import {IValidateTokenHandler} from "./middlewares/validate.token.handler.interface";

export const TYPES = {
    IContactController: Symbol.for('IContactController'),
    IContactRoute: Symbol.for('IContactRoute'),
    IErrorHandler: Symbol.for('IErrorHandler'),
    MongooseService: Symbol.for('MongooseService'),
    IContactRepository: Symbol.for('IContactRepository'),
    IUserRoute: Symbol.for('IUserRoute'),
    IUsersController: Symbol.for('IUsersController'),
    IUsersRepository: Symbol.for('IUsersRepository'),
    IValidateTokenHandler: Symbol.for('IValidateTokenHandler'),
    App: Symbol.for('App')
}