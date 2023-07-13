import React from 'react'
import { DashboardProps } from '@components/dashboard/Card'

export function CardTitle({ title, subtitle }: DashboardProps): React.JSX.Element {
  return (
    <>
      <h2 className={`text-gray-950 ${title.size} font-bold`}>{title.value}</h2>
      <p className={`text-gray-600 ${subtitle?.size} font-medium`}>{subtitle?.value}</p>
    </>
  )
}
