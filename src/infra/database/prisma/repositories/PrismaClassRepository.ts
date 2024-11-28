
import { PrismaService } from "../prisma.service";
// import { Class } from "src/modules/Class/entities/Class";
import { PrismaClassMapper } from "../mappers/PrismaClassMapper";
import { Injectable } from "@nestjs/common";
import { ClassRepository } from "src/modules/Class/repositories/ClassRepository";
import { Class } from "src/modules/Class/entities/Class";

@Injectable()
export class PrismaClassRepository implements ClassRepository {
    constructor(private prisma: PrismaService) {}

    async findByID(ID: string): Promise<Class | null> {
        const classInDB = await this.prisma.class.findUnique({
            where: { ID }
        });

        if (!classInDB) return null;

        return PrismaClassMapper.toDomain(classInDB);
    }

    async create(classInstance: Class): Promise<void> {

        const classInstanceRaw = PrismaClassMapper.toPrisma(classInstance)

        await this.prisma.class.create({
          data: classInstanceRaw  
        })
    }

    async findByDescription(description: string): Promise<Class[]> {
        const classes = await this.prisma.class.findMany({
            where: {
                description: {
                    contains: description
                }
            }
        })

        if (!classes) return [];

        return classes.map(PrismaClassMapper.toDomain);
    }

    async findAll(): Promise<Class[]> {
        const classes = await this.prisma.class.findMany()

        if (!classes) return [];

        return classes.map(PrismaClassMapper.toDomain);
    }
}