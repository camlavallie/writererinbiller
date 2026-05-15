import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

import ammiCover from '@/assets/images/ammi-cover.jpg'

export const metadata: Metadata = {
  title: 'Books by Erin Biller | AMMI: A Novel',
  description:
    'Explore AMMI by Erin Biller, a redemptive novel about resilience, hope, healing, and the transformative power of unconditional love.',
  keywords: [
    'Erin Biller',
    'AMMI novel',
    'Christian fiction',
    'redemption story',
    'faith based fiction',
    'hope and healing novel',
    'female author',
  ],
  openGraph: {
    title: 'AMMI by Erin Biller',
    description:
      'A gripping redemption story about resilience, hope, and the transformative power of unconditional love.',
    url: 'https://www.authorerinbiller.com/books',
    siteName: 'Author Erin Biller',
    type: 'website',
  },
}

const purchaseLinks = [
  {
    label: 'Ebook',
    href: 'https://www.lulu.com/shop/erin-biller-and-anna-friendt-and-danielle-freitag-and-jennifer-westbrook/ammi/ebook/product-8me2qj.html?page=1&pageSize=4',
  },
  {
    label: 'Paperback',
    href: 'https://www.lulu.com/shop/erin-biller-and-anna-friendt-and-danielle-freitag-and-jennifer-westbrook/ammi/paperback/product-wd9y65.html?page=1&pageSize=4',
  },
  {
    label: 'Hardcover',
    href: 'https://www.lulu.com/shop/erin-biller-and-anna-friendt-and-danielle-freitag-and-jennifer-westbrook/ammi/hardcover/product-zd6ydy.html?page=1&pageSize=4',
  },
  {
    label: 'Amazon',
    href: 'https://www.amazon.com/Ammi-Novel-Erin-Biller-ebook/dp/B0C34Y7GFQ/ref=sr_1_1?crid=3C4J4H3KAA2LW&keywords=ammi+by+erin+biller&qid=1685208725&sprefix=ammi+by+erin+bille%2Caps%2C152&sr=8-1#detailBullets_feature_div',
  },
]

