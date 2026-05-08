import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Resources | Erin Biller',
  description:
    'Helpful restoration and outreach resources recommended by author and ghostwriter Erin Biller, including Action169 and Bella Daughter.',
}

const resources = [
  {
    title: 'Action169',
    href: 'https://www.action169.com',
    description:
      'Christ-centered prevention, intervention, and restoration care for those impacted by commercial sexual exploitation and substance use.',
  },
  {
    title: 'Bella Daughter',
    href: 'https://www.belladaughter.com',
    description:
      'A survivor-led outreach of Action169, created to love, support, and empower women in the strip club industry to know their intrinsic worth.',
  },
]

export default function ResourcesPage() {
  return (
    <main className="overflow-hidden bg-[#120b10] text-white">
      {/* Hero */}
      <section className="relative flex min-h-screen items-center px-6 py-32 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(216,154,170,0.22),transparent_35%),radial-gradient(circle_at_80%_50%,rgba(255,226,235,0.12),transparent_32%)]" />

        <div className="relative mx-auto max-w-6xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.45em] text-[#e8b9c9]">
            Resources
          </p>

          <h1 className="max-w-5xl font-serif text-5xl leading-tight md:text-7xl lg:text-8xl">
            Hope, restoration, and support for the stories still being written.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-[#dac5cc] md:text-2xl">
            These ministries offer practical care, restoration services, and
            Christ-centered support for women and communities walking through
            pain, exploitation, recovery, and healing.
          </p>
        </div>
      </section>

      {/* Resources */}
      <section className="relative bg-[#fff9fb] px-6 py-32 text-[#2a151f] lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.45em] text-[#b48895]">
              Trusted Support
            </p>

            <h2 className="font-serif text-5xl leading-tight md:text-7xl">
              Places of care,
              <span className="block text-[#9f6374]">
                dignity, and restoration.
              </span>
            </h2>
          </div>

          <div className="grid gap-6">
            {resources.map((resource) => (
              <article
                key={resource.title}
                className="rounded-[2rem] border border-[#ead8dd] bg-white p-8 shadow-[0_20px_60px_rgba(42,21,31,0.07)]"
              >
                <h3 className="font-serif text-3xl text-[#8b5f6d] md:text-4xl">
                  {resource.title}
                </h3>

                <p className="mt-5 text-lg leading-8 text-[#5f4750]">
                  {resource.description}
                </p>

                <Link
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex rounded-full bg-[#8b5f6d] px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#6d4b57]"
                >
                  Visit Website
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative flex min-h-[70vh] items-center px-6 py-32 lg:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.45em] text-[#e8b9c9]">
            Need Help With Your Story?
          </p>

          <h2 className="font-serif text-5xl leading-tight md:text-7xl">
            Erin helps writers shape stories with care, hope, and purpose.
          </h2>

          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-full bg-[#d89aaa] px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#160b11] transition-all duration-300 hover:-translate-y-1 hover:bg-[#f1bdcb]"
          >
            Contact Erin
          </Link>
        </div>
      </section>
    </main>
  )
}
