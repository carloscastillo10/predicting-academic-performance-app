import React from 'react'
import { ContainerTitle } from './ContainerTitle'

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

export function ContainerHeader({ title, subtitle }: Props): React.JSX.Element {
  return (
    <>
      <ContainerTitle title={title} subtitle={subtitle} />
    </>
  )
}
