import React from 'react'
import { Container } from '@components/dashboard/Container'
import { ContainerHeader } from '@components/dashboard/ContainerHeader'
import { ContainerBody } from '@components/dashboard/ContainerBody'
import { ApprovedStudentsLayout } from './ApprovedStudents'
import { FailedStudentsLayout } from './FailedStudents'
import { LatestPredictionsLayout } from './LatestPredictions'

export function OverviewLayout(): React.JSX.Element {
  const title = {
    value: 'Descripción general',
    size: 'text-xl',
  }

  const subtitle = {
    value: 'Predicciones de estudiantes aprobados y reprobados.',
    size: 'text-sm',
  }

  return (
    <>
      <Container bgColor="bg-container">
        <ContainerHeader title={title} subtitle={subtitle} />
        <ContainerBody>
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6 ">
            <ApprovedStudentsLayout />
            <FailedStudentsLayout />
          </div>
          <div className="grid grid-cols-1">
            <LatestPredictionsLayout />
          </div>
        </ContainerBody>
      </Container>
    </>
  )
}
