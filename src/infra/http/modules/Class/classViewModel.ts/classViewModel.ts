import { Class } from "src/modules/Class/entities/Class"

export class ClassViewModel {
    static toHttp({ id, description, active, maxStudents, createdAt, updatedAt, value, schedule }: Class) {
        return {
            id,
            description,
            active,
            maxStudents,
            createdAt,
            updatedAt,
            value,
            schedule
        }
    }
}