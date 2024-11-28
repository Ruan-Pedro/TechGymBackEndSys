import { Student } from "../entities/Student";

export abstract class StudentRepository {
    /**
   * Método para buscar um aluno pelo id.
   * @param id id do aluno.
   * @returns Aluno correspondente ou `null` se não for encontrado.
   */
    abstract findByID(id: string): Promise<Student | null>;

    /**
     * @param student
     */
    abstract create(student: Student): Promise<void>;

    /**
     * @param name Nome do aluno.
     */
    abstract findByName(name: string): Promise<Student[]>;

    abstract findAll(): Promise<Student[]>;
}
