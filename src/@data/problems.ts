import {
  BadgeDollarSign,
  ChartColumnDecreasing,
  ChartPie,
  CloudOff,
  MonitorCog,
} from 'lucide-react'

export const problems = [
  {
    id: Math.random(),
    title: 'Disconnected Legacy Systems',
    description:
      'From your point of sale, PMS, bank accounts & accounting ERP, Dental practices rely on several disconnected tools which leads to inefficiencies and manual work-flows.',
    icon: CloudOff,
  },
  {
    id: Math.random(),
    title: 'Lack of Unified Operations & Financial Insights',
    description:
      'Lack of unified data integration across different PMS and other systems like accounting ERP. 83% of practices lack access to actionable real-time KPIs.',
    icon: BadgeDollarSign,
  },
  {
    id: Math.random(),
    title: 'Uncollected Revenue Losses',
    description:
      'Dental practices leave an average of about 9-15% of revenue uncollected from A/Rs each year.',
    icon: ChartColumnDecreasing,
  },
  {
    id: Math.random(),
    title: 'Manual billing & collection workflows',
    description:
      'Patient billing, outreach and reconciliation require time-consuming manual effort, increasing errors and cost while slowing cash flow.',
    icon: MonitorCog,
  },
  {
    id: Math.random(),
    title: 'Human Capital Resource Gap',
    description:
      'With 73% of practices operating without a financial manager, most lack the human capital resources to optimize operations, increase revenue collections and drive growth.',
    icon: ChartPie,
  },
]
