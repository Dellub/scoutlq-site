'use client'

import { type Variants, motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '../ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { Textarea } from '../ui/textarea'

const formSchema = z.object({
  firstName: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  email: z.string().email(),
  subject: z.string().min(2).max(255),
  message: z.string(),
})

export function Contact() {
  const ref = useRef(null)
  const inViewResult = useInView(ref, { once: true, margin: '-50px' })

  const defaultVariants: Variants = {
    hidden: { y: 6, opacity: 0, filter: 'blur(16px)' },
    visible: { y: -6, opacity: 1, filter: 'blur(0px)' },
  }

  const form = useForm<z.infer<typeof formSchema>>({
    // @ts-ignore
    resolver: formSchema,
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      subject: 'Web Development',
      message: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { firstName, lastName, email, subject, message } = values
    console.log(values)

    const mailToLink = `mailto:leomirandadev@gmail.com?subject=${subject}&body=Hello I am ${firstName} ${lastName}, my Email is ${email}. %0D%0A${message}`

    window.location.href = mailToLink
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
            Sign Up
          </h2>
          <h3 className="max-w-[35ch] w-full text-center font-semibold text-2xl sm:text-4xl md:text-5xl">
            Get Connect With Us access
          </h3>
          <p className="max-w-[55ch] w-full text-center font-semibold text-base sm:text-lg">
            Stay in touch with us for updates, support, and valuable insights.
            We're here to help you every step of the way!
          </p>
        </motion.div>

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
          className="flex flex-col"
        >
          <Form {...form}>
            <form
              // @ts-ignore
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid w-full gap-4"
            >
              <div className="flex flex-col md:!flex-row gap-6">
                <FormField
                  // @ts-ignore
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Leopoldo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  // @ts-ignore
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Miranda" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <FormField
                  // @ts-ignore
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="contact@bundui.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <FormField
                  // @ts-ignore
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-background">
                          <SelectItem value="Web Development">
                            Web Development
                          </SelectItem>
                          <SelectItem value="Mobile Development">
                            Mobile Development
                          </SelectItem>
                          <SelectItem value="Figma Design">
                            Figma Design
                          </SelectItem>
                          <SelectItem value="REST API">REST API</SelectItem>
                          <SelectItem value="FullStack Project">
                            FullStack Project
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <FormField
                  // @ts-ignore
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={5}
                          placeholder="Your message..."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button className="mt-4">Sign-up Now</Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  )
}
