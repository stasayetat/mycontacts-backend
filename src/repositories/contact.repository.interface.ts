import {Model, Schema} from "mongoose";
import {Contact} from "../entity/contact.entity";
import {ObjectId} from "mongodb";

export interface IContactRepository {
    getAllContacts: (userId: number)=> Promise<Contact[] | null>;
    createNewContact: (ferId: Schema.Types.ObjectId, contactName: string, email: string, phone: string)=> Promise<Contact | null>;
    findOneContact: (id: ObjectId)=> Promise<Contact | null>;
    updateContact: (id: ObjectId, contactUpdate: Contact)=> Promise<Contact | null>;
    deleteOneContact: (id: ObjectId)=> Promise<Contact | null>;
}