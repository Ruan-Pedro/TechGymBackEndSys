import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateClassBody {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  active: number;

  @IsNotEmpty()
  @IsNumber()
  maxStudents: number;

  @IsNotEmpty()
  @IsNumber()
  value: number;

  @IsDate()
  @Type(() => Date) // Converte para instância de Date
  schedule: Date;

  createdAt: Date;
  updatedAt: Date;
}
