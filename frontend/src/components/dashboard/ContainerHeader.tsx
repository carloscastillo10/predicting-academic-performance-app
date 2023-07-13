import React from 'react'
import { ContainerTitle } from './ContainerTitle'

interface Props {
  title: string
  subtitle?: string
}

export function ContainerHeader({ title, subtitle }: Props): React.JSX.Element {
  return (
    <>
      <ContainerTitle title={title} subtitle={subtitle} />
    </>
  )
}
