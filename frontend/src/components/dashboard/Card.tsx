import React from 'react'
import { Container } from '@components/dashboard/Container'
import { CardHeader } from '@components/dashboard/CardHeader'
import { CardProps } from '@utils/dashboard'

export function Card({ title, subtitle, children }: CardProps): React.JSX.Element {
  return (
    <>
      <Container bgColor="bg-white shadow">
        <CardHeader title={title} subtitle={subtitle} />
        {children}
      </Container>
    </>
  )
}
