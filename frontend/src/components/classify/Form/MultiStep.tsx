import React from 'react'
import { IdentificationIcon } from '@heroicons/react/20/solid'
import { ChevronRightIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline'

export function MultiStep(): React.JSX.Element {
  return (
    <>
      <ol className="flex flex-row justify-between items-center w-full pr-1 md:justify-around lg:flex-col lg:items-start lg:justify-start lg:gap-y-20 lg:w-auto lg:min-w-[250px] lg:relative lg:pr-0 ">
        <div className="hidden lg:flex absolute left-[18.5px] h-[160px] w-[3px] bg-gray-300 z-10 cursor-pointer"></div>
        <li className="flex items-center text-white cursor-pointer z-20">
          <span className="flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 mr-2 bg-custom rounded-full shrink-0">
            <IdentificationIcon className="w-5 h-5" />
          </span>
          <span className="hidden text-sm text-gray-950 font-bold sm:inline-flex mr-1">Datos de</span>
          <span className="text-sm text-gray-950 font-bold">Matrículas</span>
        </li>
        <ChevronRightIcon className="flex w-5 h-5 text-custom cursor-pointer lg:hidden" />
        <li className="flex items-center text-gray-600 cursor-pointer z-20">
          <span className="flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 mr-2 bg-white border border-custom rounded-full shrink-0">
            <ClipboardDocumentCheckIcon className="w-5 h-5" />
          </span>
          <span className="hidden text-sm text-gray-600 font-medium sm:inline-flex mr-1">Datos de</span>
          <span className="text-sm text-gray-600 font-medium">Calificaciones</span>
        </li>
      </ol>
    </>
  )
}
