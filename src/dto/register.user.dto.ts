import {IsEmail, IsString} from "class-validator";

export class UserRegisterDto {
    @IsString({
        message: "Bad username"
    })
    username: string;
    @IsEmail({}, {
        message: "Bad email"
    })
    email: string
    @IsString({
        message: "Bad password"
    })
    password: string;
}