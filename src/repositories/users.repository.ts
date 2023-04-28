import {IUsersRepository} from "./users.repostiory.interface";
import {injectable} from "inversify";
import 'reflect-metadata';
import {model, Model, Schema} from "mongoose";
import {UserRegisterDto} from "../dto/register.user.dto";
import {User} from "../entity/user.entity";
@injectable()
export class UsersRepository implements IUsersRepository{

    private userSchema = new Schema({
        username: {
            type: String,
            required: [true, "Please add the user name"]
        },
        email: {
            type: String,
            required: [true, "Please add the user email"],
            unique: [true, 'This user already registered']
        },
        password: {
            type: String,
            required: [true, "Please add the password"]
        }
    }, {
        timestamps: true
    });


    private userModel = Model<any>;

    constructor() {
        this.userModel = model("User", this.userSchema);
    }
    async userRegister(newUser: User): Promise<User> {
        return await this.userModel.create({
            username: newUser.username,
            email: newUser.email,
            password: newUser.password
        });
    }

    async userCurrent(): Promise<void> {

    }

    async userLogin(): Promise<void> {

    }

    async userCheck(email: string): Promise<boolean> {
        const userAvailable = await this.userModel.findOne({
            email
        });
        if(userAvailable) {
            return false;
        } else {
            return true;
        }
    }
}