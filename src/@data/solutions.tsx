import { FlickeringGrid } from '@/components/flickering-grid'
import { Ripple } from '@/components/ripple'
import Safari from '@/components/safari'

const url = 'https://scoutlq.com'

export const solutions = [
  {
    id: Math.random(),
    title: 'Predictive Analytics Dashboards',
    description:
      "Get a centralized view of your practice's performance with real-time financial and operational metrics. ScoutIQ seamlessly integrates with any PMS, accounting, and banking system, delivering actionable AI insights on cash flow, location performance, production, accounts receivable, appointment volumes, provider productivity, and much more.",
    className: 'transition-all duration-500 ease-out',
    content: (
      <>
        <Safari
          src="/images/dashboard.png"
          url={url}
          className="-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300"
        />
      </>
    ),
  },
  {
    id: Math.random(),
    title: 'AI-Powered Intelligence Layer',
    description:
      'Stay ahead of issues with Proactive alerts and anomaly detection. ScoutIQ provides actionable insights and recommendations to help you make informed decisions and resolve business operations issues quickly and effectively.',
    className: 'transition-all duration-500 ease-out',
    content: (
      <>
        <Safari
          src="/images/dashboard.png"
          url={url}
          className="-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300"
        />
      </>
    ),
  },
  {
    id: Math.random(),
    title: 'AI Business Co-Pilot Chatbot',
    description:
      'Make smarter decisions, faster. Our AI Co-Pilot provides instant answers to your business operations and financial data questions, helping you navigate complex data and make confident, data-driven decisions with ease.',
    className: 'md:row-span-2 transition-all duration-500 ease-out',
    content: (
      <>
        <FlickeringGrid
          className="z-0 absolute inset-0 [mask:radial-gradient(circle_at_center,#fff_400px,transparent_0)]"
          squareSize={4}
          gridGap={6}
          color="#000"
          maxOpacity={0.1}
          flickerChance={0.1}
          height={800}
          width={800}
        />
        <Safari
          src="/images/dashboard.png"
          url={url}
          className="-mb-48 ml-0 md:ml-12 mt-4 md:mt-16 h-full md:px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-x-[-10px] transition-all duration-300"
        />
      </>
    ),
  },
  {
    id: Math.random(),
    title: 'Automated Billing & Collections Engine',
    description:
      'Upgrade your revenue cycle management process. Automate patient collections with omnichannel outreach (SMS, email, letters, calls) featuring embedded payment links and buy-now-pay-later options. ScoutIQ also eliminates manual error-prone reconciliation workflows with automated PMS and accounting reconciliation, saving your practice both time and money.',
    className:
      'flex-row order-4 md:col-span-2 md:flex-row xl:order-none transition-all duration-500 ease-out',
    content: (
      <>
        <Ripple className="absolute -bottom-full" />
        <Safari
          src="/images/dashboard.png"
          url={url}
          className="-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300"
        />
      </>
    ),
  },
]
