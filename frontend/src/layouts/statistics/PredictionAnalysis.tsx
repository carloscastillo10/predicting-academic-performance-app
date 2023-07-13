import React from 'react'
import { Container } from '@components/dashboard/Container'
import { ContainerHeader } from '@components/dashboard/ContainerHeader'

export function PredictionAnalysisLayout(): React.JSX.Element {
  const title = {
    value: 'Análisis de Predicciones',
    size: 'text-xl',
  }

  const subtitle = {
    value: 'Ver las predicciones por provincia y cantón.',
    size: 'text-sm',
  }

  return (
    <>
      <Container bgColor="bg-container">
        <ContainerHeader title={title} subtitle={subtitle} />
      </Container>
    </>
  )
}
