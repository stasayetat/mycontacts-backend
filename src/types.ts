import {IContactController} from "./controllers/contact.controller.interface";
import {IContactRoute} from "./routes/contact.route.interface";

export const TYPES = {
    IContactController: Symbol.for('IContactController'),
    IContactRoute: Symbol.for('IContactRoute'),
    App: Symbol.for('App')
}