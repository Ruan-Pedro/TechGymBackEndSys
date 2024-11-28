
import { PrismaService } from "../prisma.service";
import { Injectable } from "@nestjs/common";
import { Student } from "src/modules/Students/entities/Student";
import { StudentRepository } from "src/modules/Students/repositories/StudentRepository";
import { PrismaStudentMapper } from "../mappers/PrismaStudentMapper";

@Injectable()
export class PrismaStudentRepository implements StudentRepository {
    constructor(private prisma: PrismaService) {}

    async findByID(ID: string): Promise<Student | null> {
        const student = await this.prisma.students.findUnique({
            where: { ID }
        });

        if (!student) return null;

        return PrismaStudentMapper.toDomain(student);
    }

    async create(student: Student): Promise<void> {

        const studentRaw = PrismaStudentMapper.toPrisma(student)

        await this.prisma.students.create({
          data: studentRaw  
        })
    }

    async findByName(name: string): Promise<Student[]> {
        const students = await this.prisma.students.findMany({
            where: {
                name: {
                    contains: name
                }
            }
        })

        if (!students) return [];

        return students.map(PrismaStudentMapper.toDomain);
    }

    async findAll(): Promise<Student[]> {
        const students = await this.prisma.students.findMany({
            include: {
                User: true
            }
        })

        if (!students) return [];

        return students.map((student) => {
            return PrismaStudentMapper.toDomain({
                ...student,
                User: student.User || { image_profile: null, email: null, type: null },
            });
        });
    }
}