import { getIn, FormikErrors, FormikTouched } from 'formik'
import * as Yup from 'yup'

export interface SearchProps {
  items: {
    value: string
  }[]
}

export interface Student {
  identification: string
  name: string
  lastname: string
  age: number | string
  sex: string
  disability: boolean
  disabilityPercentage: number | string
  disabilitiesNumber: number | string
  subject: string
  numberFailures: number | string
  aab1: number | string
  acbd1: number | string
  apeb1: number | string
  aab2: number | string
  acbd2: number | string
  apeb2: number | string
}

export const studentInitialValues = {
  identification: '',
  name: '',
  lastname: '',
  age: '',
  sex: '',
  disability: false,
  disabilityPercentage: '',
  disabilitiesNumber: '',
  subject: '',
  numberFailures: '',
  aab1: '',
  acdb1: '',
  apeb1: '',
  aab2: '',
  acdb2: '',
  apeb2: '',
}

export interface FormikValidationProps {
  errors: FormikErrors<Student>
  touched: FormikTouched<Student>
}

export const classifyStudentSchema = Yup.object().shape({
  identification: Yup.string().required('Ingrese la identificación del estudiante').nullable(),
  name: Yup.string().required('Ingrese los nombres del estudiante').nullable(),
  lastname: Yup.string().required('Ingrese los apellidos del estudiante').nullable(),
  age: Yup.number().min(0, 'No puede ser menor que 0').max(100, 'No puede ser mayor que 100'),
  subject: Yup.string().required('Debe seleccionar una materia'),
  numberFailures: Yup.number().min(0, 'No puede ser menor que 0').required('Ingrese el número de reprobaciones'),
  aab1: Yup.number().min(0, 'La nota no puede ser menor que 0').max(10, 'La nota no puede ser mayor a 10'),
  acdb1: Yup.number().min(0, 'La nota no puede ser menor que 0').max(10, 'La nota no puede ser mayor a 10'),
  apeb1: Yup.number().min(0, 'La nota no puede ser menor que 0').max(10, 'La nota no puede ser mayor a 10'),
  aab2: Yup.number().min(0, 'La nota no puede ser menor que 0').max(10, 'La nota no puede ser mayor a 10'),
  acdb2: Yup.number().min(0, 'La nota no puede ser menor que 0').max(10, 'La nota no puede ser mayor a 10'),
  apeb2: Yup.number().min(0, 'La nota no puede ser menor que 0').max(10, 'La nota no puede ser mayor a 10'),
})

export const getFormErrors = (errors: FormikErrors<Student>, touched: FormikTouched<Student>, fieldName: string): boolean => {
  const containsError = getIn(errors, fieldName)
  const hasBeenTouched = Object.keys(touched ?? []).includes(fieldName)
  return containsError && hasBeenTouched
}
