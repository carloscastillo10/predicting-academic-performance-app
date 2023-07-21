'use client'
import React, { useState } from 'react'
import { enrollmentInputs } from '@variables/forms/enrollment'
import { Input } from '@components/classify/Form'
import { Card } from '@components/Card'
import { ArrowLongRightIcon } from '@heroicons/react/20/solid'
import { FormikValidationProps } from '@utils/classify'
import styles from '@styles/Checkbox.module.css'

const data = {
  title: {
    value: 'Datos de Matriculas',
    size: 'text-lg',
  },
  subtitle: {
    value: 'Información personal de cada estudiante al momento de matricularse',
    size: 'text-sm',
  },
}

interface Props extends FormikValidationProps {
  onNextStepHandler: () => void
}

export function EnrollmentForm({ onNextStepHandler, errors, touched }: Props): React.JSX.Element {
  const [hasDisability, setHasDisability] = useState(false)

  const onHasDisbailityHandler = () => {
    setHasDisability(!hasDisability)
  }

  return (
    <>
      <Card title={data.title} subtitle={data.subtitle}>
        <div className="mt-6 grid grid-cols-6 gap-x-6 gap-y-8">
          {enrollmentInputs?.data?.map((props, index) => <Input key={index} {...props} errors={errors} touched={touched} />)}

          <div className={hasDisability ? 'col-span-6 md:col-span-2' : 'col-span-6 md:col-span-4'}>
            <fieldset>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    type="checkbox"
                    className={`${styles.checkbox} h-4 w-4 rounded border-gray-300 text-custom focus:ring-custom`}
                    id="disability"
                    name="disability"
                    onChange={onHasDisbailityHandler}
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="disability" className="font-bold text-gray-700">
                    Discapacidad
                  </label>
                  <p className="text-gray-500 text-sm">Seleccione si posee algún tipo de discapacidad.</p>
                </div>
              </div>
            </fieldset>
          </div>

          {hasDisability && (
            <>
              <div className="col-span-6 md:col-span-2">
                <label htmlFor="disabilityPercentage" className="block text-sm font-bold leading-6 text-gray-700">
                  Porcentaje de discapacidad
                  <span className="ml-1 text-sm text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    className="block w-full border-0 py-1.5 px-2.5 text-gray-700 caret-custom font-medium text-sm rounded-lg shadow-sm focus:outline-custom ring-1 ring-inset ring-gray-300 leading-6 placeholder:text-gray-400"
                    id="disabilityPercentage"
                    name="disabilityPercentage"
                    placeholder="Ej. 50"
                    min={1}
                    max={100}
                  />
                </div>
              </div>

              <div className="col-span-6 md:col-span-2">
                <label htmlFor="disabilitiesNumber" className="block text-sm font-bold leading-6 text-gray-700">
                  Número de discapacidades
                  <span className="ml-1 text-sm text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    className="block w-full border-0 py-1.5 px-2.5 text-gray-700 caret-custom font-medium text-sm rounded-lg shadow-sm focus:outline-custom ring-1 ring-inset ring-gray-300 leading-6 placeholder:text-gray-400"
                    id="disabilitiesNumber"
                    name="disabilitiesNumber"
                    placeholder="Ej. 1"
                    min={1}
                    max={100}
                  />
                </div>
              </div>
            </>
          )}
        </div>
        <div className="mt-10 flex items-center justify-end">
          <button
            className="relative group inline-flex justify-center items-center rounded-2xl py-2 px-4 text-sm font-semibold w-auto m-0 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-custom text-white hover:bg-hover-custom hover:font-bold active:bg-hover-custom active:text-slate-300 focus-visible:bg-hover-custom"
            type="button"
            onClick={onNextStepHandler}
          >
            <span className="flex mr-2">Siguiente</span>
            <ArrowLongRightIcon className="fill-white group-active:fill-current w-5 h-6" />
          </button>
        </div>
      </Card>
    </>
  )
}
