import { compare } from "bcrypt";
import { ClassRepositoryInMemory } from "../repositories/ClassRepositoryInMemory";
import { CreateClassUseCase } from "./createClassUseCase";

let createClassUseCase: CreateClassUseCase;
let classRepositoryInMemory: ClassRepositoryInMemory;

describe('Create User', () => {
    beforeEach(() => {
        classRepositoryInMemory = new ClassRepositoryInMemory()
        createClassUseCase = new CreateClassUseCase(classRepositoryInMemory)
    })

    it("Should be able to create user", async () => {
        expect(classRepositoryInMemory.classes).toEqual([]);

        const classInstance = await createClassUseCase.execute({
            description: 'Karatê',
            active: 1,
            maxStudents: 12, // Senha hashada
            value: 120.5,
            schedule: new Date('2024-12-20 19:00:00'),
            updatedAt: new Date(),
            createdAt: new Date()
        });

        expect(classRepositoryInMemory.classes).toEqual([classInstance]);
    });

    // it("Should be able to create user with password encrypted", async () => {
    //     const userPasswordWithNoEncryption = '123456';
    //     const user = await createClassUseCase.execute({
    //         username: 'testoso',
    //         email: 'email@teste.com',
    //         image_profile: 'https://i.imgur.com/HUl1fdV.jpeg',
    //         password: userPasswordWithNoEncryption,
    //         type: 1,
    //         updatedAt: null,
    //         createdAt: new Date()
    //     });
    //     const userPassworEncrypted = await compare(userPasswordWithNoEncryption, user.password);
    //     expect(userPassworEncrypted).toBeTruthy();
    // });
});