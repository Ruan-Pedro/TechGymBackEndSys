import { IsBoolean, IsDate, IsEmail, IsInt, IsNotEmpty, IsString, IsStrongPassword, MinLength } from 'class-validator';

export class SignInBody {
    @IsNotEmpty()
    @IsEmail()
    @IsString()
    email: string;

    @IsString()
    @MinLength(6)
    @IsStrongPassword()
    password: string;
}