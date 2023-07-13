import React from 'react'
import { Container } from '@components/dashboard/Container'
import { ContainerHeader } from '@components/dashboard/ContainerHeader'

export function LatestPredictionsLayout(): React.JSX.Element {
  const title = {
    value: 'Últimas predicciones',
    size: 'text-md',
  }

  return (
    <>
      <div className="mt-6">
        <Container bgColor="bg-white">
          <ContainerHeader title={title} />
        </Container>
      </div>
    </>
  )
}
