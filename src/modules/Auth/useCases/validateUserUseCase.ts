import { Injectable, UnauthorizedException } from "@nestjs/common";
import { compare } from "bcrypt";
import { UserRepository } from "src/modules/User/repositories/UserRepository";

interface ValidateUserRequest {
    email: string;
    password: string;
    type?: number;
    username?: string;
    image_profile?: string;
}

@Injectable()
export class ValidateUserUseCase {
    constructor(private userRepository: UserRepository) {}

    async execute({ email, password }: ValidateUserRequest) {
        const user = await this.userRepository.findByEmail(email)

        if (user) {
            const isPasswordMatched = await compare(password, user.password)
            if (isPasswordMatched) return user;
        }

        throw new UnauthorizedException('Email ou senha incorretos');
    }
}