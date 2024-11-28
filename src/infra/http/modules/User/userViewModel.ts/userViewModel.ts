import { User } from "src/modules/User/entities/User";

export class UserViewModel {
    static toHttp({ email, image_profile,/* password,*/ type, updatedAt, username, createdAt }: User) {
        return {
            email,
            image_profile,
            // password,
            type,
            updatedAt,
            username,
            createdAt,
        }
    }
}