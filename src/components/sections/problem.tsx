'use client'

import { problems } from '@/@data/problems'
import { BlurFade } from '@/components/blur-fade'
import { type Variants, motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function Problem() {
  const ref = useRef(null)
  const inViewResult = useInView(ref, { once: true, margin: '-50px' })

  const defaultVariants: Variants = {
    hidden: { y: 6, opacity: 0, filter: 'blur(16px)' },
    visible: { y: -6, opacity: 1, filter: 'blur(0px)' },
  }

  return (
    <section className="pt-14 pb-5 md:pt-20 md:pb-10">
      <div className="container w-full flex flex-col items-center gap-4 md:gap-8">
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
            Problem
          </h2>
          <h3 className="max-w-[30ch] w-full text-center font-semibold text-2xl sm:text-4xl md:text-5xl">
            Managing your dental practice shouldn't be this hard.
          </h3>
          <p className="max-w-[65ch] w-full text-center text-sm sm:text-base md:text-lg leading-normal">
            Dental practices struggle with time-consuming manual collection
            workflows across multiple fragmented systems with limited visibility
            on operational & financial performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-sm md:max-w-3xl xl:max-w-6xl">
          {problems.map((problem, index) => (
            <BlurFade
              className="h-full"
              key={problem.id}
              delay={0.2 + index * 0.2}
              inView
            >
              <div className="flex flex-col gap-3 md:gap-6 rounded-lg border text-card-foreground bg-background border-none shadow-none p-4 h-full">
                <div className="flex items-center justify-center w-8 md:w-12 h-8 md:h-12 rounded-full bg-primary/20">
                  <problem.icon className="w-4 md:w-6 h-4 md:h-6" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg md:text-xl font-semibold">
                    {problem.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {problem.description}
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
