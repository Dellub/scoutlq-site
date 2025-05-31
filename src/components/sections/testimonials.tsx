'use client'

import { type Variants, motion, useInView } from 'framer-motion'
import { Quote } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'
import { BlurFade } from '../blur-fade'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../carousel'

const companies = [
  'Google',
  'Microsoft',
  'Amazon',
  'Netflix',
  'YouTube',
  'Instagram',
  'Uber',
  'Spotify',
]

export function Testimonials() {
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
            Testimonial Highlight
          </h2>
          <h3 className="max-w-[35ch] w-full text-center font-semibold text-2xl sm:text-4xl md:text-5xl">
            What our customers are saying
          </h3>
        </motion.div>

        <Carousel className="w-full">
          <div className="w-full max-w-2xl mx-auto relative">
            <CarouselContent>
              {Array.from({ length: 7 }).map((_, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <CarouselItem key={index}>
                  <div className="p-2 pb-5">
                    <div className="text-center">
                      <Quote className="text-4xl text-themeDarkGray my-4 mx-auto" />
                      <BlurFade delay={0.25} inView>
                        <h4 className="text-1xl font-semibold max-w-lg mx-auto px-10">
                          There is a lot of exciting stuff going on in the stars
                          above us that make astronomy so much fun. The truth is
                          the universe is a constantly changing, moving, some
                          would say “living” thing because you just never know
                          what you are going to see on any given night of
                          stargazing.
                        </h4>
                      </BlurFade>
                      <BlurFade delay={0.25 * 2} inView>
                        <div className="mt-8">
                          <Image
                            width={0}
                            height={40}
                            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                            key={index}
                            src={`https://cdn.magicui.design/companies/${
                              companies[index % companies.length]
                            }.svg`}
                            alt={`${companies[index % companies.length]} Logo`}
                            className="mx-auto w-auto h-[40px] grayscale opacity-30"
                          />
                        </div>
                      </BlurFade>
                      <div className="">
                        <BlurFade delay={0.25 * 3} inView>
                          <h4 className="text-1xl font-semibold my-2">
                            Leslie Alexander
                          </h4>
                        </BlurFade>
                      </div>
                      <BlurFade delay={0.25 * 4} inView>
                        <div className=" mb-3">
                          <span className="text-sm text-themeDarkGray">
                            UI Designer
                          </span>
                        </div>
                      </BlurFade>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-2/12 bg-gradient-to-r from-background" />
            <div className="pointer-events-none absolute inset-y-0 right-0 h-full  w-2/12 bg-gradient-to-l from-background" />
          </div>
          <div className="md:block hidden">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
