import { headerMenu } from '@/@data/headerMenu'
import { Logo, LogoName } from '@/components/logo'
import { ToggleTheme } from '@/components/toogle-theme'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import {
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
  Drawer as DrawerUI,
} from '@/components/ui/drawer'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'
import Link from 'next/link'

export function Drawer() {
  return (
    <DrawerUI>
      <DrawerTrigger>
        <Menu className="text-2xl" />
      </DrawerTrigger>
      <DrawerContent className="gap-0">
        <DrawerHeader className="px-6 py-0 pt-4 gap-4">
          <Link
            href="/"
            title="brand-logo"
            className="relative mr-6 flex items-center space-x-2"
          >
            <LogoName className="h-auto w-[100px] text-logo" />
          </Link>
          <nav>
            <ul className="text-left">
              <Accordion type="single" collapsible>
                {headerMenu.map(menu => (
                  <li key={menu.id} className="py-3">
                    {menu.trigger ? (
                      <AccordionItem className="border-0" value={`${menu.id}`}>
                        <AccordionTrigger className="text-sm font-semibold [&_svg]:hidden p-0 m-0">
                          {menu.trigger}
                        </AccordionTrigger>

                        <AccordionContent
                          className={cn('grid grid-cols-2 gap-2 p-0 pt-4', {
                            'grid-cols-1': menu.content.items?.length <= 3,
                          })}
                        >
                          {menu.content.main && (
                            <Link
                              href={menu.content.main.href}
                              className="col-span-2 flex items-center gap-4 select-none rounded-md p-2 bg-primary/10"
                            >
                              <span className="">Icon</span>
                              <div className="flex flex-col gap-1">
                                <span className="text-sm font-medium leading-none group-hover:text-primary">
                                  {menu.content.main.title}
                                </span>
                                <span className="text-[10px] leading-tight text-muted-foreground">
                                  {menu.content.main.description}
                                </span>
                              </div>
                            </Link>
                          )}
                          {menu.content.items?.map(subMenu => (
                            <Link
                              key={subMenu.id}
                              href={subMenu.href}
                              className="flex flex-col items-start gap-2 select-none rounded-md p-2 hover:bg-primary/10"
                            >
                              <span className="">Icon</span>
                              <div className="flex flex-col gap-1">
                                <span className="text-sm font-medium leading-none group-hover:text-primary">
                                  {subMenu.title}
                                </span>
                                <span className="text-[10px] leading-tight text-muted-foreground">
                                  {subMenu.description}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    ) : (
                      <Link
                        href={menu.href || ''}
                        className="text-sm font-semibold"
                      >
                        {menu.label}
                      </Link>
                    )}
                  </li>
                ))}
              </Accordion>
            </ul>
          </nav>
        </DrawerHeader>
        <DrawerFooter>
          <ToggleTheme />

          <Button variant="outline" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild className="">
            <Link href="/login">
              <Logo className="h-4 text-white" />
              Sign-up Now
            </Link>
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </DrawerUI>
  )
}
