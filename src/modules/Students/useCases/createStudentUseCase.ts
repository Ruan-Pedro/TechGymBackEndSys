import { Inject, Injectable } from "@nestjs/common";
import { StudentRepository } from "../repositories/StudentRepository"
import { Student } from "../entities/Student";
// import { hash } from 'bcrypt';
// import { ClientProxy } from "@nestjs/microservices";

interface CreateStudentRequest {
  name: string;
  active: number;
  cep: number;
  birthday: Date;
  number: number;
  state: string;
  city: string;
  nickname: string;
  socialName: string;
  createdAt: Date;
  updatedAt: Date;
  membership_ID: string;
  transmitionList_ID: string;
  user_ID: string;
}

@Injectable()
export class CreateStudentUseCase {
    constructor(
        private studentRepository: StudentRepository
        // @Inject('COMUNICATION_SERVICE') private client: ClientProxy
    ) {}
    async execute({ active, name, nickname, birthday, cep, city, number, socialName, state, createdAt, updatedAt, membership_ID, transmitionList_ID, user_ID }: CreateStudentRequest) {
        const student = new Student({
            active,
            name,
            nickname,
            birthday,
            cep,
            city,
            number,
            socialName,
            state,
            createdAt,
            updatedAt,
            membership_ID,
            transmitionList_ID,
            user_ID
        });
        await this.studentRepository.create(student);

        // this.client.emit('user_registered_queue', {
        //     classId: class.id,
        //     description: class.description,
        //     username: class.username
        // });

        return student;
    }
}