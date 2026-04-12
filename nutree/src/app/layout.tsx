import type { Metadata } from 'next'
import '../styles/globals.css'
import { SiteNav } from '@/components/layout/SiteNav'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { ChatWidget } from '@/components/ui/ChatWidget'

export const metadata: Metadata = {
  title: {
    template: '%s | Nutree Clinic',
    default:  'Nutree Clinic — Science-based telehealth. Human-centered care.',
  },
  description:
    'Physician-guided GLP-1 weight loss, NAD+, Sermorelin, Oxytocin, and B12 therapy. Licensed telehealth, delivered to your door. Based in Florida.',
  keywords: [
    'GLP-1 telehealth', 'compounded semaglutide', 'compounded tirzepatide',
    'NAD+ therapy', 'sermorelin', 'oxytocin nasal spray', 'B12 injections',
    'weight loss telehealth Florida', 'anti-aging telehealth',
  ],
  metadataBase: new URL('https://nutreeclinic.com'),
  openGraph: {
    siteName: 'Nutree Clinic',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
        <ChatWidget />
      </body>
    </html>
  )
}
