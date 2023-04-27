import {IContactController} from "./controllers/contact.controller.interface";
import {IContactRoute} from "./routes/contact.route.interface";
import {MongooseService} from "./config/db-connection";
import {IContactRepository} from "./repositories/contact.repository.interface";

export const TYPES = {
    IContactController: Symbol.for('IContactController'),
    IContactRoute: Symbol.for('IContactRoute'),
    IErrorHandler: Symbol.for('IErrorHandler'),
    MongooseService: Symbol.for('MongooseService'),
    IContactRepository: Symbol.for('IContactRepository'),
    App: Symbol.for('App')
}