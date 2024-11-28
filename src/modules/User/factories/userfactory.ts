import { User } from "../entities/User";
import * as bcrypt from 'bcrypt';

type Override = Partial<User>;

export const makeUser = async ({ id, ...override }: Override): Promise<User> => {
    // Hash da senha padrão ou a senha fornecida no override
    const password = override.password ? await bcrypt.hash(override.password, 10) : await bcrypt.hash('999888', 10);

    // Retorna uma instância de User com as propriedades padrão e sobrescritas
    return new User({
        email: "testoso123@testoso.com",
        username: "testosão",
        password, // Senha hashada
        image_profile: 'https://i.imgur.com/HUl1fdV.jpeg',
        type: 1,
        ...override
    }, id);
};
