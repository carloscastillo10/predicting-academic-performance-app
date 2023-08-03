import { BaseModel } from '@utils/base.model'

export interface Student extends BaseModel {
  identification: string
  name: string
  lastname: string
  age: number
  sex: string
  province: string
  canton: string
  disability: boolean
  disabilityPercentage: number
  disabilitiesNumber: number
  subject: string
  academicPeriod: string
  numberFailures: number
  aab1: number
  acdb1: number
  apeb1: number
  aab2: number
  acdb2: number
  apeb2: number
  statusPredicted: string
  rules: {
    name: string
    output: boolean
    value: string
  }[]
}
