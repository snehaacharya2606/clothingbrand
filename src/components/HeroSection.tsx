'use client'

import React, { useState } from 'react'

const CAMPAIGNS = [
  {
    kicker: 'EDITION 01 / PERMANENT COLLECTION',
    headline: 'Wear with\nintention.',
    subtext: 'A curated wardrobe balancing pop-culture nostalgia, heavyweight Japanese textiles, and architectural drape. Built for everyday luxury.',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1800&auto=format&fit=crop',
    alt: 'RŪH Main Campaign Model',
    tag: 'THE FOUNDATION UNIFORM',
    fabric: '280 GSM Dense Combed Cotton',
  },
  {
    kicker: 'ANIME & RETRO CINEMA ARCHIVE',
    headline: 'Nostalgia,\nelevated.',
    subtext: 'From Attack on Titan and Jujutsu Kaisen to vintage 90s cinema. Wearable art screenprinted on dense, bio-washed loopback jersey.',
    image: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=1800&auto=format&fit=crop',
    alt: 'Anime and Cinema Archive Look',
    tag: 'GRAPHIC ARCHIVE CAPSULE',
    fabric: 'Hand-Distressed Vintage Washes',
  },
  {
    kicker: 'TAILORED STREETWEAR ESSENTIALS',
    headline: 'Less, but\nbetter.',
    subtext: 'Each silhouette is pre-shrunk, constructed with tubular knit bodies and thick ribbed collars that never curl after wash.',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1800&auto=format&fit=crop',
    alt: 'Streetwear Model Silhouette',
    tag: 'THE BOXY FOUNDATION CUT',
    fabric: 'Bio-Washed Natural Fiber',
  },
]

export default function HeroSection() {
  const [activeIdx, setActiveIdx] = useState(0)
  const current = CAMPAIGNS[activeIdx]

  return (
    <section className="relative w-full bg-[#F0EEE9] overflow-hidden border-b border-[#111318]/10">
      {/* Main Model Hero Billboard */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Editorial Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Kicker tag */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6A56B]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C6A56B]">
                {current.kicker}
              </span>
            </div>

            {/* Headline in Global Font (DM Sans) */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-[#111318] whitespace-pre-line tracking-tight mb-6">
              {current.headline}
            </h1>

            {/* Subtext in Global Font (DM Sans) */}
            <p className="text-[14px] sm:text-[15px] leading-[1.65] text-[#111318]/75 max-w-md mb-8">
              {current.subtext}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="/products"
                className="ruh-btn-primary"
              >
                Explore T-Shirts Drop
              </a>
              <a
                href="#founders-story"
                className="ruh-btn-secondary"
              >
                Founders Story
              </a>
            </div>

          </div>

          {/* Right Hero Image Card (Main Model) - Hidden on mobile per user specification */}
          <div className="hidden lg:block lg:col-span-7">
            <div className="relative aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/4.8] w-full bg-[#111318]/5 overflow-hidden rounded-2xl shadow-2xl border border-[#111318]/10 group">
              <img
                src={current.image}
                alt={current.alt}
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-102"
              />
              {/* Subtle Warm Luxury Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111318]/70 via-transparent to-transparent pointer-events-none" />

              {/* Inset Label / Coordinates */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-[#F0EEE9] pointer-events-none">
                <div>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#C6A56B] block mb-1">
                    RŪH ARCHIVE · MAIN MODEL
                  </span>
                  <p className="font-serif text-lg sm:text-xl font-normal">
                    {current.tag}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
