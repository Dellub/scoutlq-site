'use client'

import { faqs } from '@/@data/faq'
import useWindowSize from '@/hooks/use-window-size'
import { type Variants, motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'

export function Faq() {
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
    <section className="py-5 md:py-10">
      <div className="container w-full flex flex-col items-center gap-6 sm:gap-10">
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
            FAQ
          </h2>
          <h3 className="max-w-[35ch] w-full text-center font-semibold text-2xl sm:text-4xl md:text-5xl">
            Frequently asked questions
          </h3>
        </motion.div>

        <div className="mx-auto my-12 w-full md:max-w-[800px]">
          <Accordion
            type="single"
            collapsible
            className="flex w-full flex-col items-center justify-center space-y-2"
          >
            {faqs.map((faq, idx) => (
              <AccordionItem
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={idx}
                value={faq.question}
                className="w-full border rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-4 cursor-pointer">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
