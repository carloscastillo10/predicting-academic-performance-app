import { ClassifyStudentDto } from './student.dto'
import { Student } from './student.model'

export interface BaseStudentService {
  create(data: ClassifyStudentDto): void
}
