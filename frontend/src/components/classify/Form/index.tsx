import React from 'react'
import { SelectForm } from '@components/classify/Select'
import { InputText } from '@components/classify/Form/InputText'
import { InputNummber } from './InputNumber'

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

export function Input({ size, label, type, required, id, name, placeholder, items, defaultValue, searchable, min, max }: Props): React.JSX.Element {
  const renderInput = (type: string): React.JSX.Element => {
    switch (type) {
      case 'number': {
        return <InputNummber id={id} name={name} placeholder={placeholder} min={min} max={max} required={required} />
      }

      case 'select': {
        return <SelectForm items={items || []} defaulValue={defaultValue || -1} id={id} searcheable={searchable || false} />
      }

      default: {
        return <InputText id={id} name={name} placeholder={placeholder} required={required} />
      }
    }
  }

  return (
    <>
      <div className={size ? size : 'sm:col-span-4'}>
        <label htmlFor={id} className="block text-sm font-bold leading-6 text-gray-700">
          {label}
          {required && <span className="ml-1 text-sm text-red-500">*</span>}
        </label>
        <div className="mt-2">{renderInput(type)}</div>
      </div>
    </>
  )
}
