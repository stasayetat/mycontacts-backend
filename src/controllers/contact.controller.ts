import {NextFunction, Request, Response} from "express";
import {IContactController} from "./contact.controller.interface";
import {inject, injectable} from "inversify";
import 'reflect-metadata';
import {IContactRepository} from "../repositories/contact.repository.interface";
import {TYPES} from "../types";
import {MongooseService} from "../config/db-connection";
import {Contact} from "../entity/contact.entity";
import {ObjectId} from "mongodb";
@injectable()
export class ContactController implements IContactController{
    constructor(@inject(TYPES.IContactRepository) private contactRepository: IContactRepository) {
    }
    async getContact (req: Request, res: Response, next: NextFunction): Promise<void> {
        const allContacts = await this.contactRepository.getAllContacts();
        res.status(200).json(allContacts);
    };

    // public getContact = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    //     const allContacts = await this.contactRepository.getAllContacts();
    //     res.status(200).json(allContacts);
    // }
    async createContact (req: Request, res: Response, next: NextFunction): Promise<void> {
        console.log('Request body is ' + req.body);
        const {name, email, phone} = req.body;
        if(!name || !email || !phone) {
            res.status(400);
            next(new Error("All field are mandatory"));
        } else {
            const contact = await this.contactRepository.createNewContact(name, email, phone);
            if(contact) {
                res.status(201).json(contact);
            }
            else {
                res.status(400);
                next(new Error("Something go wrong!"));
            }

        }

    };

    async getOneContact (req: Request, res: Response, next: NextFunction): Promise<void> {
        let contactID = this.createObjectID(req.params.id);
        let getContact;
        if(contactID instanceof ObjectId){
            getContact = await this.contactRepository.findOneContact(contactID);
        }
        if(!getContact) {
            res.status(404);
            next(new Error("Contact not found"));
        }
        else
            res.json(getContact);
    }



    async updateOneContact (req: Request, res: Response, next: NextFunction): Promise<void> {
        const contactID = this.createObjectID(req.params.id);
        if(contactID instanceof ObjectId) {
            const cont = await this.contactRepository.updateContact(contactID, req.body);
            res.json(cont);
        }
        else {
            res.status(404);
            next(new Error("Something go wrong"));
        }
    }

    async deleteOneContact (req: Request, res: Response, next: NextFunction): Promise<void> {
        const contactID = this.createObjectID(req.params.id);
        if(contactID instanceof ObjectId) {
            const deleteContact = await this.contactRepository.deleteOneContact(contactID);
            res.json(deleteContact);
        }
        else {
            res.status(404);
            next(new Error("Something in DELETE go wrong"));
        }

    }

    createObjectID(id: string): ObjectId | undefined{
        let contactID;
        try {
            contactID = new ObjectId(id);
        } catch (error) {
            if(error instanceof Error)
                console.log(`Error: ${error.message}`);
        }
        return contactID;
    }
}
