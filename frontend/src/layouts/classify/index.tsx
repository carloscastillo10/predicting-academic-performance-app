import React from 'react'
import { CardBody } from '@components/CardBody'
import { CardTitle } from '@components/CardTitle'
import { Container } from '@components/Container'
import { Squares2X2Icon } from '@heroicons/react/24/outline'

import Link from 'next/link'
import { EnrollmentForm } from '@components/classify/Form/EnrollmentForm'
import { MultiStep } from '@components/classify/Form/MultiStep'
import { GradesForm } from '@components/classify/Form/GradesForm'

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
      <div className="mt-8">
        <Container bgColor="bg-container">
          <div className="flex flex-col lg:flex-row gap-8">
            <MultiStep />
            <CardBody>
              <div className="w-full lg:ml-16">
                <form className="mb-2">
                  <EnrollmentForm />
                  <GradesForm />
                </form>
              </div>
            </CardBody>
          </div>
        </Container>
      </div>
    </>
  )
}
