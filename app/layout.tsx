import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.authorerinbiller.com'),
  title: {
    default: 'Erin Biller | Author, Ghostwriter & Storyteller',
    template: '%s | Erin Biller',
  },
  description:
    'Erin Biller is an author, ghostwriter, and Kingdom storyteller helping people shape meaningful stories, books, and messages with care, beauty, and purpose.',
  keywords: [
    'Erin Biller',
    'author Erin Biller',
    'ghostwriter',
    'Christian ghostwriter',
    'female author',
    'Christian fiction author',
    'self-publishing support',
    'book development',
    'Kingdom storyteller',
    'AMMI book',
    'Nashville author',
  ],
  authors: [{ name: 'Erin Biller' }],
  creator: 'Erin Biller',
  publisher: 'Erin Biller',
  openGraph: {
    title: 'Erin Biller | Author, Ghostwriter & Storyteller',
    description:
      'Author, ghostwriter, and storyteller helping people bring meaningful stories and messages to life.',
    url: 'https://www.authorerinbiller.com',
    siteName: 'Erin Biller',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Erin Biller | Author, Ghostwriter & Storyteller',
    description:
      'Books, ghostwriting, self-publishing support, and meaningful storytelling from Erin Biller.',
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#120b10] text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}