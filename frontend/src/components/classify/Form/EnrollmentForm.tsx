'use client'
import React, { useState } from 'react'
import { enrollmentInputs } from '@variables/forms/enrollment'
import { Input } from '@components/classify/Form'
import styles from '@styles/Checkbox.module.css'

export function EnrollmentForm(): React.JSX.Element {
  const [hasDisability, setHasDisability] = useState(false)

  const onHasDisbailityHandler = () => {
    setHasDisability(!hasDisability)
  }

  return (
    <>
      <div className="mt-6 grid grid-cols-6 gap-x-6 gap-y-8">
        {enrollmentInputs?.data?.map((props, index) => <Input key={index} {...props} />)}

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
              <label htmlFor="disability-percentage" className="block text-sm font-bold leading-6 text-gray-700">
                Porcentaje de discapacidad
                <span className="ml-1 text-sm text-red-500">*</span>
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  className="block w-full border-0 py-1.5 px-2.5 text-gray-700 caret-custom font-medium text-sm rounded-lg shadow-sm focus:outline-custom ring-1 ring-inset ring-gray-300 leading-6 placeholder:text-gray-400"
                  id="disability-percentage"
                  name="disability-percentage"
                  placeholder="Ej. 50"
                  min={1}
                  max={100}
                />
              </div>
            </div>

            <div className="col-span-6 md:col-span-2">
              <label htmlFor="disabilities-number" className="block text-sm font-bold leading-6 text-gray-700">
                Número de discapacidades
                <span className="ml-1 text-sm text-red-500">*</span>
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  className="block w-full border-0 py-1.5 px-2.5 text-gray-700 caret-custom font-medium text-sm rounded-lg shadow-sm focus:outline-custom ring-1 ring-inset ring-gray-300 leading-6 placeholder:text-gray-400"
                  id="disabilities-number"
                  name="disabilities-number"
                  placeholder="Ej. 1"
                  min={1}
                  max={100}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}
