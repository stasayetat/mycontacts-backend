import {hash} from 'bcrypt';
export class User {
    private _password: string;
    constructor(private readonly _username: string, private readonly _email: string) {
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

    public async setPassword(pass: string, salt: number): Promise<void> {
        this._password = await hash(pass, salt);
        console.log("Hashed password is " + this._password);
    }
}