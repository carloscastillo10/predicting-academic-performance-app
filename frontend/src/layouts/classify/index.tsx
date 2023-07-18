'use client'
import { Card } from '@components/Card'
import { CardBody } from '@components/CardBody'
import { CardTitle } from '@components/CardTitle'
import { Container } from '@components/Container'
import { SelectForm } from '@components/classify/Select'
import { ArrowLongRightIcon, IdentificationIcon } from '@heroicons/react/20/solid'
import { ChevronRightIcon, ClipboardDocumentCheckIcon, Squares2X2Icon } from '@heroicons/react/24/outline'
import { sexs } from '@variables/forms/classifyStudent'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from '@styles/Checkbox.module.css'

const data = {
  title: {
    value: 'Clasificación de estudiantes',
    size: 'text-2xl',
  },
  enrollment: {
    title: {
      value: 'Datos de Matriculas',
      size: 'text-lg',
    },
    subtitle: {
      value: 'Información personal de cada estudiante al momento de matricularse',
      size: 'text-sm',
    },
  },
}
export function ClassifyStudentLayout(): React.JSX.Element {
  const [hasDisability, setHasDisability] = useState(false)

  const onHasDisbailityHandler = () => {
    setHasDisability(!hasDisability)
  }

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
      <div className="mt-8">
        <Container bgColor="bg-container">
          <ol className="flex justify-between items-center w-full mb-5">
            <li className="flex items-center text-white cursor-pointer">
              <span className="flex items-center justify-center w-8 h-8 mr-2 bg-custom rounded-full shrink-0">
                <IdentificationIcon className="w-5 h-5" />
              </span>
              <span className="hidden text-sm text-gray-950 font-bold sm:inline-flex mr-1">Datos de</span>
              <span className="text-sm text-gray-950 font-bold">Matrículas</span>
            </li>
            <ChevronRightIcon className="w-5 h-5 text-custom cursor-pointer" />
            <li className="flex items-center text-gray-600 cursor-pointer">
              <span className="flex items-center justify-center w-8 h-8 mr-2 border border-custom rounded-full shrink-0">
                <ClipboardDocumentCheckIcon className="w-5 h-5" />
              </span>
              <span className="hidden text-sm text-gray-600 font-medium sm:inline-flex mr-1">Datos de</span>
              <span className="text-sm text-gray-600 font-medium">Calificaciones</span>
            </li>
          </ol>
          <CardBody>
            <div className="mt-6">
              <Card title={data.enrollment.title} subtitle={data.enrollment.subtitle}>
                <form className="mb-2">
                  <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label htmlFor="identification" className="block text-sm font-bold leading-6 text-gray-700">
                        Identificación
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          className="block w-full border-0 py-1.5 px-2.5 text-gray-700 caret-custom font-medium text-sm rounded-lg shadow-sm focus:outline-custom ring-1 ring-inset ring-gray-300 leading-6 placeholder:text-gray-400"
                          id="identification"
                          name="identification"
                          placeholder="Ej. 1101XXXXXX"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="name" className="block text-sm font-bold leading-6 text-gray-700">
                        Nombres
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          className="block w-full border-0 py-1.5 px-2.5 text-gray-700 caret-custom font-medium text-sm rounded-lg shadow-sm focus:outline-custom ring-1 ring-inset ring-gray-300 leading-6 placeholder:text-gray-400"
                          id="name"
                          name="name"
                          placeholder="Ej. Matias Antonio"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="lastname" className="block text-sm font-bold leading-6 text-gray-700">
                        Apellidos
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          className="block w-full border-0 py-1.5 px-2.5 text-gray-700 caret-custom font-medium text-sm rounded-lg shadow-sm focus:outline-custom ring-1 ring-inset ring-gray-300 leading-6 placeholder:text-gray-400"
                          id="lastname"
                          name="lastname"
                          placeholder="Ej. Rodriguez Perez"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-1">
                      <label htmlFor="age" className="block text-sm font-bold leading-6 text-gray-700">
                        Edad
                      </label>
                      <div className="mt-2">
                        <input
                          type="number"
                          className="block w-full border-0 py-1.5 px-2.5 text-gray-700 caret-custom font-medium text-sm rounded-lg shadow-sm focus:outline-custom ring-1 ring-inset ring-gray-300 leading-6 placeholder:text-gray-400"
                          id="age"
                          name="age"
                          placeholder="Ej. 23"
                          min={0}
                          max={100}
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="sex" className="block text-sm font-bold leading-6 text-gray-700">
                        Sexo
                      </label>
                      <div className="mt-2">
                        <SelectForm items={sexs.items} defaulValue={-1} id="sex" name="sex" />
                      </div>
                    </div>

                    <div className={hasDisability ? 'sm:col-span-2' : 'sm:col-span-4'}>
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
                        <div className="sm:col-span-2">
                          <label htmlFor="disability-percentage" className="block text-sm font-bold leading-6 text-gray-700">
                            Porcentaje de discapacidad
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

                        <div className="sm:col-span-2">
                          <label htmlFor="disabilities-number" className="block text-sm font-bold leading-6 text-gray-700">
                            Porcentaje de discapacidad
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

                  <div className="mt-10 flex items-center justify-end">
                    <button className="relative group inline-flex justify-center items-center rounded-2xl py-2 px-4 text-sm font-semibold w-auto m-0 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-custom text-white hover:bg-hover-custom hover:text-slate-100 active:bg-hover-custom active:text-slate-300 focus-visible:bg-hover-custom">
                      <span className="flex mr-2">Siguiente</span>
                      <ArrowLongRightIcon className="fill-white group-active:fill-current w-5 h-6" />
                    </button>
                  </div>
                </form>
              </Card>
            </div>
          </CardBody>
        </Container>
      </div>
    </>
  )
}
