import Image from 'next/image'
import { Marquee } from './magicui/marquee'

const tag = {
  accounting: {
    name: 'Accounting',
    color: '#15095d',
  },
  pms: {
    name: 'PMS',
    color: '#704100',
  },
  hris: {
    name: 'HRIS',
    color: '#204a12',
  },
}

const accountingIntegration = [
  {
    name: 'Quickbooks',
    img: '/images/brand/quickbooks.webp',
    tag: tag.accounting,
  },
  {
    name: 'Xero',
    img: '/images/brand/xero.webp',
    tag: tag.accounting,
  },
  {
    name: 'NetSuite',
    img: '/images/brand/netsuite.webp',
    tag: tag.accounting,
  },
  {
    name: 'Freshbooks',
    img: '/images/brand/freshbooks.webp',
    tag: tag.accounting,
  },
]

const pmsIntegration = [
  {
    name: 'Dentrix',
    img: '/images/brand/dentrix.webp',
    tag: tag.pms,
  },
  {
    name: 'Opendental',
    img: '/images/brand/opendental.webp',
    tag: tag.pms,
  },
  {
    name: 'Eaglesoft',
    img: '/images/brand/eaglesoft.webp',
    tag: tag.pms,
  },
  {
    name: 'Planet DDS',
    img: '/images/brand/planet.webp',
    tag: tag.pms,
  },
  {
    name: 'Sensei',
    img: '/images/brand/sensei.webp',
    tag: tag.pms,
  },
  {
    name: 'Carestream',
    img: '/images/brand/carestream.webp',
    tag: tag.pms,
  },
]

const hrisIntegration = [
  {
    name: 'ADP',
    img: '/images/brand/adp.webp',
    tag: tag.hris,
  },
  {
    name: 'Gusto',
    img: '/images/brand/gusto.webp',
    tag: tag.hris,
  },
  {
    name: 'Paychex',
    img: '/images/brand/paychex.webp',
    tag: tag.hris,
  },
]

const firstRow = [
  ...hrisIntegration,
  ...accountingIntegration,
  ...pmsIntegration,
]

const secondRow = [
  ...pmsIntegration,
  ...accountingIntegration,
  ...hrisIntegration,
]

const thirdRow = [
  ...accountingIntegration,
  ...pmsIntegration,
  ...hrisIntegration,
]

export function MarqueeContent() {
  return (
    <div className="relative flex w-full flex-col">
      <Marquee pauseOnHover className="[--duration:100s] w-full">
        {firstRow?.map((item, index) => {
          return (
            <div
              className="flex items-center gap-6 px-6 py-4 bg-white rounded-xl border border-[#e4ecf6] shadow-md shadow-[#101828]/[.09] drop-shadow-md"
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
            >
              <Image
                className="w-12 min-w-12 h-12 rounded-full outline outline-black/40"
                src={item.img}
                alt={`Logo ${item.name}`}
                width={120}
                height={120}
              />

              <span className="font-semibold text-black">{item.name}</span>

              <div
                style={{
                  ['--color-badge' as string]: item.tag.color,
                }}
                className="flex h-auto w-fit bg-[var(--color-badge)]/40 border-[var(--color-badge)] text-[var(--color-badge)] px-4 py-1.5 rounded-md"
              >
                <span className="text-xs">{item.tag.name}</span>
              </div>
            </div>
          )
        })}
      </Marquee>

      <Marquee pauseOnHover reverse className="[--duration:60s] w-full">
        {secondRow?.map((item, index) => {
          return (
            <div
              className="flex items-center gap-6 px-6 py-4 bg-white rounded-xl border border-[#e4ecf6] shadow-md shadow-[#101828]/[.09] drop-shadow-md"
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
            >
              <Image
                className="w-12 min-w-12 h-12 rounded-full outline outline-black/40"
                src={item.img}
                alt={`Logo ${item.name}`}
                width={120}
                height={120}
              />

              <span className="font-semibold text-black">{item.name}</span>

              <div
                style={{
                  ['--color-badge' as string]: item.tag.color,
                }}
                className="flex h-auto w-fit bg-[var(--color-badge)]/40 border-[var(--color-badge)] text-[var(--color-badge)] px-4 py-1.5 rounded-md"
              >
                <span className="text-xs">{item.tag.name}</span>
              </div>
            </div>
          )
        })}
      </Marquee>

      <Marquee pauseOnHover className="[--duration:40s] w-full py-4">
        {thirdRow?.map((item, index) => {
          return (
            <div
              className="flex items-center gap-6 px-6 py-4 bg-white rounded-xl border border-[#e4ecf6] shadow-md shadow-[#101828]/[.09] drop-shadow-md"
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
            >
              <Image
                className="w-12 min-w-12 h-12 rounded-full outline outline-black/40"
                src={item.img}
                alt={`Logo ${item.name}`}
                width={120}
                height={120}
              />

              <span className="font-semibold text-black">{item.name}</span>

              <div
                style={{
                  ['--color-badge' as string]: item.tag.color,
                }}
                className="flex h-auto w-fit bg-[var(--color-badge)]/40 border-[var(--color-badge)] text-[var(--color-badge)] px-4 py-1.5 rounded-md"
              >
                <span className="text-xs">{item.tag.name}</span>
              </div>
            </div>
          )
        })}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 h-full bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 h-full bg-gradient-to-l from-background to-transparent" />
    </div>
  )
}
