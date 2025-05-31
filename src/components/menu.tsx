'use client'

import { headerMenu } from '@/@data/headerMenu'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import * as React from 'react'

export function Menu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {headerMenu.map(menu => (
          <NavigationMenuItem key={menu.id}>
            {menu.trigger ? (
              <>
                <NavigationMenuTrigger className="dark:hover:text-white">
                  {menu.trigger}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="!bg-background">
                  <ul
                    className={cn('grid gap-x-2 p-4 w-[450px]', {
                      'w-[800px] lg:grid-cols-[.55fr_1fr]': menu.content.main,
                    })}
                  >
                    {menu.content.main && (
                      <li className="group row-span-4">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-primary/10 p-4 no-underline outline-none focus:shadow-md"
                            href={menu.content.main.href}
                          >
                            <div className="flex items-center justify-center w-10 min-h-10 [&_svg]:size-6 p-1 bg-[#081F56]/30 text-[#081F56] rounded-full">
                              <menu.content.main.icon />
                            </div>
                            <div className="mb-2 mt-4 text-lg font-medium group-hover:text-primary">
                              {menu.content.main.title}
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              {menu.content.main.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    )}
                    {menu.content.items.map(subMenu => (
                      <li className="group" key={subMenu.id}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={subMenu.href}
                            className="flex items-center gap-4 select-none rounded-md p-4 hover:bg-primary/10"
                          >
                            <div className="flex items-center justify-center min-w-10 min-h-10 [&_svg]:size-6 p-1 bg-[#081F56]/30 text-[#081F56] dark:text-white rounded-full">
                              <subMenu.icon />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-lg font-medium group-hover:text-primary">
                                {subMenu.title}
                              </span>
                              <span className="text-sm leading-tight text-muted-foreground">
                                {subMenu.description}
                              </span>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <Link
                href={menu.href || ''}
                target="_arya"
                legacyBehavior
                passHref
              >
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle({
                    className: 'hover:!text-primary dark:hover:!text-white',
                  })}
                >
                  {menu.label}
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
