import { BadRequestException } from "@nestjs/common";
import { randomUUID } from "crypto";
import { Replace } from "src/utils/replace";

interface StudentSchema {
  name: string;
  active: number;
  cep: number;
  birthday: Date;
  number: number;
  state: string;
  city: string;
  nickname: string;
  socialName: string;
  createdAt: Date;
  updatedAt: Date;
  membership_ID: string;
  transmitionList_ID: string;
  user_ID: string;
  imageProfile?: string | null;
  email?: string | null;
  type?: number | null;
}

export class Student {
  private props: StudentSchema;
  private _id: string;

  constructor(props: Replace<StudentSchema, { createdAt?: Date; updatedAt?: Date, transmitionList_ID?: string, user_ID?: string, membership_ID?: string }>, id?: string) {
    if (props.number <= 0) throw new BadRequestException("maxStudents must be greater than 0");

    this.props = {
      ...props,
      createdAt: props.createdAt || new Date(),
      updatedAt: props.updatedAt || new Date(),
      transmitionList_ID: props.transmitionList_ID || '',
      user_ID: props.user_ID || '',
      membership_ID: props.membership_ID || ''
    };
    this._id = id || randomUUID();
  }

  // Getters e Setters
  get id(): string {
    return this._id;
  }

  get name(): string {
    return this.props.name;
  }

  set name(name: string) {
    if (!name.trim()) throw new Error("Description cannot be empty");
    this.props.name = name;
  }

  get nickname(): string {
    return this.props.nickname;
  }

  set nickname(nickname: string) {
    this.props.nickname = nickname;
  }

  get socialName(): string {
    return this.props.socialName;
  }

  set socialName(socialName: string) {
    this.props.socialName = socialName;
  }

  get active(): number {
    return this.props.active;
  }

  set active(active: number) {
    if (![0, 1].includes(active)) throw new Error("Active must be 0 or 1");
    this.props.active = active;
  }

  get cep(): number {
    return this.props.cep;
  }

  set cep(cep: number) {
    if (cep < 0) throw new Error("Value must be non-negative");
    this.props.cep = cep;
  }

  get number(): number {
    return this.props.number;
  }

  set number(number: number) {
    if (number <= 0) throw new Error("number must be greater than 0");
    this.props.number = number;
  }

  get state(): string {
    return this.props.state;
  }

  set state(state: string) {
    this.props.state = state;
  }

  get city(): string {
    return this.props.city;
  }

  set city(city: string) {
    this.props.city = city;
  }

  get birthday(): Date {
    return this.props.birthday;
  }

  set birthday(birthday: Date) {
    if (birthday >= new Date()) throw new Error("Schedule must be a past date");
    this.props.birthday = birthday;
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

  get membership_ID(): string {
    return this.props.membership_ID;
  }

  set membership_ID(membership_ID: string) {
    this.props.membership_ID = membership_ID;
  }

  get transmitionList_ID(): string {
    return this.props.transmitionList_ID;
  }

  set transmitionList_ID(transmitionList_ID: string) {
    this.props.transmitionList_ID = transmitionList_ID;
  }

  get user_ID(): string {
    return this.props.user_ID;
  }

  set user_ID(user_ID: string) {
    this.props.user_ID = user_ID;
  }
}
