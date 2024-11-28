import { Body, Controller, Get, Post, Query, Param } from "@nestjs/common";
import { CreateClassBody } from "./dtos/createClassBody";
import { ClassViewModel } from "./classViewModel.ts/classViewModel";
import { CreateClassUseCase } from "src/modules/Class/useCases/createClassUseCase";
import { ClassRepository } from "src/modules/Class/repositories/ClassRepository";

@Controller('classes')
export class ClassController {

    constructor(
        private createClassUseCase: CreateClassUseCase,
        private classRepository: ClassRepository
    ) {}

    @Get(':id')
    async findByID(@Param('id') id: string) {
        if (!id) throw new Error("ID param is required");

        const classInstance = await this.classRepository.findByID(id);
        if (!classInstance) throw new Error(`Class with ID ${id} not found`);

        return ClassViewModel.toHttp(classInstance);
    }

    @Get()
    async findAll() {
        const classes = await this.classRepository.findAll();
        if (!classes) throw new Error(`Classes not found`);

        return classes.map(ClassViewModel.toHttp);
    }

    @Get()
    async findByDescription(@Query('description') description: string) {
        if (!description) throw new Error("Description query param is required");

        const classes = await this.classRepository.findByDescription(description);
        if (!classes) throw new Error(`Classes with Description '${description}' not found`);

        return classes.map(ClassViewModel.toHttp);
    }

    @Post()
    async createPost(@Body() body:CreateClassBody) {
        const { description, active, maxStudents, createdAt, updatedAt, value, schedule } = body;
        const classResult = await this.createClassUseCase.execute({
            description,
            active,
            maxStudents,
            createdAt,
            updatedAt,
            value,
            schedule
        })
        return ClassViewModel.toHttp(classResult);
    }
}