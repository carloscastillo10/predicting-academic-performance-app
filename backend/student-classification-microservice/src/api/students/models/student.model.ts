import { BaseModel } from '@utils/base.model'

export interface Student extends BaseModel {
  identification: string
  name: string
  lastname: string
  age: number
  sex: number
  province: number
  canton: number
  disability: boolean
  disabilityPercentage: number
  disabilitiesNumber: number
  subject: number
  academicPeriod: number
  numberFailures: number
  aab1: number
  acdb1: number
  apeb1: number
  aab2: number
  acdb2: number
  apeb2: number
  statusPredicted?: string
  rules?: {
    name: string
    output: boolean
    value: string
  }[]
}
