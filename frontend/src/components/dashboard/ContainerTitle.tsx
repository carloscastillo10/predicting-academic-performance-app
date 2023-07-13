import React from 'react'

interface Props {
  title: string
  subtitle?: string
}

export function ContainerTitle({ title, subtitle }: Props): React.JSX.Element {
  return (
    <>
      <h2 className="text-gray-950 text-xl font-bold">{title}</h2>
      <p className="text-gray-600 text-sm font-medium">{subtitle}</p>
    </>
  )
}
