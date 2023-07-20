'use client'
import React, { useRef, useState } from 'react'
import { CardBody } from '@components/CardBody'
import { CardTitle } from '@components/CardTitle'
import { Container } from '@components/Container'
import { Formik, Form, FormikProps } from 'formik'
import { EnrollmentForm } from '@components/classify/Form/EnrollmentForm'
import { MultiStep } from '@components/classify/Form/MultiStep'
import { GradesForm } from '@components/classify/Form/GradesForm'
import { Squares2X2Icon } from '@heroicons/react/20/solid'
import { classNames } from '@utils/funtions'
import Link from 'next/link'
import { Student, classifyStudentSchema, studentInitialValues } from '@utils/classify'

const data = {
  title: {
    value: 'Clasificación de estudiantes',
    size: 'text-2xl',
  },
}

export function ClassifyStudentLayout(): React.JSX.Element {
  const [active, setActive] = useState(0)
  const form = useRef<FormikProps<Student>>(null)

  const onNextStepHandler = () => {
    if (form.current) {
      setActive(1)
    }
  }

  const onPreviousStepHandler = () => {
    setActive(0)
  }

  const onSubmitHandler = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (form.current) {
      form.current
        .validateForm()
        .then(() => {
          console.log('no hay errores')
        })
        .catch((error) => {
          console.log('errores', error)
        })
    }
  }

  return (
    <>
      <div className="flex justify-between items-center flex-wrap gap-4">
        <CardTitle title={data.title} />
        <Link
          href="/"
          className="relative group inline-flex justify-center items-center rounded-2xl py-2 px-4 text-sm font-semibold w-auto m-0 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-custom text-white hover:bg-hover-custom hover:text-slate-100 active:bg-hover-custom active:text-slate-300 focus-visible:bg-hover-custom"
        >
          <Squares2X2Icon className="fill-white group-active:fill-current w-5 h-5" />
          <span className="flex ml-3">Dashboard</span>
        </Link>
      </div>
      <div className="mt-8">
        <Container bgColor="bg-container">
          <div className="flex flex-col lg:flex-row gap-8">
            <MultiStep active={active} onNextStepHandler={onNextStepHandler} onPreviousStepHandler={onPreviousStepHandler} />
            <CardBody>
              <div className="w-full lg:ml-16">
                <Formik
                  initialValues={studentInitialValues}
                  validationSchema={classifyStudentSchema}
                  onSubmit={(values) => {
                    console.log(values)
                  }}
                  innerRef={form}
                >
                  {({ errors, touched }) => (
                    <Form className="mb-2">
                      <div className={classNames(active === 0 ? 'flex' : 'hidden')}>
                        <EnrollmentForm onNextStepHandler={onNextStepHandler} errors={errors} touched={touched} />
                      </div>
                      <div className={classNames(active === 1 ? 'flex' : 'hidden')}>
                        <GradesForm onPreviousStepHandler={onPreviousStepHandler} onSubmitHandler={onSubmitHandler} />
                      </div>
                    </Form>
                    // <form className="mb-2" action="/" ref={form}>
                    //   <div className={classNames(active === 0 ? 'flex' : 'hidden')}>
                    //     <EnrollmentForm onNextStepHandler={onNextStepHandler} />
                    //   </div>
                    //   <div className={classNames(active === 1 ? 'flex' : 'hidden')}>
                    //     <GradesForm onPreviousStepHandler={onPreviousStepHandler} onSubmitHandler={onSubmitHandler} />
                    //   </div>
                    // </form>
                  )}
                </Formik>
              </div>
            </CardBody>
          </div>
        </Container>
      </div>
    </>
  )
}
