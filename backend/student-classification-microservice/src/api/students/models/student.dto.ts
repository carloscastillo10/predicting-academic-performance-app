import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min, isNumber } from 'class-validator'
import { Student } from '@api/students/models/student.model'

interface InterfaceClassifyStudentDto extends Omit<Student, 'id' | 'createdAt' | 'updateAt' | 'statusPredicted' | 'rules'> {}

export class ClassifyStudentDto implements InterfaceClassifyStudentDto {
  @IsString()
  @IsNotEmpty()
  identification!: string

  @IsString()
  name!: string

  @IsString()
  lastname!: string

  @Max(100)
  @Min(0)
  @IsNumber()
  age!: number

  @IsString()
  sex!: string

  @IsString()
  province!: string

  @IsString()
  canton!: string

  @IsBoolean()
  disability!: boolean

  @Max(100)
  @Min(0.1)
  @IsNumber()
  disabilityPercentage!: number

  @Min(0)
  @IsNumber()
  disabilitiesNumber!: number

  @IsString()
  subject!: string

  @IsString()
  academicPeriod!: string

  @Min(0)
  @IsNumber()
  numberFailures!: number

  @Max(10)
  @Min(0)
  @IsNumber()
  aab1!: number

  @Max(10)
  @Min(0)
  @IsNumber()
  acdb1!: number

  @Max(10)
  @Min(0)
  @IsNumber()
  apeb1!: number

  @Max(10)
  @Min(0)
  @IsNumber()
  aab2!: number

  @Max(10)
  @Min(0)
  @IsNumber()
  acdb2!: number

  @Max(10)
  @Min(0)
  @IsNumber()
  apeb2!: number
}
