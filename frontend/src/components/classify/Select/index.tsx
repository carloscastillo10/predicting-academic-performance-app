'use client'
import React, { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { useSelectFilter } from '@hooks/useSelectFilter'
import { SearchProps } from '@utils/classify'
import styles from '@styles/Select.module.css'
import { Search } from '@components/classify/Form/Search'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

interface Props extends SearchProps {
  defaultValue: number
  searchable: boolean
  id: string
  name: string
  placeholder: string
}

export function SelectForm({ ...props }: Props): React.JSX.Element {
  const { searchValue, setSearchValue, searchedItems } = useSelectFilter({
    items: props.items,
  })

  const items = searchedItems
  const [selected, setSelected] = useState(items[props.defaultValue])
  return (
    <>
      <Listbox value={selected} onChange={setSelected} name={props.name}>
        {({ open }) => (
          <div className="relative mt-2">
            <Listbox.Button
              className={`${styles.dropdown_item_selected} w-full flex justify-between items-center rounded-lg py-2 pr-3 text-left text-gray-600 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-custom focus-visible:ring-custom sm:text-sm leading-6`}
              aria-expanded="true"
            >
              <span className={classNames(selected?.value ? 'text-gray-700' : 'text-gray-400', 'ml-1 block truncate text-sm font-medium px-2.5')}>
                {selected?.value ? selected.value : props.placeholder}
              </span>
              <ChevronDownIcon className="h-5 w-5 text-gray-600" aria-hidden="true" />
            </Listbox.Button>
            <Transition show={open} as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
              <Listbox.Options
                className="scrollbar-show scrollbar-x-hidden absolute z-20 w-full overflow-auto mt-2 rounded-lg bg-white py-1 shadow-lg max-h-[25rem] focus:ring-1 focus:ring-container"
                id={props.id}
                static
              >
                {props.searchable ? <Search searchValue={searchValue} setSearchValue={setSearchValue} /> : null}
                {!items.length && <span className="text-gray-600 block w-full ml-1 px-3 py-1 font-medium text-sm">No hay concidencias</span>}
                {items?.map((item, index) => (
                  <Listbox.Option
                    key={index}
                    className={({ selected, active }) =>
                      classNames(selected || active ? 'bg-custom rounded-lg w-full text-white' : 'text-white', 'relative cursor-pointer flex justify-between items-center')
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={classNames(active || selected ? 'text-white font-bold' : 'text-gray-600', 'block w-full ml-1 px-3 py-1 font-medium text-sm')}>{item.value}</span>
                        {selected ? <CheckIcon className="h-5 w-5 mr-3" aria-hidden="true" /> : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        )}
      </Listbox>
    </>
  )
}
