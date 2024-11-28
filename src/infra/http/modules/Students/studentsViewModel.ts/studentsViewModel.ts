import { Student } from "src/modules/Students/entities/Student"

export class StudentViewModel {
    static toHttp({ id, active, name, nickname, birthday, cep, city, number, socialName, state, createdAt, updatedAt, membership_ID, transmitionList_ID, user_ID }: Student) {
        return {
            id,
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
        }
    }
}