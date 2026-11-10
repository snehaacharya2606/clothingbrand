'use client'

import React from 'react'
import Header from '@/components/Header'
import FoundersStory from '@/components/FoundersStory'
import EditorialStory from '@/components/EditorialStory'
import PackagingShowcase from '@/components/PackagingShowcase'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function FoundersStoryPage() {
  return (
    <div className="ruh-app min-h-screen flex flex-col bg-[#F0EEE9] text-[#111318]">
      <Header />
      <main className="flex-1">
        {/* Editorial Top Hero */}
        <section className="py-16 sm:py-24 px-4 sm:px-8 border-b border-[#111318]/10 text-center max-w-4xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#9B7C38] font-bold block mb-3">
            FOUNDERS · ORIGIN ARCHIVE
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#111318] leading-tight font-medium mb-5">
            Architectural Weight.<br />Intentional Restraint.
          </h1>
          <p className="text-sm sm:text-base text-[#5A5D66] font-light max-w-2xl mx-auto leading-relaxed">
            Founded in 2026 by Sneha Acharya and Kunal Vishwakarma. Born from a shared frustration with disposable streetwear that twists, shrinks, and thins after two washes.
          </p>
        </section>

        {/* Founder & Co-Founder Story Component */}
        <FoundersStory />

        {/* Craft & Packaging Stationery */}
        <EditorialStory />
        <PackagingShowcase />

        {/* Bottom CTA */}
        <section className="py-16 bg-white border-t border-[#111318]/8 text-center px-4">
          <div className="max-w-xl mx-auto space-y-4">
            <h3 className="font-serif text-2xl text-[#111318]">Experience The 280 GSM Standard</h3>
            <p className="text-xs text-[#5A5D66] leading-relaxed">
              Explore our permanent collection of heavyweight anime, K-drama, retro Bollywood, and cartoon streetwear silhouettes.
            </p>
            <div className="pt-2">
              <Link
                href="/products"
                className="inline-block px-8 py-3.5 rounded-full bg-[#111318] hover:bg-[#252830] text-[#F0EEE9] text-xs font-semibold uppercase tracking-widest shadow-md transition-all"
              >
                Explore T-Shirt Archive →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

