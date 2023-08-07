import { Sex } from '@api/students/models/sex.model'
import { Schema } from 'mongoose'

export const sexSchema = new Schema<Sex>({
  name: String,
})
