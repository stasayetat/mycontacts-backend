import {Schema} from "mongoose";

export class Contact {
    constructor(private readonly _name: string, private readonly _email: string, private readonly _phone: string, private readonly _user_id?: Schema.Types.ObjectId) {
    }

    get name(): string {
        return this._name;
    }

    get email(): string {
        return this._email;
    }

    get phone(): string {
        return this._phone;
    }


    get user_id(): Schema.Types.ObjectId | null{
        if(this._user_id)
            return this._user_id;
        else
            return null;
    }
}