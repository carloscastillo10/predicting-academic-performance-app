import React from 'react'
import { Field, FormikErrors, FormikTouched } from 'formik'
import { Student, getFormErrors } from '@utils/classify'
import { classNames } from '@utils/funtions'

interface Props {
  id: string
  name: string
  placeholder?: string
  required?: boolean
  errors: FormikErrors<Student>
  touched: FormikTouched<Student>
}

export function InputText({ ...props }: Props): React.JSX.Element {
  return (
    <>
      <Field
        type="text"
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        className={classNames(
          getFormErrors(props.errors, props.touched, props.name) ? 'ring-red-600 focus:outline-red-600' : 'ring-gray-300 focus:outline-custom',
          'block w-full border-0 py-1.5 px-2.5 text-gray-700 caret-custom font-medium text-sm rounded-lg shadow-sm  ring-1 ring-inset leading-6 placeholder:text-gray-400',
        )}
      />
      {props.errors[props.name as keyof Student] && props.touched[props.name as keyof Student] ? (
        <div className="mt-1 text-sm text-red-600 font-medium">{props.errors[props.name as keyof Student]}</div>
      ) : null}
    </>
  )
}

/* 
 <input
        type="text"
        className="block w-full border-0 py-1.5 px-2.5 text-gray-700 caret-custom font-medium text-sm rounded-lg shadow-sm focus:outline-custom ring-1 ring-inset ring-gray-300 leading-6 placeholder:text-gray-400"
        id={props.id}
        name={props.name}
        placeholder={props.placeholder || ''}
        required={props.required || false}
      />
*/
