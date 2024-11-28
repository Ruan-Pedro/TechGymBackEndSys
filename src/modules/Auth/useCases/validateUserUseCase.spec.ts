import { ValidateUserUseCase } from "./validateUserUseCase";
import { UserRepositoryInMemory } from "src/modules/User/repositories/UserRepositoryInMemory";
import { makeUser } from "src/modules/User/factories/userfactory";
import { UnauthorizedException } from "@nestjs/common";
import * as bcrypt from 'bcrypt';

let validateUserUseCase: ValidateUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;

describe("Validate User", () => {

    beforeAll(() => {
        userRepositoryInMemory = new UserRepositoryInMemory();
        validateUserUseCase = new ValidateUserUseCase(userRepositoryInMemory);
    });

    it("Should be able to return user when credentials are correct", async () => {
        const userPasswordWithNoEncryption = '999888';

        const user = await makeUser({
            password: await bcrypt.hash(userPasswordWithNoEncryption, 10) // Será hashado automaticamente
        });

        userRepositoryInMemory.users = [user];

        const result = await validateUserUseCase.execute({
            email: user.email,
            username: user.username,
            password: userPasswordWithNoEncryption,
            image_profile: user.image_profile,
            type: user.type
        });

        expect(result).toEqual(user);
    });

    it("Should throw an error when credentials are incorrect", async () => {
        const userPasswordWithNoEncryption = '999888';

        const user = await makeUser({
            password: userPasswordWithNoEncryption
        });

        userRepositoryInMemory.users = [user];

        await expect(validateUserUseCase.execute({
            email: 'incorrect@teste.com',
            password: userPasswordWithNoEncryption,
            image_profile: 'https://i.imgur.com/HUl1fdV.jpeg',
            type: 1,
            username: 'XURALEMO'
        })).rejects.toThrow(UnauthorizedException);

        await expect(validateUserUseCase.execute({
            email: user.email,
            password: 'IncorrectPassword',
            image_profile: 'https://i.imgur.com/HUl1fdV.jpeg',
            type: 1,
            username: user.username
        })).rejects.toThrow(UnauthorizedException);
    });
});
