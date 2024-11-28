import { User } from "src/modules/User/entities/User";
import { User as UserRaw } from "@prisma/client";
import { randomUUID } from "crypto";

export class PrismaUserMapper {
    static toPrisma({ id, email, image_profile, password, type, updatedAt, username, createdAt }: User): UserRaw {
        return {
            ID: id || randomUUID(),
            email,
            image_profile,
            password,
            type,
            updatedAt,
            username,
            createdAt
        }
    }

    static toDomain({ID, ...userData}: UserRaw): User {
        return new User({
            ...userData
        }, ID);
    }
}