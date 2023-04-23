import {Request, Response, Router} from "express";
import {ContactController} from "../controllers/contact.controller";
import {IContactController} from "../controllers/contact.controller.interface";
import {inject, injectable} from "inversify";
import {TYPES} from "../types";
import 'reflect-metadata';
import {IContactRoute} from "./contact.route.interface";
@injectable()
export class ContactRoute implements IContactRoute{
    public router: Router;

    constructor(@inject(TYPES.IContactController) private contactController: IContactController) {
        this.router = Router();
    }

    bindRoutes(): void {
        this.router.get('/', this.contactController.getContact);
        this.router.get('/:id', this.contactController.getOneContact);
        this.router.post('/', this.contactController.createContact);
        this.router.put('/:id', this.contactController.updateOneContact);
        this.router.delete('/:id', this.contactController.deleteOneContact);
    }


}
