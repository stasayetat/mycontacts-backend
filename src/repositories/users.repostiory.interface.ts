import {UserRegisterDto} from "../dto/register.user.dto";
import {User} from "../entity/user.entity";

export interface IUsersRepository {
    userRegister(newUser: User): Promise<User | null>;
    userLogin(): Promise<void>;
    userCurrent(): Promise<void>;
    userCheck(email: string): Promise<boolean>;
}