'use client'
// import Image from 'next/image'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'


// OPTIONAL:
// Replace with your own logo import
import logo from '@/assets/images/logo.png'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Books', href: '/books' },
  { label: 'About', href: '/#about' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? 'bg-white/85 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.05)] border-b border-[#f2e7ea]'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 transition-opacity duration-300 hover:opacity-80"
          >
            {/* OPTIONAL IMAGE LOGO */}
       
            {/* <Image
              src={logo}
              alt="Logo"
              width={42}
              height={42}
              className="rounded-full object-cover"
            />
         */}

            <div className="flex flex-col leading-none">
              <span
                className={`font-serif text-2xl tracking-[0.12em] transition-colors duration-300 ${
                  scrolled ? 'text-[#6d4b57]' : 'text-white'
                }`}
              >
                Author Erin Biller
              </span>

              <span
                className={`mt-1 text-[10px] uppercase tracking-[0.35em] transition-colors duration-300 ${
                  scrolled ? 'text-[#b48895]' : 'text-[#f5dfe5]'
                }`}
              >
                Author • Ghostwriter
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`relative text-sm uppercase tracking-[0.2em] transition-all duration-300 after:absolute after:left-0 after:bottom-[-8px] after:h-[1px] after:w-0 after:transition-all after:duration-300 hover:after:w-full ${
                  scrolled
                    ? 'text-[#6d4b57] after:bg-[#b48895]'
                    : 'text-white after:bg-white'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* CTA */}
            <Link
              href="/books"
              className={`rounded-full px-6 py-3 text-sm uppercase tracking-[0.2em] transition-all duration-300 ${
                scrolled
                  ? 'bg-[#b48895] text-white hover:bg-[#9f7381]'
                  : 'bg-white text-[#8b5f6d] hover:bg-[#f7e8ed]'
              }`}
            >
              Shop Books
            </Link>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`flex items-center justify-center lg:hidden ${
              scrolled ? 'text-[#6d4b57]' : 'text-white'
            }`}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#fff9fb] transition-all duration-500 lg:hidden ${
          mobileOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-2xl uppercase tracking-[0.25em] text-[#6d4b57] transition-opacity duration-300 hover:opacity-60"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="#shop"
            onClick={() => setMobileOpen(false)}
            className="mt-6 rounded-full bg-[#b48895] px-8 py-4 text-sm uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#9f7381]"
          >
            Shop Books
          </Link>
        </div>
      </div>
    </>
  )
}