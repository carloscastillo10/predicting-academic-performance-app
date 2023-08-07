import { Period } from '@api/students/models/period.model'
import { Schema } from 'mongoose'

export const periodSchema = new Schema<Period>({
  name: String,
})
