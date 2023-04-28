"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const contact_route_1 = require("./routes/contact.route");
const inversify_1 = require("inversify");
require("reflect-metadata");
const types_1 = require("./types");
const contact_controller_1 = require("./controllers/contact.controller");
const app_1 = require("./app");
const error_handler_1 = require("./middlewares/error.handler");
const db_connection_1 = require("./config/db-connection");
const contact_repository_1 = require("./repositories/contact.repository");
const users_route_1 = require("./routes/users.route");
const users_controller_1 = require("./controllers/users.controller");
const users_repository_1 = require("./repositories/users.repository");
(0, dotenv_1.config)();
const myContainer = new inversify_1.Container();
myContainer.bind(types_1.TYPES.IContactController).to(contact_controller_1.ContactController).inSingletonScope();
myContainer.bind(types_1.TYPES.IContactRoute).to(contact_route_1.ContactRoute).inSingletonScope();
myContainer.bind(types_1.TYPES.IErrorHandler).to(error_handler_1.ErrorHandler).inSingletonScope();
myContainer.bind(types_1.TYPES.MongooseService).to(db_connection_1.MongooseService).inSingletonScope();
myContainer.bind(types_1.TYPES.IContactRepository).to(contact_repository_1.ContactRepository).inSingletonScope();
myContainer.bind(types_1.TYPES.IUserRoute).to(users_route_1.UsersRoute).inSingletonScope();
myContainer.bind(types_1.TYPES.IUsersController).to(users_controller_1.UsersController).inSingletonScope();
myContainer.bind(types_1.TYPES.IUsersRepository).to(users_repository_1.UsersRepository).inSingletonScope();
myContainer.bind(types_1.TYPES.App).to(app_1.App);
async function start() {
    const app = myContainer.get(types_1.TYPES.App);
    await app.startApp();
}
start();
//# sourceMappingURL=server.js.map