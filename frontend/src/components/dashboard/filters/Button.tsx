import React from 'react'

interface Props {
  text: string
}

export function ButtonFilter({ text }: Props): React.JSX.Element {
  return (
    <button className="inline-flex justify-center items-center whitespace-nowrap w-16 h-[35px] active hover:bg-custom active:bg-custom focus:bg-custom focus-visible:bg-custom text-sm text-gray-600 hover:text-white active:text-white focus:text-white focus-visible:text-white hover:font-bold active:font-bold focus:font-bold focus-visible:font-bold font-medium rounded-full px-3 py-1">
      {text}
    </button>
  )
}
