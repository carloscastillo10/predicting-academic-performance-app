'use client'
import React, { useState } from 'react'
import { Nav } from 'common/Nav'
import { SideBar } from '@common/SideBar'

const navigation = [
  { name: 'Product', href: '/' },
  { name: 'Features', href: '/' },
  { name: 'Marketplace', href: '/' },
  { name: 'Company', href: '/' },
]

export function Header(): React.JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <Nav navigation={navigation} setMobileMenuOpen={setMobileMenuOpen} />
        <SideBar navigation={navigation} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      </header>
    </>
  )
}
