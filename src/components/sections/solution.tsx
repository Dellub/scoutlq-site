'use client'

import { solutions } from '@/@data/solutions'
import { cn } from '@/lib/utils'
import { type Variants, motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { AnimatedBeamMultiple } from '../animated-beam-multiple'

export function Solution() {
  const ref = useRef(null)
  const inViewResult = useInView(ref, { once: true, margin: '-50px' })

  const defaultVariants: Variants = {
    hidden: { y: 6, opacity: 0, filter: 'blur(16px)' },
    visible: { y: -6, opacity: 1, filter: 'blur(0px)' },
  }

  return (
    <section className="flex flex-col gap-20 py-5 md:py-10">
      <div className="container w-full flex flex-col items-center gap-4 md:gap-10">
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
            Solution
          </h2>
          <h3 className="max-w-[35ch] w-full text-center font-semibold text-2xl sm:text-4xl md:text-5xl">
            Supercharge Your Dental Practice with Intelligent Collections
            Automation and Proactive AI Insights
          </h3>
          <p className="max-w-[60ch] w-full text-center text-sm sm:text-base md:text-lg leading-normal">
            ScoutIQ transforms dental practice operations with AI-driven tools
            that automate collection workflows, enhance financial visibility,
            and recover lost uncollected revenue.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-sm md:max-w-3xl xl:max-w-6xl xl:auto-rows-fr">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              className={cn(
                'group relative items-start overflow-hidden bg-neutral-50 dark:bg-neutral-800 hover:bg-primary/10 p-6 rounded-2xl',
                solution.className,
              )}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                type: 'spring',
                stiffness: 100,
                damping: 30,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="font-semibold dark:font-bold mb-2 text-primary dark:text-white">
                  {solution.title}
                </h3>
                <p className="text-foreground">{solution.description}</p>
              </div>
              {solution.content}
              <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-neutral-50 dark:from-neutral-900 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="flex w-full justify-between max-w-full md:max-w-4/5 mx-auto">
          <AnimatedBeamMultiple />
        </div>
      </div>
    </section>
  )
}
