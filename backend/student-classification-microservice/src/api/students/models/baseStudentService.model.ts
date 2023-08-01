import { ClassifyStudentDto } from '@api/students/dtos/classifyStudent.dto'
// import { Student } from './student.model'

export interface BaseStudentService {
  create(data: ClassifyStudentDto): void
}
