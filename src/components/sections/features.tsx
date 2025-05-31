'use client'

import { features } from '@/@data/features'
import { type Variants, motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FeaturesHorizontal } from '../features-horizontal'

export function Features() {
  const ref = useRef(null)
  const inViewResult = useInView(ref, { once: true, margin: '-50px' })

  const defaultVariants: Variants = {
    hidden: { y: 6, opacity: 0, filter: 'blur(16px)' },
    visible: { y: -6, opacity: 1, filter: 'blur(0px)' },
  }

  return (
    <section className="py-5 md:py-20">
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
            Product Features User Interface
          </h2>
          <h3 className="max-w-[35ch] w-full text-center font-semibold text-2xl sm:text-4xl md:text-5xl">
            Smarter Operations, Higher Revenue: Transform Your Practice with
            ScoutIQ
          </h3>
        </motion.div>

        <FeaturesHorizontal data={features} />
      </div>
    </section>
  )
}
