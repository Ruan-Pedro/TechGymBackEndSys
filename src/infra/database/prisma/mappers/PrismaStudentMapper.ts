import { Students as StudentsRaw, User as UserRaw } from "@prisma/client";
import { randomUUID } from "crypto";
import { Student } from "src/modules/Students/entities/Student";
// import { User } from "src/modules/User/entities/User";

export class PrismaStudentMapper {
    static toPrisma({ id, active, name, nickname, birthday, cep, city, number, socialName, state, createdAt,updatedAt, membership_ID, transmitionList_ID, user_ID }: Student): StudentsRaw {
        return {
            ID: id || randomUUID(),
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
        };
    }

    static toDomain(student: any): Student {
        return new Student({
        //   id: student.id,,
          name: student.name,
          email: student.User?.email || null,
          imageProfile: student.User?.image_profile || null,
          type: student.User?.type || null,
          active: student.active,
          birthday: student.birthday,
          cep: student.cep,
          city: student.city,
          nickname: student.nickname,
          number: student.number,
          socialName: student.socialName,
          state: student.state,
          createdAt: student.createdAt,
          membership_ID: student.membership_ID,
          transmitionList_ID: student.transmitionList_ID,
          updatedAt: student.updatedAt,
          user_ID: student.user_ID
          // Map the rest of the properties...
        });
      }
}
