import React, { Dispatch, SetStateAction } from 'react'

interface Props {
  searchValue: string
  setSearchValue: Dispatch<SetStateAction<string>>
}

export function Search({ searchValue, setSearchValue }: Props): React.JSX.Element {
  const onSearchValueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  return (
    <>
      <div className="grid pr-2.5">
        <input
          type="text"
          className="mt-2 bg-search text-gray-700 caret-custom block mx-1 px-3 py-1 mb-2 font-medium text-sm rounded-lg focus:outline-container w-full"
          value={searchValue}
          onChange={onSearchValueChangeHandler}
          placeholder="Buscar"
        />
      </div>
    </>
  )
}
