import type { Metadata } from 'next'
import LandingPage from '@/components/LandingPage'
import About from '@/components/About'

export const metadata: Metadata = {
  title: 'Erin Biller | Author, Storyteller, and Creative Writer',
  description:
    'Explore the work of Erin Biller, an imaginative and expressive author creating stories that linger long after the last page.',
  keywords: [
    'Erin Biller',
    'author',
    'female author',
    'storyteller',
    'creative writer',
    'fiction writer',
    'books',
    'writing services',
  ],
  openGraph: {
    title: 'Erin Biller | Author and Storyteller',
    description:
      'More behind the pen — creating stories that linger long after the last page.',
    url: 'https://authorerinbiller.com',
    siteName: 'Erin Biller',
    type: 'website',
  },
}

export default function Home() {
  return (
    <>
      <LandingPage />
      <About />
    </>
  )
}