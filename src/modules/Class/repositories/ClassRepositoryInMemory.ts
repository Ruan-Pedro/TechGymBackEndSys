import { Class } from "../entities/Class";
import { ClassRepository } from "./ClassRepository";

export class ClassRepositoryInMemory extends ClassRepository {
  public classes: Class[] = [];

  async create(classInstance: Class): Promise<void> {
    const exists = this.classes.some(existingClass => existingClass.description.toLowerCase() === classInstance.description.toLowerCase());
    if (exists) throw new Error("A class with this description already exists");
    this.classes.push(classInstance);
  }

  async findByID(id: string): Promise<Class | null> {
    const classFound = this.classes.find(classMapp => classMapp.id === id)

    if (!classFound) return null;

    return classFound;
  }

  async findByDescription(description: string): Promise<Class[]> {
    return (this.classes.filter(classInstance => classInstance.description.toLowerCase() === description.toLowerCase()));
  }

  async findAll(): Promise<Class[]> {
    return (this.classes);
  }

  // async findByPartialDescription(term: string): Promise<Class[]> {
  //   return this.classes.filter(classInstance => classInstance.description.toLowerCase().includes(term.toLowerCase()));
  // }
}
