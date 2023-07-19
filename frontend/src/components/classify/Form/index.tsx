import React from 'react'
import { SelectForm } from '@components/classify/Select'
import { InputText } from '@components/classify/Form/InputText'
import { InputNummber } from '@components/classify/Form/InputNumber'

interface Props {
  size?: string
  label: string
  type: string
  required: boolean
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

export function Input({ ...props }: Props): React.JSX.Element {
  const renderInput = (type: string): React.JSX.Element => {
    switch (type) {
      case 'number': {
        return <InputNummber {...props} />
      }

      case 'select': {
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

      default: {
        return <InputText {...props} />
      }
    }
  }

  return (
    <>
      <div className={props.size ? props.size : 'sm:col-span-4'}>
        <label htmlFor={props.id} className="block text-sm font-bold leading-6 text-gray-700">
          {props.label}
          {props.required && <span className="ml-1 text-sm text-red-500">*</span>}
        </label>
        <div className="mt-2">{renderInput(props.type)}</div>
      </div>
    </>
  )
}
