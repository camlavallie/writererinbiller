import Image from 'next/image'
import erinbiller from '@/assets/images/erinbiller.png'

const services = [
  'Ghostwriting',
  'Book Development',
  'Self-Publishing Support',
]

export default function About() {
  return (
    <section id="about" className="overflow-hidden bg-[#120b10] text-white">
      {/* Ghostwriting */}
      <section className="relative flex min-h-screen items-center px-6 py-32 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(216,154,170,0.2),transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.45em] text-[#e8b9c9]">
              Ghostwriting
            </p>

            <h2 className="font-serif text-5xl leading-tight md:text-7xl">
              Your story.
              <span className="block text-[#f4d7e1]">Her writing.</span>
              Your name.
            </h2>
          </div>

          <div className="self-end">
            <p className="text-xl leading-9 text-[#f7e9ee]/90 md:text-2xl">
              Erin helps transform your ideas, experiences, and message into
              polished writing that still sounds like you.
            </p>

            <p className="mt-6 text-lg leading-8 text-[#dac5cc]">
              Whether it’s a book, article, speech, or story-driven project,
              she works behind the scenes while your voice and vision stay at
              the center.
            </p>

            <a
              href="/contact"
              className="mt-10 inline-flex rounded-full bg-[#d89aaa] px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#160b11] transition-all duration-300 hover:-translate-y-1 hover:bg-[#f1bdcb]"
            >
              Let’s Talk
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative flex min-h-[85vh] items-center bg-[#fff9fb] px-6 py-32 text-[#2a151f] lg:px-10">
        <div className="mx-auto grid w-full max-w-7xl gap-16 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.45em] text-[#b48895]">
              My Services
            </p>

            <h2 className="font-serif text-5xl leading-tight md:text-7xl">
              Clear support for bringing your book to life.
            </h2>
          </div>

          <div className="grid gap-5 self-center">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-[2rem] border border-[#ead8dd] bg-white px-8 py-7 text-2xl font-serif text-[#8b5f6d] shadow-[0_20px_60px_rgba(42,21,31,0.06)]"
              >
                {service}
              </div>
            ))}

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#5f4750]">
              From shaping the manuscript to navigating the details of
              self-publishing, Erin brings calm, creative guidance to the
              process.
            </p>
          </div>
        </div>
      </section>

      {/* Why Erin */}
      <section className="relative flex min-h-screen items-center px-6 py-32 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_40%,rgba(255,226,235,0.12),transparent_32%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1fr]">
          <div className="order-2 lg:order-1">
            <p className="text-xl leading-9 text-[#f7e9ee]/90 md:text-2xl">
              A good ghostwriter does more than write. She listens, organizes,
              clarifies, and helps your story feel honest on the page.
            </p>

            <p className="mt-6 text-lg leading-8 text-[#dac5cc]">
              Erin brings warmth, imagination, and care to every project —
              helping your message become something readers can truly carry.
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.45em] text-[#e8b9c9]">
              Why Work With Erin
            </p>

            <h2 className="font-serif text-5xl leading-tight md:text-7xl">
              Your voice,
              <span className="block text-[#f4d7e1]">shaped with care.</span>
            </h2>

            <a
              href="/contact"
              className="mt-10 inline-flex rounded-full bg-[#d89aaa] px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#160b11] transition-all duration-300 hover:-translate-y-1 hover:bg-[#f1bdcb]"
            >
              Contact Erin
            </a>
          </div>
        </div>
      </section>

      {/* Meet Erin */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-[#fff9fb] px-6 py-32 text-[#2a151f] lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(216,154,170,0.12),transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Image */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-[#d89aaa]/20 blur-3xl" />

            <Image
              src={erinbiller}
              alt="Author Erin Biller"
              className="relative rounded-[2.5rem] object-cover shadow-[0_30px_80px_rgba(0,0,0,0.18)]"
              priority
            />
          </div>

          {/* Content */}
<div>
  <p className="mb-6 text-sm font-bold uppercase tracking-[0.45em] text-[#b48895]">
    Meet Erin Biller
  </p>

  <h2 className="font-serif text-5xl leading-tight md:text-7xl">
    Author.
    <span className="block text-[#9f6374]">Ghostwriter.</span>
    Storyteller.
  </h2>

  <p className="mt-10 max-w-2xl text-xl leading-9 text-[#5f4750] md:text-2xl">
    Erin Biller is a devoted lover of Jesus, wife, mother, musician,
    songwriter, author, and Kingdom storyteller.
  </p>

  <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f4750]">
    Through fiction, ghostwriting, and creative collaboration, she
    helps shape meaningful stories marked by honesty, beauty, hope,
    and eternity.
  </p>

  {/* Social + CTA */}
  <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
    <a
      href="https://www.instagram.com/authorerinbiller/"
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center justify-center rounded-full border border-[#dfbcc7] bg-white px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#8b5f6d] shadow-[0_16px_50px_rgba(42,21,31,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d89aaa] hover:bg-[#fff5f8]"
    >
      <span className="mr-2 text-base transition-transform duration-300 group-hover:scale-110">
        ✦
      </span>
      Follow @authorerinbiller
    </a>

    <a
      href="/contact"
      className="inline-flex items-center justify-center rounded-full bg-[#8b5f6d] px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#6d4b57]"
    >
      Work With Erin
    </a>
  </div>
</div>
        </div>
      </section>
    </section>
  )
}