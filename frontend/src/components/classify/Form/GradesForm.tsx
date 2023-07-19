import React from 'react'
import { Card } from '@components/Card'
import { gradesInputs } from '@variables/forms/grades'
import { Input } from '@components/classify/Form'
import { ArrowLongLeftIcon, PaperAirplaneIcon } from '@heroicons/react/20/solid'

const data = {
  title: {
    value: 'Datos de Calificaciones',
    size: 'text-lg',
  },
  subtitle: {
    value: 'Datos sobre las calificciones obtenidas en una materia en específico',
    size: 'text-sm',
  },
}

export function GradesForm(): React.JSX.Element {
  return (
    <>
      <Card title={data.title} subtitle={data.subtitle}>
        <div className="mt-6 grid grid-cols-6 gap-x-6 gap-y-8">{gradesInputs?.data?.map((props, index) => <Input key={index} {...props} />)}</div>

        <div className="mt-10 flex items-center justify-between flex-wrap">
          <button className="relative group inline-flex justify-center items-center rounded-2xl py-2 px-4 text-sm font-semibold w-auto m-0 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-gray-200 text-gray-600 hover:bg-search hover:font-bold active:bg-search active:text-slate-300 focus-visible:bg-search">
            <ArrowLongLeftIcon className="fill-gray-600 group-active:fill-current w-5 h-6" />
            <span className="flex ml-2">Anterior</span>
          </button>
          <button className="relative group inline-flex justify-center items-center rounded-2xl py-2 px-4 text-sm font-semibold w-auto m-0 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-custom text-white hover:bg-hover-custom hover:font-bold active:bg-hover-custom active:text-slate-300 focus-visible:bg-hover-custom">
            <span className="flex mr-2">Clasificar</span>
            <PaperAirplaneIcon className="fill-white group-active:fill-current w-5 h-6" />
          </button>
        </div>
      </Card>
    </>
  )
}
