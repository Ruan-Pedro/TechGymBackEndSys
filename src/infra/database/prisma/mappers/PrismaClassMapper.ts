import { Class } from "src/modules/Class/entities/Class";
import { Class as ClassRaw } from "@prisma/client";
import { randomUUID } from "crypto";

export class PrismaClassMapper {
    static toPrisma({ id, description, active, maxStudents, createdAt, updatedAt, value, schedule, professorsClass_ID, waitingList_ID }: Class): ClassRaw {
        return {
            ID: id || randomUUID(),
            description,
            active,
            maxStudents,
            createdAt,
            updatedAt,
            value,
            schedule,
            professorsClass_ID,
            waitingList_ID
        };
    }

    static toDomain({ ID, ...classData }: ClassRaw): Class {
        return new Class(
            {
                ...classData
            },
            ID
        );
    }
}
