import { ClassifyStudentDto, CreateStudent } from '@api/students/dtos/classifyStudent.dto'
import { BaseStudentService } from 'api/students/models/baseStudentService.model'
// import { badRequest } from '@hapi/boom'
// import { plainToClass } from 'class-transformer'
import { PredictStudentDto } from '@api/students/dtos/predictStudent.dto'
import { config } from '@config/config'
import axios from 'axios'

export class StudentService implements BaseStudentService {
  async create(studentData: ClassifyStudentDto) {
    try {
      // const classifyStudentData = plainToClass(ClassifyStudentDto, studentData)
      const { age, sex, province, canton, numberFailures, aab1, acdb1, apeb1, aab2, acdb2, apeb2 } = studentData
      const payload: PredictStudentDto = { age, sex, province, canton, numberFailures, aab1, acdb1, apeb1, aab2, acdb2, apeb2 }
      const response = await axios.post(`${config.predictModelUrl}/predict`, payload)
      const { data } = response.data
      const createStudentData: CreateStudent = { ...studentData, ...data }

      return createStudentData

      // await validateOrReject(classifyStudentData)
    } catch (errors) {
      console.log(errors)
      // const error = new ValidationError()
      // const errorPayload = errors.map((error: any) => ({
      //   property: error.property,
      //   constraints: error.constraints,
      // }))
      // error.target
      // error.children = errorPayload
      // throw error
    }
  }
}
