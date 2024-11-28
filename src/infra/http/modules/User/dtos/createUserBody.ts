import { IsBoolean, IsDate, IsEmail, IsInt, IsNotEmpty, IsString, IsStrongPassword } from 'class-validator';

export class CreateUserBody {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsInt()
    type: number;

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    image_profile: string;

    @IsStrongPassword()
    @IsNotEmpty()
    password: string;

    createdAt: Date;
    updatedAt: Date;
}
