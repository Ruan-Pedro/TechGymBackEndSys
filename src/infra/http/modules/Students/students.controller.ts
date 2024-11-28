import { Body, Controller, Get, Post, Query, Param, BadRequestException } from "@nestjs/common";
import { CreateStudentBody } from "./dtos/createStudentsBody";
import { StudentViewModel } from "./studentsViewModel.ts/studentsViewModel";
import { CreateStudentUseCase } from "src/modules/Students/useCases/createStudentUseCase";
import { StudentRepository } from "src/modules/Students/repositories/StudentRepository";

@Controller('students')
export class StudentController {

    constructor(
        private createStudentUseCase: CreateStudentUseCase,
        private studentRepository: StudentRepository
    ) {}

    @Get()
    async findAll() {
        const students = await this.studentRepository.findAll();
        if (!students) throw new BadRequestException(`Students not found`);

        return students.map(StudentViewModel.toHttp);
    }

    @Get(':id')
    async findByID(@Param('id') id: string) {
        if (!id) throw new BadRequestException("ID param is required");

        const classInstance = await this.studentRepository.findByID(id);
        if (!classInstance) throw new Error(`Class with ID ${id} not found`);

        return StudentViewModel.toHttp(classInstance);
    }

    @Get()
    async findByDescription(@Query('name') name: string) {
        if (!name) throw new BadRequestException("Description query param is required");

        const student = await this.studentRepository.findByName(name);
        if (!student) throw new BadRequestException(`Students with name '${name}' not found`);

        return student.map(StudentViewModel.toHttp);
    }

    @Post()
    async createPost(@Body() body: CreateStudentBody) {
        const { active, name, nickname, birthday, cep, city, number, socialName, state, createdAt,updatedAt, membership_ID, transmitionList_ID, user_ID } = body;
        const student = await this.createStudentUseCase.execute({
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
        })
        return StudentViewModel.toHttp(student);
    }
}