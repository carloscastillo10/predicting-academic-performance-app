import React from 'react'
import { Container } from '@components/dashboard/Container'
import { CardHeader } from '@components/dashboard/CardHeader'

export interface DashboardProps {
  title: {
    value: string | number
    size: string
  }
  subtitle?: {
    value: string | number
    size: string
  }
}

export function Card({ title, subtitle }: DashboardProps): React.JSX.Element {
  return (
    <>
      <Container bgColor="bg-white">
        <CardHeader title={title} subtitle={subtitle} />
      </Container>
    </>
  )
}
