import React from 'react'
import { gradesInputs } from '@variables/forms/grades'
import { Input } from '@components/classify/Form'

export function GradesForm(): React.JSX.Element {
  return (
    <>
      <div className="mt-6 grid grid-cols-6 gap-x-6 gap-y-8">{gradesInputs?.data?.map((props, index) => <Input key={index} {...props} />)}</div>
    </>
  )
}
