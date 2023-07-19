import React from 'react'

interface Props {
  id: string
  name: string
  placeholder?: string
  required?: boolean
}

export function InputText({ id, name, placeholder, required }: Props): React.JSX.Element {
  return (
    <>
      <input
        type="text"
        className="block w-full border-0 py-1.5 px-2.5 text-gray-700 caret-custom font-medium text-sm rounded-lg shadow-sm focus:outline-custom ring-1 ring-inset ring-gray-300 leading-6 placeholder:text-gray-400"
        id={id}
        name={name}
        placeholder={placeholder || ''}
        required={required || false}
      />
    </>
  )
}
