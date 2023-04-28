import {IContactRepository} from "./contact.repository.interface";
import 'reflect-metadata';
import {injectable} from "inversify";
import mongoose, {model, Model, Schema} from "mongoose";
import {Contact} from "../entity/contact.entity";
import {ObjectId} from "mongodb";
import {ContactRoute} from "../routes/contact.route";
@injectable()
export class ContactRepository implements IContactRepository {
    private contactSchema = new Schema({
        user_id: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "User"
        },
        name: {
            type: String,
            required: [true, "Please add the contact name"],
        },
        email: {
            type: String,
            required: [true, "Please add the contact email"],
        },
        phone: {
            type: String,
            required: [true, "Please add the contact phone"],
        },
    }, {
        timestamps: true
    });
    private contactModel: Model<any>;
    constructor() {
        this.contactModel = mongoose.model("Contact", this.contactSchema);
    }

    async getAllContacts(userId: number): Promise<Contact[] | null> {
        return this.contactModel.find({
            user_id: userId
        });
    }
    async createNewContact(ferId: Schema.Types.ObjectId, name: string, email: string, phone: string): Promise<Contact | null> {
        return this.contactModel.create({
            name,
            email,
            phone,
            user_id: ferId
        });
    }

    async findOneContact(updateID: ObjectId): Promise<Contact | null> {
        console.log(`ID: ${updateID}`);
        return this.contactModel.findById(updateID);
    }

    async updateContact(id: ObjectId, contactUpdate: Contact): Promise<Contact | null> {
        console.log(`ID: ${id}`);
        const contact = this.contactModel.findByIdAndUpdate(id, {
            name: contactUpdate.name,
            email: contactUpdate.email,
            phone: contactUpdate.phone
        }, {
            new: true
        });
        return contact;
    }

    async deleteOneContact(id: ObjectId): Promise<Contact | null> {
        console.log(`ID: ${id}`);
        return this.contactModel.findByIdAndDelete(id, {
            new: true
        })
    }
}
