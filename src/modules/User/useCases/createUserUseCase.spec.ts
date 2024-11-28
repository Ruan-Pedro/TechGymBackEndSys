import { compare } from "bcrypt";
import { UserRepositoryInMemory } from "../repositories/UserRepositoryInMemory";
import { CreateUserUseCase } from "./createUserUseCase";

let createUserUseCase: CreateUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;

describe('Create User', () => {
    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory()
        createUserUseCase = new CreateUserUseCase(userRepositoryInMemory)
    })

    it("Should be able to create user", async () => {
        expect(userRepositoryInMemory.users).toEqual([]);

        const user = await createUserUseCase.execute({
            username: 'testoso',
            email: 'email@teste.com',
            image_profile: 'https://i.imgur.com/HUl1fdV.jpeg',
            password: '123456',
            type: 1,
            updatedAt: null,
            createdAt: new Date()
        });

        expect(userRepositoryInMemory.users).toEqual([user]);
    });

    it("Should be able to create user with password encrypted", async () => {
        const userPasswordWithNoEncryption = '123456';
        const user = await createUserUseCase.execute({
            username: 'testoso',
            email: 'email@teste.com',
            image_profile: 'https://i.imgur.com/HUl1fdV.jpeg',
            password: userPasswordWithNoEncryption,
            type: 1,
            updatedAt: null,
            createdAt: new Date()
        });
        const userPassworEncrypted = await compare(userPasswordWithNoEncryption, user.password);
        expect(userPassworEncrypted).toBeTruthy();
    });
});