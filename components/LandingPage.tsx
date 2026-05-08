export default function LandingPage() {

  return (

    <main className="min-h-screen bg-[#120b10]">

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-28 text-center">

        {/* Background Video */}

        <video

          className="absolute inset-0 h-full w-full object-cover"

          src="https://www.pexels.com/download/video/6907166/"

          autoPlay

          muted

          loop

          playsInline

        />

        {/* Dark / Rosy Overlay */}

        <div className="absolute inset-0 bg-gradient-to-b from-[#120b10]/70 via-[#2b1422]/55 to-[#120b10]/90" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,154,173,0.22),transparent_55%)]" />

        {/* Content */}

        <div className="relative z-10 mx-auto max-w-4xl">

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.45em] text-[#e8b9c9]">

            More behind the pen

          </p>

          <h1 className="font-serif text-5xl leading-tight text-white md:text-7xl lg:text-8xl">

            Creating stories that linger

            <span className="block text-[#f4d7e1]">

              long after the last page

            </span>

          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#f7e9ee]/90 md:text-xl">

            Imaginative. Expressive. Storyteller.

          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <a

              href="/contact"

              className="rounded-full bg-[#d89aaa] px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#160b11] shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#f1bdcb]"

            >

              Contact Her for Work

            </a>

            <a

              href="/#about"

              className="rounded-full border border-white/35 px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"

            >

              More About Erin

            </a>

          </div>

        </div>

        {/* Bottom Fade */}

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#120b10] to-transparent" />

      </section>

    </main>

  )

}