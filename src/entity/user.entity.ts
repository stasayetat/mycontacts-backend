import {hash} from 'bcrypt';
import {Schema} from "mongoose";
export class User {
    private _password: string;
    constructor(private readonly _username: string, private readonly _email: string, private readonly _id?: Schema.Types.ObjectId) {
    }

    get username(): string {
        return this._username;
    }

    get email(): string {
        return this._email;
    }


    get password(): string {
        return this._password;
    }


    get id(): Schema.Types.ObjectId | null {
        if(this._id)
            return this._id;
        else
            return null;
    }

    public async setPassword(pass: string, salt: number): Promise<void> {
        this._password = await hash(pass, salt);
        console.log("Hashed password is " + this._password);
    }


}