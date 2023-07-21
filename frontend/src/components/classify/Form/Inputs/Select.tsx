import React from 'react'
import { SelectForm } from '@components/classify/Select'
import { Field } from 'formik'

interface Props {
  id: string
  name: string
  placeholder?: string
  items?: {
    value: string
  }[]
  defaultValue?: number
  searchable?: boolean
  min?: number
  max?: number
}

export function InputSelect({ ...props }: Props): React.JSX.Element {
  const SelectInput = () => {
    return (
      <SelectForm
        items={props.items || []}
        defaultValue={props.defaultValue ?? -1}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder ?? 'Seleccione una opción'}
        searchable={props.searchable ?? false}
      />
    )
  }

  return (
    <>
      <Field type="select" name={props.name} component={SelectInput} />
    </>
  )
}
