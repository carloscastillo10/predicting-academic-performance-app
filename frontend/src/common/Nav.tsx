import React, { Dispatch } from 'react'
import Link from 'next/link'
import { Bars3Icon } from '@heroicons/react/24/outline'
import Image from 'next/image'

interface Props {
  navigation: {
    name: string
    href: string
  }[]
  setMobileMenuOpen: Dispatch<boolean>
}

export function Nav({ navigation, setMobileMenuOpen }: Props): React.JSX.Element {
  const mobileMenuHandler = (): void => {
    setMobileMenuOpen(true)
  }

  return (
    <>
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image className="h-8 w-auto" src="logo.svg" width={50} height={50} alt="TailWind Logo" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={mobileMenuHandler}>
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 text-gray-100" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
    </>
  )
}
