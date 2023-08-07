import { Subject } from '@api/students/models/subject.model'
import { Schema } from 'mongoose'

export const subjectSchema = new Schema<Subject>({
  name: String,
})
