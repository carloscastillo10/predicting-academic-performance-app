import { CardTitle } from '@components/dashboard/CardTitle'
import { Squares2X2Icon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

const data = {
  title: {
    value: 'Clasificación de estudiantes',
    size: 'text-2xl',
  },
}
export function ClassifyStudentLayout(): React.JSX.Element {
  return (
    <>
      <div className="flex justify-between items-center flex-wrap gap-4">
        <CardTitle title={data.title} />
        <Link
          href="/"
          className="relative group inline-flex justify-center items-center rounded-2xl py-2 px-4 text-sm font-semibold w-auto m-0 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-custom text-white hover:bg-hover-custom hover:text-slate-100 active:bg-hover-custom active:text-slate-300 focus-visible:bg-hover-custom"
        >
          <Squares2X2Icon className="fill-custom group-active:fill-current w-6 h-6" />
          <span className="flex ml-3">Dashboard</span>
        </Link>
      </div>
    </>
  )
}
