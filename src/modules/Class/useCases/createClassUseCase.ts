import { Inject, Injectable } from "@nestjs/common";
import { ClassRepository } from "../repositories/ClassRepository"
import { Class } from "../entities/Class";
import { hash } from 'bcrypt';
import { ClientProxy } from "@nestjs/microservices";

interface CreateClassRequest {
    description: string
    active: number;
    maxStudents: number;
    createdAt: Date;
    updatedAt: Date;
    value: number;
    schedule: Date;
}

@Injectable()
export class CreateClassUseCase {
    constructor(
        private classRepository: ClassRepository
        // @Inject('COMUNICATION_SERVICE') private client: ClientProxy
    ) {}
    async execute({ description, active, maxStudents, createdAt, updatedAt, value, schedule }: CreateClassRequest) {
        const classCreation = new Class({
            description,
            active,
            maxStudents,
            createdAt,
            updatedAt,
            value,
            schedule
        });
        await this.classRepository.create(classCreation);

        // this.client.emit('user_registered_queue', {
        //     classId: class.id,
        //     description: class.description,
        //     username: class.username
        // });

        return classCreation;
    }
}