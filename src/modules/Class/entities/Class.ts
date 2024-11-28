import { randomUUID } from "crypto";
import { Replace } from "src/utils/replace";

interface ClassSchema {
  description: string;
  active: number;
  maxStudents: number;
  createdAt: Date;
  updatedAt: Date;
  value: number;
  schedule: Date;
  professorsClass_ID: string;
  waitingList_ID: string; 
}

export class Class {
  private props: ClassSchema;
  private _id: string;

  constructor(props: Replace<ClassSchema, { createdAt?: Date; updatedAt?: Date, professorsClass_ID?: string, waitingList_ID?: string }>, id?: string) {
    if (props.maxStudents <= 0) throw new Error("maxStudents must be greater than 0");
    if (props.value < 0) throw new Error("value must be non-negative");

    this.props = {
      ...props,
      createdAt: props.createdAt || new Date(),
      updatedAt: props.updatedAt || new Date(),
      professorsClass_ID: props.professorsClass_ID || '',
      waitingList_ID: props.waitingList_ID || ''
    };
    this._id = id || randomUUID();
  }

  // Getters e Setters
  get id(): string {
    return this._id;
  }

  get description(): string {
    return this.props.description;
  }

  set description(description: string) {
    if (!description.trim()) throw new Error("Description cannot be empty");
    this.props.description = description;
  }

  get active(): number {
    return this.props.active;
  }

  set active(active: number) {
    if (![0, 1].includes(active)) throw new Error("Active must be 0 or 1");
    this.props.active = active;
  }

  get value(): number {
    return this.props.value;
  }

  set value(value: number) {
    if (value < 0) throw new Error("Value must be non-negative");
    this.props.value = value;
  }

  get maxStudents(): number {
    return this.props.maxStudents;
  }

  set maxStudents(maxStudents: number) {
    if (maxStudents <= 0) throw new Error("maxStudents must be greater than 0");
    this.props.maxStudents = maxStudents;
  }

  get schedule(): Date {
    return this.props.schedule;
  }

  set schedule(schedule: Date) {
    if (schedule <= new Date()) throw new Error("Schedule must be a future date");
    this.props.schedule = schedule;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }

  set updatedAt(updatedAt: Date) {
    if (updatedAt < this.props.createdAt) throw new Error("UpdatedAt cannot be before CreatedAt");
    this.props.updatedAt = updatedAt;
  }

  get professorsClass_ID(): string {
    return this.props.professorsClass_ID;
  }

  set professorsClass_ID(professorsClass_ID: string) {
    if (!professorsClass_ID.trim()) throw new Error("professorsClass_ID cannot be empty");
    this.props.professorsClass_ID = professorsClass_ID;
  }

  get waitingList_ID(): string {
    return this.props.waitingList_ID;
  }

  set waitingList_ID(waitingList_ID: string) {
    if (!waitingList_ID.trim()) throw new Error("waitingList_ID cannot be empty");
    this.props.waitingList_ID = waitingList_ID;
  }
}
