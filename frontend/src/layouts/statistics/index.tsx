import { Overview } from '@components/dashboard/Overview'
import { PredictionAnalysis } from '@components/dashboard/PredictionAnalysis'
import React from 'react'

// { children }: { children: React.ReactNode })
export function StatisticsLayout(): React.JSX.Element {
  return (
    <>
      <div className="mt-8 grid grid-cols-1 gap-4 xl:grid-cols-[60%_minmax(0,_1fr)]">
        <Overview />
        <PredictionAnalysis />
      </div>
    </>
  )
}
