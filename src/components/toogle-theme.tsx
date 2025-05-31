import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ToggleTheme() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      size="sm"
      variant="ghost"
      className="w-full h-full py-2 cursor-pointer hover:bg-primary/10"
    >
      <div className="flex items-center gap-2 md:gap-0 dark:hidden">
        <Moon className="size-5" />
        <span className="block lg:hidden">Dark</span>
      </div>

      <div className="dark:flex items-center gap-2 hidden">
        <Sun className="size-5" />
        <span className="block lg:hidden">Light</span>
      </div>

      <span className="sr-only">Change theme</span>
    </Button>
  )
}
