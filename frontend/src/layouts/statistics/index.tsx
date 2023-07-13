import { OverviewLayout } from '@layouts/statistics/Overview'
import { PredictionAnalysisLayout } from '@layouts/statistics/PredictionAnalysis'
import React from 'react'

export function StatisticsLayout(): React.JSX.Element {
  return (
    <>
      <div className="mt-8 grid grid-cols-1 gap-4 xl:grid-cols-[60%_minmax(0,_1fr)]">
        <OverviewLayout />
        <PredictionAnalysisLayout />
      </div>
    </>
  )
}
