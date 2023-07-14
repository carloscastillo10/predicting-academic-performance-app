import React from 'react'
import { Container } from '@components/dashboard/Container'
import { CardHeader } from '@components/dashboard/CardHeader'
import { CardBody } from '@components/dashboard/CardBody'
import { Card } from '@components/dashboard/Card'
import { BarChar } from '@components/dashboard/charts/BarChar'
import { barChartDataApprovedStudents, barChartOptionsApprovedStudents } from '@variables/charts/ApprovedStudents'
import { LineAreaChart } from '@components/dashboard/charts/LineaAreaChart'
import { lineChartDataFailedStudents, lineChartOptionsFailedStudents } from '@variables/charts/FailedStudents'

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
      size: 'text-xl',
    },
    subtitle: {
      value: 'Estudiantes aprobados en los últimos 7 días',
      size: 'text-xs',
    },
  },
  failedStudents: {
    title: {
      value: 125,
      size: 'text-xl',
    },
    subtitle: {
      value: 'Estudiantes reprobados en los últimos 7 días',
      size: 'text-xs',
    },
  },
  latestPredictions: {
    title: {
      value: 'Últimas predicciones',
      size: 'text-lg',
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
            <Card title={data.approvedStudents.title} subtitle={data.approvedStudents.subtitle}>
              <div id="approvedStudentsChart">
                <BarChar chartData={barChartDataApprovedStudents} chartOptions={barChartOptionsApprovedStudents} />
              </div>
            </Card>
            <Card title={data.failedStudents.title} subtitle={data.failedStudents.subtitle}>
              <div id="failedStudentsChart">
                <LineAreaChart chartData={lineChartDataFailedStudents} chartOptions={lineChartOptionsFailedStudents} />
              </div>
            </Card>
          </div>
          <div className="mt-6 grid grid-cols-1">
            <Card title={data.latestPredictions.title} />
          </div>
        </CardBody>
      </Container>
    </>
  )
}
