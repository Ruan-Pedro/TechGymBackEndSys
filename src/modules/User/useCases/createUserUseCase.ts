import { Inject, Injectable } from "@nestjs/common";
import { UserRepository } from "../repositories/UserRepository"
import { User } from "../entities/User";
import { hash } from 'bcrypt';
import { ClientProxy } from "@nestjs/microservices";

interface CreateUserRequest {
    email: string
    image_profile: string
    password: string
    type: number
    updatedAt: Date
    username: string
    createdAt: Date
}

@Injectable()
export class CreateUserUseCase {
    constructor(
        private userRepository: UserRepository,
        @Inject('COMUNICATION_SERVICE') private client: ClientProxy
    ) {}
    async execute({ email, image_profile, password, type, updatedAt, username, createdAt }: CreateUserRequest) {
        const user = new User({
            email,
            image_profile,
            password: await hash(password, 10),
            type,
            updatedAt,
            username,
            createdAt
        });
        await this.userRepository.create(user);

        this.client.emit('user_registered_queue', {
            userId: user.id,
            email: user.email,
            username: user.username
        });

        return user;
    }
}