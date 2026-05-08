import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#120b10] px-6 py-8 text-[#dac5cc]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center text-sm tracking-[0.08em] md:flex-row md:text-left">
        <p>
          ©2026 Eiréné Publications. All rights reserved.
        </p>

        <Link
          href="/privacy"
          className="transition-colors duration-300 hover:text-[#f4d7e1]"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  )
}