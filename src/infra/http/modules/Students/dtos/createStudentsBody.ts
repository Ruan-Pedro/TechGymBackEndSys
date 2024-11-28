import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateStudentBody {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  active: number;

  @IsNumber()
  @IsNotEmpty()
  cep: number;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  birthday: Date;

  @IsNumber()
  @IsNotEmpty()
  number: number;

  @IsString()
  @IsNotEmpty()
  state: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsOptional()
  nickname: string;

  @IsString()
  @IsOptional()
  socialName: string;

  @IsString()
  @IsOptional()
  membership_ID: string;

  @IsString()
  @IsOptional()
  transmitionList_ID: string;

  @IsString()
  @IsOptional()
  user_ID: string;
  
  createdAt: Date;
  updatedAt: Date;
}
