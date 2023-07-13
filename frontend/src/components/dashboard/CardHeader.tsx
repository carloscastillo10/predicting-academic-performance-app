import React from 'react'
import { CardTitle } from '@components/dashboard/CardTitle'
import { DashboardProps } from '@components/dashboard/Card'

export function CardHeader({ title, subtitle }: DashboardProps): React.JSX.Element {
  return (
    <>
      <CardTitle title={title} subtitle={subtitle} />
    </>
  )
}
