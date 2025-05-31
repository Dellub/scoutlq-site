import type { Metadata } from 'next'

export const siteConfig = {
  name: 'ScoutlQ',
  description:
    'AI-powered Revenue Collections & Insights for your Dental Practice Operations',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  keywords: [
    'Dental',
    'Analytics',
    'Automation',
    'AI-powered',
    'Insights',
  ] as Metadata['keywords'],
} as const
