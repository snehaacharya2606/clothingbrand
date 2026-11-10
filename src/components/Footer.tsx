'use client'

import React from 'react'
import Link from 'next/link'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      className="w-full bg-[#111318] text-[#F0EEE9] border-t border-[#C6A56B]/25 py-10 sm:py-16 px-4 sm:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main 4-Column Grid with Generous, Breathable Spacing Between Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-12 mb-14 sm:mb-16">
          {/* Column 1: Brand Logo & Tagline */}
          <div className="space-y-3 sm:space-y-4">
            <Link href="/" className="inline-block">
              <img
                src="/logo.png"
                alt="RŪH"
                className="h-9 sm:h-10 w-auto object-contain brightness-110"
              />
            </Link>
            <p className="text-sm sm:text-base text-[#F0EEE9]/85 font-light tracking-wide leading-relaxed">
              The shape of your spirit.
            </p>
          </div>

          {/* Column 2: KNOW MORE */}
          <div>
            <h4 className="text-[16px] uppercase tracking-[0.2em] text-[#C6A56B] font-bold mb-4 sm:mb-5">
              KNOW MORE
            </h4>
            <ul className="space-y-3.5 sm:space-y-3 text-xs sm:text-[13px] text-[#F0EEE9]/75 font-light">
              <li>
                <Link
                  href="/founders-story"
                  className="block py-0.5 hover:text-[#F0EEE9] hover:underline underline-offset-4 transition-colors"
                >
                  About RŪH
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => alert('Terms & Conditions: Standard atelier commissions, verified logistics, and consumer guarantees apply across India.')}
                  className="block py-0.5 hover:text-[#F0EEE9] hover:underline underline-offset-4 transition-colors text-left cursor-pointer"
                >
                  Terms and Conditions
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => alert('Privacy Policy: Customer data is confidential. We do not sell or share client registries.')}
                  className="block py-0.5 hover:text-[#F0EEE9] hover:underline underline-offset-4 transition-colors text-left cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <a
                  href="/#partner"
                  className="block py-0.5 text-[#C6A56B] hover:text-[#DFC99B] font-medium hover:underline underline-offset-4 transition-colors"
                >
                  Partner With Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: HELP & SUPPORT */}
          <div>
            <h4 className="text-[16px] uppercase tracking-[0.2em] text-[#C6A56B] font-bold mb-4 sm:mb-5">
              HELP &amp; SUPPORT
            </h4>
            <ul className="space-y-3.5 sm:space-y-3 text-xs sm:text-[13px] text-[#F0EEE9]/75 font-light">
              <li>
                <Link
                  href="/orders"
                  className="block py-0.5 hover:text-[#F0EEE9] hover:underline underline-offset-4 transition-colors"
                >
                  Track Order
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => alert('Shipping & Delivery: Complimentary air dispatch on all orders over ₹2,500 via Delhivery Air.')}
                  className="block py-0.5 hover:text-[#F0EEE9] hover:underline underline-offset-4 transition-colors text-left cursor-pointer"
                >
                  Shipping &amp; Delivery
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => alert('Returns & Exchange: 7-day hassle-free reverse doorstep pickup across India for unworn items.')}
                  className="block py-0.5 hover:text-[#F0EEE9] hover:underline underline-offset-4 transition-colors text-left cursor-pointer"
                >
                  Returns &amp; Exchange
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: CONTACT US (Insta, Gmail, WhatsApp Logos) */}
          <div>
            <h4 className="text-[16px] uppercase tracking-[0.2em] text-[#C6A56B] font-bold mb-4 sm:mb-5">
              CONTACT US
            </h4>
            <p className="text-xs sm:text-[13px] text-[#F0EEE9]/70 mb-4 sm:mb-5 font-light leading-relaxed">
              Reach the studio directly for styling notes, orders, or bespoke commissions:
            </p>

            <div className="flex items-center gap-3.5 sm:gap-3">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                title="Instagram: @ruh.clothing"
                className="w-11 h-11 sm:w-10 sm:h-10 rounded-full bg-[#1A1D24] hover:bg-[#C6A56B] hover:text-[#111318] border border-[#F0EEE9]/15 flex items-center justify-center transition-all shadow-sm group cursor-pointer"
              >
                <svg className="w-4 h-4 text-[#F0EEE9] group-hover:text-[#111318] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Gmail (contact.ruh@gmail.com) */}
              <a
                href="mailto:contact.ruh@gmail.com"
                title="Gmail: contact.ruh@gmail.com"
                className="w-11 h-11 sm:w-10 sm:h-10 rounded-full bg-[#1A1D24] hover:bg-[#C6A56B] hover:text-[#111318] border border-[#F0EEE9]/15 flex items-center justify-center transition-all shadow-sm group cursor-pointer"
              >
                <svg className="w-4 h-4 text-[#F0EEE9] group-hover:text-[#111318] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919845012345"
                target="_blank"
                rel="noreferrer"
                title="WhatsApp Concierge: +91 98450 12345"
                className="w-11 h-11 sm:w-10 sm:h-10 rounded-full bg-[#1A1D24] hover:bg-emerald-600 hover:text-white border border-[#F0EEE9]/15 flex items-center justify-center transition-all shadow-sm group cursor-pointer"
              >
                <svg className="w-4 h-4 text-[#F0EEE9] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
            </div>

            <div className="mt-5 pt-3 border-t border-[#F0EEE9]/10 text-[11px] text-[#F0EEE9]/60">
              Direct Mail:{' '}
              <a href="mailto:contact.ruh@gmail.com" className="text-[#C6A56B] underline font-medium">
                contact.ruh@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Rule: EXACTLY MATCHING USER SKETCH */}
        <div className="pt-8 border-t border-[#F0EEE9]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F0EEE9]/60">
          <p className="tracking-widest font-semibold uppercase text-[11px] text-center sm:text-left">
            © 2026 RŪH. ALL RIGHTS RESERVED.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="text-[#F0EEE9] hover:text-[#C6A56B] flex items-center gap-1.5 transition-colors cursor-pointer text-[10px] uppercase tracking-[0.14em]"
          >
            <span>Back to Top</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  )
}
