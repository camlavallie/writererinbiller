import Link from 'next/link'

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen items-center justify-center overflow-hidden bg-[#120b10] px-6 text-white">
      <div className="relative mx-auto max-w-3xl text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(216,154,170,0.18),transparent_60%)]" />

        <div className="relative">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.45em] text-[#e8b9c9]">
            Message Sent
          </p>

          <h1 className="font-serif text-5xl leading-tight md:text-7xl">
            Thank you for reaching out.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-xl leading-9 text-[#dac5cc]">
            Erin has received your message and will get back to you as soon as
            possible.
          </p>

          <Link
            href="/"
            className="mt-10 inline-flex rounded-full bg-[#d89aaa] px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#160b11] transition-all duration-300 hover:-translate-y-1 hover:bg-[#f1bdcb]"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  )
}