'use client'

import { BackgroundBeamsWithCollision } from '@/components/background-beams-with-collision'
import { Logo } from '@/components/logo'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const ease = [0.16, 1, 0.3, 1]

export function Hero() {
  return (
    <section className="container w-full">
      <div className="flex flex-col items-center">
        <BackgroundBeamsWithCollision>
          <div className="flex flex-col items-center gap-8 text-center py-5 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: -20, filter: 'blur(16px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
              transition={{ duration: 0.8, ease, delay: 0 }}
            >
              <Badge variant="outline" className="text-sm bg-muted py-2">
                <span className="mr-2 text-primary">
                  <Badge className="bg-background text-foreground hover:bg-background">
                    New
                  </Badge>
                </span>
                <span>
                  Dental AI Collections Automation & Analytics Platform
                </span>
              </Badge>
            </motion.div>

            <div className="flex flex-col items-center gap-2">
              <motion.h1
                className="max-w-[28ch] w-full text-center text-4xl md:text-6xl font-bold"
                initial={{ opacity: 0, y: -20, filter: 'blur(16px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
                transition={{ duration: 0.8, ease, delay: 0.1 }}
              >
                AI-powered Revenue Collections & Insights for your Dental
                Practice Operations
              </motion.h1>
              <motion.p
                className="max-w-[75ch] w-full text-base md:text-lg text-muted-foreground"
                initial={{ opacity: 0, y: -20, filter: 'blur(16px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
                transition={{ duration: 0.8, ease, delay: 0.15 }}
              >
                Intelligent Automation & Insights for your Dental Practice.{' '}
                <br className="hidden md:block" />
                ScoutIQ streamlines revenue cycle management workflows with our
                automated collections & reconciliation engine and predictive AI
                insights, saving you time, increasing revenue and empowering
                smarter decision-making.
              </motion.p>
            </div>

            <motion.div
              className="flex gap-2"
              initial={{ opacity: 0, y: -20, filter: 'blur(16px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
              transition={{ duration: 0.8, ease, delay: 0.2 }}
            >
              <Button asChild className="">
                <Link href="/login">
                  <Logo className="h-auto w-4 text-white" />
                  Sign-up Now
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/login">Learn More</Link>
              </Button>
            </motion.div>
          </div>
        </BackgroundBeamsWithCollision>

        <motion.div
          className="relative group"
          initial={{ opacity: 0, y: -20, filter: 'blur(16px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
          transition={{ duration: 0.8, ease, delay: 0.25 }}
        >
          {/* blur effect */}
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/60 rounded-full blur-3xl" />
          {/* blur effect */}

          <Image
            width={1240}
            height={1200}
            className="w-full mx-auto rounded-lg relative rouded-lg leading-none flex items-center dark:hidden"
            src="/images/hero-image-light.png"
            alt="shadcn landing page"
          />
          <Image
            width={1240}
            height={1200}
            className="w-full mx-auto rounded-lg relative rouded-lg leading-none dark:flex items-center hidden"
            src="/images/hero-image-dark.png"
            alt="shadcn landing page"
          />

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-32 bg-gradient-to-b from-background/0 via-background/60 to-background rounded-lg" />
        </motion.div>
      </div>
    </section>
  )
}
