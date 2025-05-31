'use client'

import { pricing } from '@/@data/pricing'
import useWindowSize from '@/hooks/use-window-size'
import { cn } from '@/lib/utils'
import { type Variants, motion, useInView } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import { useRef, useState } from 'react'
import { MarqueeContent } from '../marquee-section'
import { Label } from '../ui/label'
import { Switch } from '../ui/switch'

export function Pricing() {
  const ref = useRef(null)
  const [isMonthly, setIsMonthly] = useState(true)
  const inViewResult = useInView(ref, { once: true, margin: '-50px' })
  const { isDesktop } = useWindowSize()

  const defaultVariants: Variants = {
    hidden: { y: 6, opacity: 0, filter: 'blur(16px)' },
    visible: { y: -6, opacity: 1, filter: 'blur(0px)' },
  }

  const handleToggle = () => {
    setIsMonthly(!isMonthly)
  }

  return (
    <section className="flex flex-col gap-20 py-5 md:py-10">
      <MarqueeContent />

      <div className="container w-full flex flex-col items-center gap-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inViewResult ? 'visible' : 'hidden'}
          variants={defaultVariants}
          transition={{
            delay: 0.04,
            duration: 0.4,
            ease: 'easeOut',
          }}
          className="flex flex-col items-center gap-4 text-center mx-auto"
        >
          <h2 className="text-sm md:text-base text-primary font-mono font-black tracking-wider uppercase">
            Pricing
          </h2>
          <h3 className="max-w-[35ch] w-full text-center font-semibold text-2xl sm:text-4xl md:text-5xl">
            Choose the plan that's right for you
          </h3>
        </motion.div>

        <div className="flex justify-center mb-10">
          <span className="mr-2 font-semibold">Monthly</span>
          {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
          <label className="relative inline-flex items-center cursor-pointer">
            <Label>
              <Switch checked={!isMonthly} onCheckedChange={handleToggle} />
            </Label>
          </label>
          <span className="ml-2 font-semibold">Yearly</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 sm:2 gap-4">
          {pricing.map((plan, index) => (
            <motion.div
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              initial={{ y: 50, opacity: 1 }}
              whileInView={
                isDesktop
                  ? {
                      y: 0,
                      opacity: 1,
                      x:
                        index === pricing.length - 1
                          ? -30
                          : index === 0
                            ? 30
                            : 0,
                      scale:
                        index === 0 || index === pricing.length - 1
                          ? 0.94
                          : 1.0,
                    }
                  : {}
              }
              viewport={{ once: true }}
              transition={{
                duration: 1.6,
                type: 'spring',
                stiffness: 100,
                damping: 30,
                delay: 0.4,
                opacity: { duration: 0.5 },
              }}
              className={cn(
                'rounded-2xl border-[1px] p-6 bg-background text-center lg:flex lg:flex-col lg:justify-center relative',
                plan.isPopular
                  ? 'border-primary border-[2px]'
                  : 'border-border',
                index === 0 || index === pricing.length - 1
                  ? 'z-0 transform translate-x-0 translate-y-0 -translate-z-[50px] rotate-y-[10deg]'
                  : 'z-10',
                index === 0 && 'origin-right',
                index === pricing.length - 1 && 'origin-left',
              )}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-primary py-0.5 px-2 rounded-bl-xl rounded-tr-xl flex items-center">
                  <Star className="text-white" />
                  <span className="text-white ml-1 font-sans font-semibold">
                    Popular
                  </span>
                </div>
              )}
              <div>
                <p className="text-base font-semibold text-muted-foreground">
                  {plan.name}
                </p>
                <p className="mt-6 flex items-center justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-foreground">
                    {isMonthly ? plan.price : plan.yearlyPrice}
                  </span>
                  {plan.period !== 'Next 3 months' && (
                    <span className="text-sm font-semibold leading-6 tracking-wide text-muted-foreground">
                      / {plan.period}
                    </span>
                  )}
                </p>

                <p className="text-xs leading-5 text-muted-foreground">
                  {isMonthly ? 'billed monthly' : 'billed annually'}
                </p>

                <ul className="mt-5 gap-2 flex flex-col">
                  {plan.features.map((feature, idx) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                    <li key={idx} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <hr className="w-full my-4" />

                {/* <Link
                  href={plan.href}
                  className={cn(
                    buttonVariants({
                      variant: 'outline',
                    }),
                    'group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter',
                    'transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-1 hover:bg-primary hover:text-white',
                    plan.isPopular
                      ? 'bg-primary text-white'
                      : 'bg-white text-black',
                  )}
                >
                  {plan.buttonText}
                </Link> */}

                <p className="mt-6 text-xs leading-5 text-muted-foreground">
                  {plan.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
