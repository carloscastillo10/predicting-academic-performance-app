'use client'
import { ApexChartProps } from '@utils/dashboard'
import React from 'react'
import Chart from 'react-apexcharts'

export function BarChar({ chartData, chartOptions }: ApexChartProps): React.JSX.Element {
  return (
    <>
      <Chart series={chartData} options={chartOptions} type="bar" width="100%" height="250" />
    </>
  )
}
