import React from 'react'
import { Container } from '@components/dashboard/Container'
import { CardHeader } from '@components/dashboard/CardHeader'
import { CardBody } from '@components/dashboard/CardBody'
import { Card } from '@components/dashboard/Card'

const data = {
  title: {
    value: 'Descripción general',
    size: 'text-xl',
  },
  subtitle: {
    value: 'Predicciones de estudiantes aprobados y reprobados',
    size: 'text-sm',
  },
  approvedStudents: {
    title: {
      value: 233,
      size: 'text-lg',
    },
    subtitle: {
      value: 'Estudiantes aprobados en los últimos 7 días',
      size: 'text-xs',
    },
  },
  failedStudents: {
    title: {
      value: 125,
      size: 'text-lg',
    },
    subtitle: {
      value: 'Estudiantes reprobados en los últimos 7 días',
      size: 'text-xs',
    },
  },
  latestPredictions: {
    title: {
      value: 'Últimas predicciones',
      size: 'text-md',
    },
  },
}

export function OverviewLayout(): React.JSX.Element {
  return (
    <>
      <Container bgColor="bg-container">
        <CardHeader title={data.title} subtitle={data.subtitle} />
        <CardBody>
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6 ">
            <Card title={data.approvedStudents.title} subtitle={data.approvedStudents.subtitle} />
            <Card title={data.failedStudents.title} subtitle={data.failedStudents.subtitle} />
          </div>
          <div className="mt-6 grid grid-cols-1">
            <Card title={data.latestPredictions.title} />
          </div>
        </CardBody>
      </Container>
    </>
  )
}
