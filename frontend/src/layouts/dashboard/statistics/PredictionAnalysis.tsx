import { Container } from '@components/Container'
import { CardHeader } from '@components/CardHeader'
import { CardBody } from '@components/CardBody'
import { Card } from '@components/Card'
import { BarChar } from '@components/dashboard/charts/BarChar'
import { barChartDataProvinceStudents, barChartOptionsProvinceStudents } from '@variables/charts/ProvincePredictions'
import { Legend } from '@components/dashboard/charts/Legend'
import { PredictionAnalysisTable } from '@components/dashboard/tables/PredictionAnalysisTable'
import { SelectFilter } from '@components/dashboard/filters/Select'
import React from 'react'
import { provinces, years } from '@variables/filters/PredictionAnalysis'

const headers = {
  title: {
    value: 'Análisis de predicciones',
    size: 'text-xl',
  },
  subtitle: {
    value: 'Predicciones por provincia y materia',
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
      size: 'text-sm',
    },
  },
}

export function PredictionAnalysisLayout(): React.JSX.Element {
  const data = {
    approved: {
      label: 'Aprobados',
      total: 240,
      percentage: 45,
      background: 'bg-approved',
    },
    failed: {
      label: 'Reprobados',
      total: 360,
      percentage: 60,
      background: 'bg-failed',
    },
    total: 600,
    country: 'Loja',
  }

  return (
    <>
      <Container bgColor="bg-container">
        <div className="flex flex-col gap-3 flex-wrap md:flex-row md:justify-between md:items-start">
          <div>
            <CardHeader title={headers.title} subtitle={headers.subtitle} />
          </div>
          <div className="flex flex-wrap gap-2">
            <SelectFilter items={provinces.items} defaultValue={provinces.defaultValue} searchable={true} />
            <SelectFilter items={years.items} defaultValue={years.defaultValue} />
          </div>
        </div>
        <CardBody>
          <div className="mt-6 grid grid-cols-1 gap-6">
            <Card title={headers.provinceCanton.title}>
              <div className="flex items-end gap-1">
                <p className="mt-1 text-2xl text-custom font-bold leading-[100%]">{data.total}</p>
                <p className="text-sm text-gray-600 font-medium leading-4 lg:leading-[1.25rem]">
                  en
                  <span className="font-bold ml-1">{data.country}</span>
                </p>
              </div>
              <div className="mt-6">
                <div className="flex flex-row justify-around">
                  <Legend data={data.approved} />
                  <Legend data={data.failed} />
                </div>
                <BarChar chartData={barChartDataProvinceStudents} chartOptions={barChartOptionsProvinceStudents} />
              </div>
            </Card>
            <Card title={headers.subjects.title} subtitle={headers.subjects.subtitle}>
              <CardBody>
                <PredictionAnalysisTable />
              </CardBody>
            </Card>
          </div>
        </CardBody>
      </Container>
    </>
  )
}
