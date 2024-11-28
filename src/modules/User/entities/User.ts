import { randomUUID } from "crypto";
import { Replace } from "src/utils/replace";

interface UserSchema {
  username: string
  type: number;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  password: string;
  image_profile: string;
}

export class User {
  private props: UserSchema;
  private _id: string;

  constructor(props: Replace<UserSchema, { createdAt? : Date, updatedAt? : Date, image_profile?: string, type?: number }>, id?: string) {
    this.props = {
      ...props,
      createdAt: props.createdAt || new Date(),
      updatedAt: props.updatedAt || new Date(),
      image_profile: props.image_profile || 'https://i.imgur.com/HUl1fdV.jpeg',
      type: props.type || 1
    };
    this._id = id || randomUUID();
  }

  get id(): string {
    return this._id;
  }

  get email(): string {
    return this.props.email;
  }

  set email(email: string) {
    this.props.email = email;
  }

  get password(): string {
    return this.props.password;
  }

  set password(password: string) {
    this.props.password = password;
  }

  get username(): string {
    return this.props.username;
  }

  set username(username: string) {
    this.props.username = username;
  }

  get type(): number {
    return this.props.type;
  }

  set type(type: number) {
    this.props.type = type;
  }

  get image_profile(): string {
    return this.props.image_profile;
  }

  set image_profile(image_profile: string) {
    this.props.image_profile = image_profile;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }

  set updatedAt(updatedAt: Date) {
    this.props.updatedAt = updatedAt;
  }
}