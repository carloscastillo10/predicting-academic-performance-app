import React from 'react'
import { Container } from './Container'
import { ContainerHeader } from './ContainerHeader'

export function Overview(): React.JSX.Element {
  const title: string = 'Descripción general'
  const subtitle: string = 'Predicciones de estudiantes aprobados y reprobados.'

  return (
    <>
      <Container bgColor="bg-container">
        <ContainerHeader title={title} subtitle={subtitle} />
      </Container>
    </>
  )
}
