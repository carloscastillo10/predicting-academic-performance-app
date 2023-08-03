import { ValidationError, validateOrReject } from 'class-validator'
import { ClassifyStudentDto } from '../models/student.dto'
import { BaseStudentService } from '../models/baseStudentService.model'
import { badRequest } from '@hapi/boom'
import { plainToClass } from 'class-transformer'

export class StudentService {
  async create(data: ClassifyStudentDto) {
    try {
      const classifyStudentData = plainToClass(ClassifyStudentDto, data)
      await validateOrReject(classifyStudentData)
    } catch (errors: any) {
      const error = new ValidationError()
      const errorPayload = errors.map((error: any) => ({
        property: error.property,
        constraints: error.constraints,
      }))
      error.target
      error.children = errorPayload
      throw error
    }
  }
}
