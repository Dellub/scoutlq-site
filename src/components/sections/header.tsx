'use client'

import { Drawer } from '@/components/drawer'
import { Logo, LogoName } from '@/components/logo'
import { Menu } from '@/components/menu'
import { ToggleTheme } from '@/components/toogle-theme'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function Header() {
  const [addBorder, setAddBorder] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setAddBorder(true)
      } else {
        setAddBorder(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className="sticky top-0 z-[9999] py-3 bg-background/60 backdrop-blur-2xl">
      <div className="flex justify-between items-center container">
        <Link href="/">
          <LogoName className="h-auto w-[100px] text-logo hover:text-primary" />
        </Link>

        <div className="hidden lg:block">
          <div className="flex items-stretch gap-5">
            <Menu />

            <div className="gap-2 flex">
              <ToggleTheme />

              <Button variant="outline" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild className="">
                <Link href="/sign-up">
                  <Logo className="h-auto w-4 text-white" />
                  Sign-up Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-2 cursor-pointer block lg:hidden">
          <Drawer />
        </div>
      </div>
      <hr
        className={cn(
          'absolute w-full bottom-0 border-primary/40 transition-opacity duration-500 ease-in-out',
          addBorder ? 'opacity-100' : 'opacity-0',
        )}
      />
    </header>
  )
}
