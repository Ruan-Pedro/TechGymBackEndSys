import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { UserRepository } from "src/modules/User/repositories/UserRepository";
import { PrismaUserRepository } from "./repositories/PrismaUserRepository";
import { ClassRepository } from "src/modules/Class/repositories/ClassRepository";
import { PrismaClassRepository } from "./repositories/PrismaClassRepository";
import { StudentRepository } from "src/modules/Students/repositories/StudentRepository";
import { PrismaStudentRepository } from "./repositories/PrismaStudentRepository";

@Module({
    providers: [PrismaService,
        {
            provide: UserRepository,
            useClass: PrismaUserRepository
        },
        {
            provide: ClassRepository,
            useClass: PrismaClassRepository
        },
        {
            provide: StudentRepository,
            useClass: PrismaStudentRepository
        }
    ],
    exports: [UserRepository, ClassRepository, StudentRepository]
})
export class DatabaseModule {}