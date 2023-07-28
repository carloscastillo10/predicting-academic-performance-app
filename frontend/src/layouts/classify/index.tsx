'use client'
import React, { useRef, useState } from 'react'
import { CardBody } from '@components/CardBody'
import { CardTitle } from '@components/CardTitle'
import { Container } from '@components/Container'
import { Formik, Form, FormikProps, FormikValues, setNestedObjectValues } from 'formik'
import { EnrollmentForm } from '@components/classify/Form/Enrollment'
import { MultiStep } from '@components/classify/Form/MultiStep'
import { GradesForm } from '@components/classify/Form/Grades'
import { Squares2X2Icon } from '@heroicons/react/20/solid'
import { classNames } from '@utils/funtions'
import { classifyStudentSchema, studentInitialValues, validateForm } from '@utils/classify'
import { enrollmentInputs } from '@variables/forms/enrollment'
import { gradesInputs } from '@variables/forms/grades'
import Link from 'next/link'
import { Modal } from '@common/Modal'
import { ClassifiedStudentLayout } from './classifiedStudent'

const data = {
  title: {
    value: 'Clasificación de estudiantes',
    size: 'text-2xl',
  },
}

export function ClassifyStudentLayout(): React.JSX.Element {
  const [active, setActive] = useState(0)
  const [openModal, setOpenModal] = useState(false)
  const form = useRef<FormikProps<FormikValues>>(null)

  const handleNextStep = () => {
    // const fieldNames = enrollmentInputs?.data?.map((field) => field.name)
    // fieldNames.push('disabilityPercentage', 'disabilitiesNumber')
    // validateForm(form, fieldNames).then(({ isValid, formErrors }) => {
    //   isValid ? setActive(1) : form.current?.setTouched(setNestedObjectValues(formErrors, true))
    // })
    setActive(1)
  }

  const handlePreviousStep = () => {
    setActive(0)
  }

  const sendData = () => {
    console.log(form.current?.values)
  }

  const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault()
    // const fieldNames = gradesInputs?.data?.map((field) => field.name)
    // validateForm(form, fieldNames).then(({ isValid, formErrors }) => {
    //   isValid ? sendData() : form.current?.setTouched(setNestedObjectValues(formErrors, true))
    // })
    sendData()
    setOpenModal(true)
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
            <MultiStep active={active} handleNextStep={handleNextStep} handlePreviousStep={handlePreviousStep} />
            <CardBody>
              <div className="w-full lg:ml-16">
                <Formik initialValues={studentInitialValues} validationSchema={classifyStudentSchema} onSubmit={() => {}} innerRef={form}>
                  {({ errors, touched }) => (
                    <Form className="mb-2">
                      <div className={classNames(active === 0 ? 'flex' : 'hidden')}>
                        <EnrollmentForm handleNextStep={handleNextStep} errors={errors} touched={touched} form={form} />
                      </div>
                      <div className={classNames(active === 1 ? 'flex' : 'hidden')}>
                        <GradesForm handlePreviousStep={handlePreviousStep} handleSubmit={handleSubmit} errors={errors} touched={touched} form={form} />
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </CardBody>
          </div>
        </Container>
      </div>
      <Modal open={openModal} setOpen={setOpenModal}>
        <ClassifiedStudentLayout setOpenModal={setOpenModal} />
      </Modal>
    </>
  )
}
