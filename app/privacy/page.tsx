import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Erin Biller',
  description:
    'Read the privacy notice for Erin Biller and eiréné publications, including how contact form information and personal data are handled.',
  alternates: {
    canonical: '/privacy',
  },
}

const rights = [
  'Request access to your personal data',
  'Request correction of your personal data',
  'Request deletion of your personal data',
  'Request restriction of processing',
  'Object to processing of your data',
]

export default function PrivacyPage() {
  return (
    <main className="overflow-hidden bg-[#120b10] text-white">
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center px-6 py-32 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(216,154,170,0.22),transparent_35%),radial-gradient(circle_at_80%_50%,rgba(255,226,235,0.1),transparent_32%)]" />

        <div className="relative mx-auto max-w-5xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.45em] text-[#e8b9c9]">
            Privacy Notice
          </p>

          <h1 className="font-serif text-5xl leading-tight md:text-7xl">
            eiréné publications Privacy Notice
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-[#dac5cc]">
            eiréné publications is committed to respecting your privacy and
            protecting your personal data.
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="bg-[#fff9fb] px-6 py-24 text-[#2a151f] lg:px-10">
        <div className="mx-auto max-w-4xl space-y-14">
          <article>
            <h2 className="font-serif text-4xl text-[#8b5f6d]">
              Data Controller
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#5f4750]">
              eiréné publications is responsible for processing your personal
              data in relation to your use of this website. Questions about the
              processing of your personal data may be sent through the contact
              page.
            </p>
          </article>

          <article>
            <h2 className="font-serif text-4xl text-[#8b5f6d]">
              Data We Collect and How We Use It
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#5f4750]">
              When you contact Erin through the website, we may collect personal
              data such as your name, email address, message content, and any
              other information you choose to provide.
            </p>

            <p className="mt-5 text-lg leading-8 text-[#5f4750]">
              This information is used to evaluate inquiries, manage
              correspondence, and respond to messages. The legal basis for this
              processing is the legitimate interest of managing contact channels
              and responding to inquiries.
            </p>
          </article>

          <article>
            <h2 className="font-serif text-4xl text-[#8b5f6d]">
              Contact Form and Formspree
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#5f4750]">
              This website may use an integrated contact form powered by
              Formspree, Inc. When you use the form, Formspree may receive and
              process additional data related to your use of the website and the
              form, such as IP address, browser type, domain names, access
              times, and referring website addresses.
            </p>

            <p className="mt-5 text-lg leading-8 text-[#5f4750]">
              By using the contact form, you acknowledge that Formspree may
              process this information according to its own privacy practices.
            </p>
          </article>

          <article>
            <h2 className="font-serif text-4xl text-[#8b5f6d]">
              Who May Access Your Data
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#5f4750]">
              Personal data may be disclosed to public authorities if required
              by law or in response to a lawful request.
            </p>

            <p className="mt-5 text-lg leading-8 text-[#5f4750]">
              When you use the integrated contact form or browse the website,
              data may be transferred to or accessed by Formspree, Inc., 21750
              Hardy Oak Blvd, San Antonio, TX 78258, USA.
            </p>
          </article>

          <article>
            <h2 className="font-serif text-4xl text-[#8b5f6d]">
              How Long We Store Your Data
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#5f4750]">
              When you provide personal data through the contact page or by
              email, that data, including the content of your inquiry, may be
              stored until the inquiry is fully resolved and for an additional
              90-day period.
            </p>

            <p className="mt-5 text-lg leading-8 text-[#5f4750]">
              Statistical data may be kept for analysis for up to three years.
              Cookie validity depends on the type of cookies used and may range
              from short-term cookies to cookies valid for up to 24 months.
            </p>

            <p className="mt-5 text-lg leading-8 text-[#5f4750]">
              Information may be stored longer when needed to comply with legal
              obligations or protect legitimate interests.
            </p>
          </article>

          <article>
            <h2 className="font-serif text-4xl text-[#8b5f6d]">
              Your Rights
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#5f4750]">
              You may contact eiréné publications at any time to request to
              exercise your rights as a data subject.
            </p>

            <div className="mt-7 grid gap-4">
              {rights.map((right) => (
                <div
                  key={right}
                  className="rounded-2xl border border-[#ead8dd] bg-white px-6 py-5 text-lg text-[#5f4750] shadow-[0_12px_40px_rgba(42,21,31,0.05)]"
                >
                  {right}
                </div>
              ))}
            </div>

            <p className="mt-7 text-lg leading-8 text-[#5f4750]">
              In some cases, requests may not be granted if doing so would cause
              harm, infringe upon lawful orders, or conflict with overriding
              legitimate interests.
            </p>
          </article>

          <article>
            <h2 className="font-serif text-4xl text-[#8b5f6d]">
              Changes to This Notice
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#5f4750]">
              This Privacy Notice may be updated periodically to reflect changes
              in privacy practices, partners, or how eiréné publications
              operates in the field of data protection.
            </p>
          </article>

          <div className="pt-8">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-[#8b5f6d] px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#6d4b57]"
            >
              Contact Erin
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}