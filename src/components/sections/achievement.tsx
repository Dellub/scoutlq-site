'use client'

import { achievements } from '@/@data/achievements'
import { BlurFade } from '@/components/blur-fade'
import { type Variants, motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function Achievements() {
  const ref = useRef(null)
  const inViewResult = useInView(ref, { once: true, margin: '-50px' })

  const defaultVariants: Variants = {
    hidden: { y: 6, opacity: 0, filter: 'blur(16px)' },
    visible: { y: -6, opacity: 1, filter: 'blur(0px)' },
  }

  return (
    <section className="py-5 md:py-10">
      <div className="container w-full flex flex-col items-center gap-6 md:gap-10">
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
            Our Achievements
          </h2>
          <h3 className="max-w-[30ch] w-full text-center font-semibold text-2xl sm:text-4xl md:text-5xl">
            Driving Efficiency and Revenue Growth for Dental Practices
          </h3>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-sm md:max-w-3xl xl:max-w-4xl w-full xl:auto-rows-fr"
          ref={ref}
          initial="hidden"
          animate={inViewResult ? 'visible' : 'hidden'}
          variants={defaultVariants}
          transition={{
            delay: 0.04,
            duration: 0.4,
            ease: 'easeOut',
          }}
        >
          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl md:text-5xl font-black leading-none tracking-widest">
              263+
            </span>

            <span className="text-xs md:text-sm text-muted-foreground leading-none">
              Active Practices Customers
            </span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl md:text-5xl font-black leading-none tracking-widest">
              100%
            </span>

            <span className="text-xs md:text-sm text-muted-foreground leading-none">
              HIPPA Compliant
            </span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl md:text-5xl font-black leading-none tracking-widest">
              99.9%
            </span>

            <span className="text-xs md:text-sm text-muted-foreground leading-none">
              Uptime Guarantee
            </span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl md:text-5xl font-black leading-none tracking-widest">
              24/7
            </span>

            <span className="text-xs md:text-sm text-muted-foreground leading-none">
              Human Support
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-2 max-w-sm md:max-w-3xl xl:max-w-6xl xl:auto-rows-fr">
          {achievements.map((achievement, index) => (
            <BlurFade
              className="h-full"
              key={achievement.id}
              delay={0.2 + index * 0.2}
              inView
            >
              <div className="flex flex-col gap-3 md:gap-6 rounded-lg border text-card-foreground bg-background border-none shadow-none p-2 md:p-4 h-full">
                <div className="flex flex-col items-center md:items-start gap-2">
                  <h3 className="text-center md:text-left text-lg md:text-xl font-semibold">
                    {achievement.title}
                  </h3>
                  <p className="text-center md:text-left text-sm md:text-base text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}
