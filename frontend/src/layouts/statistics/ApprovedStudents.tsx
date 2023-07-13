import React from 'react'
import { Container } from '@components/dashboard/Container'
import { ContainerHeader } from '@components/dashboard/ContainerHeader'

export function ApprovedStudentsLayout(): React.JSX.Element {
  const title = {
    value: 233,
    size: 'text-lg',
  }

  const subttitle = {
    value: 'Estudiantes aprobados en los últimos 7 días.',
    size: 'text-xs',
  }

  return (
    <>
      <Container bgColor="bg-white">
        <ContainerHeader title={title} subtitle={subttitle} />
      </Container>
    </>
  )
}
