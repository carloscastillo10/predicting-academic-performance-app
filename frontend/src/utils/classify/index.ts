import React from 'react'
import * as Yup from 'yup'
import { getIn, FormikErrors, FormikTouched, FormikProps, FormikValues } from 'formik'

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
  form?: React.RefObject<FormikProps<FormikValues>>
  errors: FormikErrors<Student>
  touched: FormikTouched<Student>
}

export const classifyStudentSchema = Yup.object().shape({
  identification: Yup.string().required('Ingrese la identificación del estudiante'),
  name: Yup.string().required('Ingrese los nombres del estudiante'),
  lastname: Yup.string().required('Ingrese los apellidos del estudiante'),
  age: Yup.number().min(0, 'No puede ser menor que 0').max(100, 'No puede ser mayor que 100'),
  disabilityPercentage: Yup.number().min(0.1, 'No puede ser menor que 0.1%').max(100, 'No puede ser menor que 100%').required('Debe ingresar un porcentaje de discapacidad'),
  disabilitiesNumber: Yup.number().min(1, 'No puede ser menor que 1').max(100, 'No puede ser menor que 100').required('Debe ingresar el número de discapacidades'),
  subject: Yup.string().required('Debe seleccionar una materia'),
  numberFailures: Yup.number().min(0, 'No puede ser menor que 0').required('Ingrese el número de reprobaciones'),
  aab1: Yup.number().min(0, 'La nota no puede ser menor que 0').max(10, 'La nota no puede ser mayor a 10').required('Debe ingresar una calificación'),
  apeb1: Yup.number().min(0, 'La nota no puede ser menor que 0').max(10, 'La nota no puede ser mayor a 10').required('Debe ingresar una calificación'),
  acdb1: Yup.number().min(0, 'La nota no puede ser menor que 0').max(10, 'La nota no puede ser mayor a 10').required('Debe ingresar una calificación'),
  aab2: Yup.number().min(0, 'La nota no puede ser menor que 0').max(10, 'La nota no puede ser mayor a 10').required('Debe ingresar una calificación'),
  acdb2: Yup.number().min(0, 'La nota no puede ser menor que 0').max(10, 'La nota no puede ser mayor a 10').required('Debe ingresar una calificación'),
  apeb2: Yup.number().min(0, 'La nota no puede ser menor que 0').max(10, 'La nota no puede ser mayor a 10').required('Debe ingresar una calificación'),
})

export const getFormErrors = (errors: FormikErrors<Student>, touched: FormikTouched<Student>, fieldName: string): boolean => {
  const containsError = getIn(errors, fieldName)
  const hasBeenTouched = Object.keys(touched ?? []).includes(fieldName)
  return containsError && hasBeenTouched
}

export function resetDisabilityFields(form: React.RefObject<FormikProps<FormikValues>>, formErrors: any) {
  form.current?.setFieldValue('disabilityPercentage', '')
  // form.current?.setFieldTouched('disabilityPercentage', false, false)
  delete formErrors.disabilityPercentage

  form.current?.setFieldValue('disabilitiesNumber', '')
  // form.current?.setFieldTouched('disabilitiesNumber', false, false)
  delete formErrors.disabilitiesNumber
  return formErrors
}

export async function validateForm(form: React.RefObject<FormikProps<FormikValues>>, fieldNames: string[]) {
  let isValid: boolean = true
  let formErrors = Object()
  if (form.current) {
    const validationErrors = await form.current.validateForm()
    if (Object.keys(validationErrors).length > 0) {
      fieldNames.forEach((field) => {
        if (Object.keys(validationErrors).includes(field)) {
          formErrors[field] = validationErrors[field]
        }

        if (!form.current?.values.disability) {
          formErrors = resetDisabilityFields(form, formErrors)
        }
      })
      if (Object.keys(formErrors).length > 0) {
        isValid = false
      }
    }
  }
  return {
    isValid,
    formErrors,
  }
}
