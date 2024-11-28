import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserUseCase } from "src/modules/User/useCases/createUserUseCase";
import { CreateUserBody } from "./dtos/createUserBody";
import { UserViewModel } from "./userViewModel.ts/userViewModel";

@Controller('users')
export class UserController {

    constructor(private createUserUseCase: CreateUserUseCase) {}

    @Post()
    async createPost(@Body() body:CreateUserBody) {
        const { username, email, image_profile, password, type, createdAt, updatedAt } = body;
        const user = await this.createUserUseCase.execute({
            username,
            email,
            image_profile,
            password,
            type,
            createdAt,
            updatedAt
        })
        return UserViewModel.toHttp(user);
    }
}