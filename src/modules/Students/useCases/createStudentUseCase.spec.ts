// import { compare } from "bcrypt";
import { StudentRepositoryInMemory } from "../repositories/StudentRepositoryInMemory";
import { CreateStudentUseCase } from "./createStudentUseCase";

let createStudentUseCase: CreateStudentUseCase;
let studentRepositoryInMemory: StudentRepositoryInMemory;

describe('Create Student', () => {
    beforeEach(() => {
        studentRepositoryInMemory = new StudentRepositoryInMemory()
        createStudentUseCase = new CreateStudentUseCase(studentRepositoryInMemory)
    })

    it("Should be able to create student", async () => {
        expect(studentRepositoryInMemory.students).toEqual([]);

        const student = await createStudentUseCase.execute({
            name: 'FrontEnzo Da Silva',
            active: 1,
            nickname: 'Senior2anos',
            birthday: new Date('2005-12-20 19:00:00'),
            cep: 13064812,
            city: 'Campinas',
            number: 444,
            socialName: 'Erica Enzo',
            state: 'SP',
            membership_ID: 'ss',
            createdAt: new Date('2005-12-20 19:00:00'),
            transmitionList_ID: '',
            updatedAt: new Date('2005-12-20 19:00:00'),
            user_ID: ''
            // membership_ID: ,
            // transmitionList_ID: ,
            // user_ID:
        });

        expect(studentRepositoryInMemory.students).toEqual([student]);
    });

    // it("Should be able to create user with password encrypted", async () => {
    //     const userPasswordWithNoEncryption = '123456';
    //     const user = await createStudentUseCase.execute({
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