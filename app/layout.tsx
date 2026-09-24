import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'La Casino — официальный сайт | La Casino играть онлайн',
  description: 'La Casino официальный сайт — актуальное зеркало, быстрый вход, слоты и игры онлайн. Понятный гид для игроков на телефоне и компьютере, безопасная навигация и поддержка.',
  metadataBase: new URL('https://la12casino.vercel.app/'),
  generator: 'v0.app',
  language: 'ru-RU',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  alternates: {
    canonical: 'https://la12casino.vercel.app/',
  },
  icons: {
    icon: '/la-casino-favicon.png',
    apple: '/la-casino-favicon.png',
  },
  openGraph: {
    title: 'La Casino — официальный сайт онлайн казино',
    description: 'Играйте в La Casino прямо сейчас. Официальный сайт с зеркалом, безопасные ставки, все слоты и игры.',
    url: 'https://la12casino.vercel.app/',
    type: 'website',
    locale: 'ru_RU',
  },
  other: {
    'article:published_time': new Date().toISOString(),
    'article:author': 'La Casino',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1a1a1a' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="language" content="Russian" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="La Casino" />
        <meta name="publisher" content="La Casino" />
        <link rel="canonical" href="https://la12casino.vercel.app/" />
        <link rel="alternate" hrefLang="ru" href="https://la12casino.vercel.app/" />
        <script type="application/ld+json" suppressHydrationWarning>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'La Casino',
            description: 'Официальный сайт онлайн казино La Casino',
            url: 'https://la12casino.vercel.app/',
            image: 'https://la12casino.vercel.app/la-casino-favicon.png',
            priceRange: '$$',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Online Platform',
              addressCountry: 'RU',
            },
          })}
        </script>
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
