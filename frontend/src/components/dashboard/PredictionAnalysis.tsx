import React from 'react'
import { Container } from './Container'
import { ContainerHeader } from './ContainerHeader'

export function PredictionAnalysis(): React.JSX.Element {
  const title: string = 'Análisis de Predicciones'
  const subtitle: string = 'Ver las predicciones por provincia y cantón.'

  return (
    <>
      <Container bgColor="bg-container">
        <ContainerHeader title={title} subtitle={subtitle} />
      </Container>
    </>
  )
}
