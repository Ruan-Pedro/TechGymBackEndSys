import { Student } from "../entities/Student";

type Override = Partial<Student>;

export const makeUser = async ({ id, ...override }: Override): Promise<Student> => {
    // Hash da senha padrão ou a senha fornecida no override
    // const password = override.password ? await bcrypt.hash(override.password, 10) : await bcrypt.hash('999888', 10);

    // Retorna uma instância de User com as propriedades padrão e sobrescritas
    return new Student({
        active: 1,
        name: 'FrontEnzo Da Silva',
        nickname: 'Senior2anos',
        birthday: new Date('2005-12-20 19:00:00'),
        cep: 13064812,
        city: 'Campinas',
        number: 444,
        socialName: 'Erica Enzo',
        state: 'SP',
        // membership_ID: ,
        // transmitionList_ID: ,
        // user_ID: 
        ...override
    }, id);
};
