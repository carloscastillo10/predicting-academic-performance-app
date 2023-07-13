import React from 'react'

interface Props {
  title: {
    value: string | number
    size: string
  }
  subtitle?: {
    value: string | number
    size: string
  }
}

export function ContainerTitle({ title, subtitle }: Props): React.JSX.Element {
  return (
    <>
      <h2 className={`text-gray-950 ${title.size} font-bold`}>{title.value}</h2>
      <p className={`text-gray-600 ${subtitle?.size} font-medium`}>{subtitle?.value}</p>
    </>
  )
}
