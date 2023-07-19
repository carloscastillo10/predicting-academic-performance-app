import React from 'react'

interface Props {
  id: string
  name: string
  placeholder?: string
  min?: number
  max?: number
  required?: boolean
}

export function InputNummber({ id, name, placeholder, min, max, required }: Props): React.JSX.Element {
  return (
    <>
      <input
        type="number"
        className="block w-full border-0 py-1.5 px-2.5 text-gray-700 caret-custom font-medium text-sm rounded-lg shadow-sm focus:outline-custom ring-1 ring-inset ring-gray-300 leading-6 placeholder:text-gray-400"
        id={id}
        name={name}
        placeholder={placeholder || ''}
        min={min || 0}
        max={max || 100}
        required={required || false}
      />
    </>
  )
}
