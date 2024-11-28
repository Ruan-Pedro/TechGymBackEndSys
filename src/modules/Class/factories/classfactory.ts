import { Class } from "../entities/Class";
import * as bcrypt from 'bcrypt';

type Override = Partial<Class>;

export const makeUser = async ({ id, ...override }: Override): Promise<Class> => {
    // Hash da senha padrão ou a senha fornecida no override
    // const password = override.password ? await bcrypt.hash(override.password, 10) : await bcrypt.hash('999888', 10);

    // Retorna uma instância de User com as propriedades padrão e sobrescritas
    return new Class({
        description: 'Karatê',
        active: 1,
        maxStudents: 12, // Senha hashada
        value: 120.5,
        schedule: new Date('2024-12-20 19:00:00'),
        ...override
    }, id);
};
