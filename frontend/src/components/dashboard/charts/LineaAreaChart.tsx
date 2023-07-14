'use client'
import { ApexChartProps } from '@utils/dashboard'
import React from 'react'
import Chart from 'react-apexcharts'

export function LineAreaChart({ chartData, chartOptions }: ApexChartProps): React.JSX.Element {
  return (
    <>
      <Chart series={chartData} options={chartOptions} type="area" width="100%" height="250" />
    </>
  )
}
