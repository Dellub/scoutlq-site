'use client'

import { howItWorks } from '@/@data/howItWorks'
import { type Variants, motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FeaturesVertical } from '../features-vertical'

export function HowItWorks() {
  const ref = useRef(null)
  const inViewResult = useInView(ref, { once: true, margin: '-50px' })

  const defaultVariants: Variants = {
    hidden: { y: 6, opacity: 0, filter: 'blur(16px)' },
    visible: { y: -6, opacity: 1, filter: 'blur(0px)' },
  }

  return (
    <section className="py-5 md:py-10">
      <div className="container w-full flex flex-col items-center gap-6 md:gap-20">
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
            Just 4 Steps to Upgrade your Dental Operations
          </h2>
          <h3 className="max-w-[35ch] w-full text-center font-semibold text-2xl sm:text-4xl md:text-5xl">
            Integrate with ScoutIQ and Unlock Your Practice's Potential
          </h3>
        </motion.div>

        <FeaturesVertical data={howItWorks} />
      </div>
    </section>
  )
}
