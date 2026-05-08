import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Erin Biller | Author & Ghostwriter',
  description:
    'Contact Erin Biller for ghostwriting, author support, self-publishing services, speaking, or creative writing projects.',
}

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-[#120b10] text-white">
      <section className="relative flex min-h-screen items-center px-6 py-32 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(216,154,170,0.22),transparent_35%),radial-gradient(circle_at_80%_55%,rgba(255,226,235,0.12),transparent_32%)]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.45em] text-[#e8b9c9]">
              Contact Erin
            </p>

            <h1 className="font-serif text-5xl leading-tight md:text-7xl lg:text-8xl">
              Let’s bring your story to life.
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-[#dac5cc] md:text-2xl">
              Reach out for ghostwriting, self-publishing support, author
              services, or creative writing projects.
            </p>
          </div>

          <form
            action="https://formspree.io/f/xleapnjd"
            method="POST"
            className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-md md:p-8"
          >
            <div className="grid gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm uppercase tracking-[0.22em] text-[#f4d7e1]"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-white/10 bg-white/90 px-5 py-4 text-[#2a151f] outline-none transition focus:border-[#d89aaa] focus:ring-4 focus:ring-[#d89aaa]/20"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm uppercase tracking-[0.22em] text-[#f4d7e1]"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-white/10 bg-white/90 px-5 py-4 text-[#2a151f] outline-none transition focus:border-[#d89aaa] focus:ring-4 focus:ring-[#d89aaa]/20"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm uppercase tracking-[0.22em] text-[#f4d7e1]"
                >
                  Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="w-full rounded-2xl border border-white/10 bg-white/90 px-5 py-4 text-[#2a151f] outline-none transition focus:border-[#d89aaa] focus:ring-4 focus:ring-[#d89aaa]/20"
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="Ghostwriting">Ghostwriting</option>
                  <option value="Self-Publishing Support">
                    Self-Publishing Support
                  </option>
                  <option value="Book Development">Book Development</option>
                  <option value="Speaking or Interview Request">
                    Speaking or Interview Request
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm uppercase tracking-[0.22em] text-[#f4d7e1]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell Erin a little about your project..."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-white/90 px-5 py-4 text-[#2a151f] outline-none transition focus:border-[#d89aaa] focus:ring-4 focus:ring-[#d89aaa]/20"
                />
              </div>

              <button
                type="submit"
                className="mt-2 rounded-full bg-[#d89aaa] px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#160b11] transition-all duration-300 hover:-translate-y-1 hover:bg-[#f1bdcb]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}