'use client'

import React, { useState } from 'react'

export default function NewsletterSection() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contact.ruh@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section
      id="partner"
      className="w-full bg-[#111318] text-[#F0EEE9] py-12 sm:py-20 lg:py-28 px-4 sm:px-8 border-b border-[#C6A56B]/20"
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center">
        {/* Kicker tag - Centered */}
        <div className="inline-flex items-center justify-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C6A56B]" />
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#C6A56B] font-semibold">
            COLLABORATION & PARTNERSHIPS
          </span>
        </div>

        {/* Headline - Centered */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#F0EEE9] font-normal tracking-tight mb-5 text-center">
          Want to partner with us?
        </h2>

        {/* Description - Centered */}
        <p className="text-[14px] sm:text-[16px] leading-[1.8] text-[#F0EEE9]/80 font-light max-w-2xl mx-auto text-center">
          Whether you are a retail stockist, mill artisan, pop-culture creator, or boutique collaborator — we would love to connect. Write to us on{' '}
          <a
            href="mailto:contact.ruh@gmail.com"
            className="text-[#C6A56B] underline underline-offset-4 hover:text-[#DFC99B] font-medium transition-colors"
          >
            contact.ruh@gmail.com
          </a>
        </p>

        {/* Subtle one-click copy pill */}
        <div className="mt-8 flex items-center justify-center">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1D24] hover:bg-white hover:text-[#111318] border border-[#F0EEE9]/15 text-xs text-[#F0EEE9] font-medium transition-all shadow-sm cursor-pointer"
          >
            <svg className="w-3.5 h-3.5 text-[#C6A56B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
            </svg>
            <span>{copied ? '✓ Copied to clipboard!' : 'Copy contact.ruh@gmail.com'}</span>
          </button>
        </div>
      </div>
    </section>
  )
}