export default function BooksPage() {
  return (
    <main className="overflow-hidden bg-[#120b10] text-white">
      {/* Hero */}
      <section className="relative flex min-h-screen items-center px-6 py-32 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(216,154,170,0.22),transparent_34%),radial-gradient(circle_at_80%_55%,rgba(255,226,235,0.1),transparent_32%)]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.45em] text-[#e8b9c9]">
              Erin Biller Presents
            </p>

            <h1 className="font-serif text-6xl leading-none tracking-wide md:text-8xl lg:text-9xl">
              AMMI
            </h1>

            <p className="mt-6 max-w-xl text-2xl leading-9 text-[#f4d7e1] md:text-3xl">
              A redemptive novel about beauty, danger, resilience, and hope.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#buy"
                className="inline-flex rounded-full bg-[#d89aaa] px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#160b11] transition-all duration-300 hover:-translate-y-1 hover:bg-[#f1bdcb]"
              >
                Buy the Book
              </Link>

              <Link
                href="#story"
                className="inline-flex rounded-full border border-white/25 px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                Read the Story
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-[#d89aaa]/20 blur-3xl" />

            <Image
              src={ammiCover}
              alt="AMMI book cover by Erin Biller"
              priority
              className="relative rounded-[2rem] shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
            />
          </div>
        </div>
      </section>

      {/* Story */}
      <section
        id="story"
        className="relative flex min-h-screen items-center bg-[#fff9fb] px-6 py-32 text-[#2a151f] lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.45em] text-[#b48895]">
              The Story
            </p>

            <h2 className="font-serif text-5xl leading-tight md:text-7xl">
              Beautiful.
              <span className="block text-[#9f6374]">Creative.</span>
              Guarded.
              <span className="block">Alone.</span>
            </h2>
          </div>

          <div className="self-end">
            <p className="text-xl leading-9 text-[#5f4750] md:text-2xl">
              Ammi is a young woman fighting for independence in Los Angeles,
              unsure who she can trust and desperate to believe she is safe.
            </p>

            <p className="mt-6 text-lg leading-8 text-[#5f4750]">
              What begins as a search for freedom becomes a journey through
              broken trust, dangerous relationships, and the quiet ache of
              self-worth. Yet even in the darkest places, hope begins to find
              her.
            </p>
          </div>
        </div>
      </section>

      {/* Themes */}
      <section className="relative flex min-h-[85vh] items-center px-6 py-32 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_45%,rgba(255,226,235,0.12),transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.45em] text-[#e8b9c9]">
              Why It Lingers
            </p>

            <h2 className="font-serif text-5xl leading-tight md:text-7xl">
              A story of pain,
              <span className="block text-[#f4d7e1]">resilience,</span>
              and becoming whole.
            </h2>
          </div>

          <div className="grid gap-5 self-center">
            {[
              'Healing after manipulation and betrayal',
              'The search for safety, identity, and love',
              'Faith discovered when all seems lost',
              'Hope strong enough to begin again',
            ].map((theme) => (
              <div
                key={theme}
                className="rounded-[2rem] border border-white/10 bg-white/5 px-8 py-6 text-xl text-[#f7e9ee] backdrop-blur-md"
              >
                {theme}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-[#fff9fb] px-6 py-32 text-[#2a151f] lg:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.45em] text-[#b48895]">
            Reader Endorsement
          </p>

          <blockquote className="font-serif text-3xl leading-tight text-[#6d4b57] md:text-5xl">
            “This story is for the daughters who are longing to know the Love
            that is true.”
          </blockquote>

          <p className="mt-8 text-lg text-[#5f4750]">
            Ruth Schueler, Founder of Pray First Ministry
          </p>
        </div>
      </section>

      {/* Goodreads Review */}
      <section className="relative overflow-hidden bg-[#120b10] px-6 py-32 text-white lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(216,154,170,0.2),transparent_34%),radial-gradient(circle_at_75%_65%,rgba(255,226,235,0.08),transparent_30%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_30px_100px_rgba(0,0,0,0.25)] backdrop-blur-md md:p-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative mx-auto w-full max-w-xs">
            <div className="absolute -inset-5 rounded-[2rem] bg-[#d89aaa]/20 blur-3xl" />

            <Image
              src={ammiCover}
              alt="AMMI book cover"
              className="relative rounded-[1.5rem] shadow-[0_24px_70px_rgba(0,0,0,0.45)]"
            />
          </div>

          <div>
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.45em] text-[#e8b9c9]">
              Loved AMMI?
            </p>

            <h2 className="font-serif text-4xl leading-tight md:text-6xl">
              Leave a review and help more readers discover the story.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#dac5cc] md:text-xl">
              Reviews are one of the most meaningful ways to support an author.
              If AMMI moved you, encouraged you, or stayed with you after the
              final page, your words can help another reader take the journey.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="https://www.goodreads.com/book/show/194981312-ammi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#d89aaa] px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#160b11] transition-all duration-300 hover:-translate-y-1 hover:bg-[#f1bdcb]"
              >
                Review on Goodreads
              </Link>

              <Link
                href="#buy"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                Share the Book
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Buy */}
      <section
        id="buy"
        className="relative flex min-h-[80vh] items-center px-6 py-32 lg:px-10"
      >
        <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.45em] text-[#e8b9c9]">
              Available Now
            </p>

            <h2 className="font-serif text-5xl leading-tight md:text-7xl">
              Choose your edition.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#dac5cc]">
              Read AMMI in ebook, paperback, hardcover, or through Amazon.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {purchaseLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[2rem] border border-white/10 bg-white/5 px-8 py-8 text-center font-serif text-3xl text-[#f7e9ee] transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}