import React, { useState } from 'react'
import { SelectForm } from '@components/classify/Select'
import { useField, useFormikContext } from 'formik'
import { FormikValidationProps } from '@utils/classify'

export interface Selected {
  value: string
}

interface Props extends FormikValidationProps {
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
  const name = props.name
  const [field] = useField(name)
  const { setFieldValue } = useFormikContext()

  let valueSelected = ''
  if (props.items !== undefined && props.defaultValue !== undefined) {
    valueSelected = props.items[props.defaultValue]?.value || field.value
  }

  const [selected, setSelected] = useState(valueSelected)

  const onChangeHandler = (itemSelected: any) => {
    setSelected(itemSelected.value)
    setFieldValue(name, itemSelected.value)
  }

  return (
    <>
      <SelectForm
        items={props.items || []}
        defaultValue={props.defaultValue ?? -1}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder ?? 'Seleccione una opción'}
        searchable={props.searchable ?? false}
        itemSelected={selected}
        onChangeHandler={onChangeHandler}
        errors={props.errors}
        touched={props.touched}
        form={props.form}
      />
    </>
  )
}
