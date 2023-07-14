import React from 'react'
import { Container } from '@components/dashboard/Container'
import { CardHeader } from '@components/dashboard/CardHeader'
import { CardBody } from '@components/dashboard/CardBody'
import { Card } from '@components/dashboard/Card'
import { BarChar } from '@components/dashboard/charts/BarChar'
import { barChartDataProvinceStudents, barChartOptionsProvinceStudents } from '@variables/charts/ProvincePredictions'

const data = {
  title: {
    value: 'Análisis de Predicciones',
    size: 'text-xl',
  },
  subtitle: {
    value: 'Ver las predicciones por provincia y materia',
    size: 'text-sm',
  },
  provinceCanton: {
    title: {
      value: 'Predicciones por provincia',
      size: 'text-lg',
    },
  },
  subjects: {
    title: {
      value: 'Predicciones por materia',
      size: 'text-lg',
    },
    subtitle: {
      value: 'Ver todas las materias',
      size: 'text-xs',
    },
  },
}

export function PredictionAnalysisLayout(): React.JSX.Element {
  return (
    <>
      <Container bgColor="bg-container">
        <CardHeader title={data.title} subtitle={data.subtitle} />
        <CardBody>
          <div className="mt-6 grid grid-cols-1 gap-6">
            <Card title={data.provinceCanton.title}>
              <div className="mt-3">
                <BarChar chartData={barChartDataProvinceStudents} chartOptions={barChartOptionsProvinceStudents} />
              </div>
            </Card>
            <Card title={data.subjects.title} subtitle={data.subjects.subtitle} />
          </div>
        </CardBody>
      </Container>
    </>
  )
}
