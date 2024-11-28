import { Class } from "../entities/Class";

export abstract class ClassRepository {

    /**
   * Método para buscar uma aula pelo id.
   * @param id id da aula.
   * @returns Aula correspondente ou `null` se não for encontrada.
   */
    abstract findByID(id: string): Promise<Class | null>;

    /**
     * Método para criar uma nova aula.
     * @param classInstance Instância da aula a ser criada.
     */
    abstract create(classInstance: Class): Promise<void>;

    /**
     * Método para buscar uma aula pela descrição exata.
     * @param description Descrição da aula.
     * @returns Aula correspondente ou `null` se não for encontrada.
     */
    abstract findByDescription(description: string): Promise<Class[]>;


    abstract findAll(): Promise<Class[]>;
}
