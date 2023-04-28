import {IsEmail, IsPhoneNumber, IsString} from "class-validator";

export class ContactDto {
    @IsString({
        message: "Bad username"
    })
    name: string;
    @IsEmail({}, {
        message: "Bad email"
    })
    email: string;
    @IsPhoneNumber('UA', {
        message: "Bad phone"
    })
    phone: string;

}