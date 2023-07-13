import React from 'react'

interface Props {
  children: React.ReactNode
}

export function ContainerBody({ children }: Props): React.JSX.Element {
  return <>{children}</>
}
