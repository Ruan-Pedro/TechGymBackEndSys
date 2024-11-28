import { Student } from "../entities/Student";
import { StudentRepository } from "./StudentRepository";

export class StudentRepositoryInMemory extends StudentRepository {
  public students: Student[] = [];

  async create(classInstance: Student): Promise<void> {
    this.students.push(classInstance);
  }

  async findByID(id: string): Promise<Student | null> {
    const student = this.students.find(student => student.id === id)

    if (!student) return null;

    return student;
  }

  async findAll(): Promise<Student[]> {
    return (this.students);
  }

  async findByName(name: string): Promise<Student[]> {
    return (this.students.filter(student => student.name.toLowerCase() === name.toLowerCase()));
  }
}
