import React from 'react'

export default function EditorialStory() {
  return (
    <section
      id="editorial"
      className="w-full bg-[#111318] text-[#F0EEE9] border-b border-[#C6A56B]/20 overflow-hidden py-12 sm:py-20 lg:py-28 px-4 sm:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* =================================================================
              EDITORIAL LOOKBOOK IMAGE & MATERIAL CALLOUT
              Mobile: Streamlined, perfectly proportioned frame (no collision)
              Desktop: Full aspect-[3/4] portrait with floating detail card
              ================================================================= */}
          <div className="lg:col-span-6 relative">
            {/* Main Lookbook Visual */}
            <div className="relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl border border-[#C6A56B]/25">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop"
                alt="Editorial fabric & tailoring - Less but better"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111318]/90 via-[#111318]/25 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-[#F0EEE9]">
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#C6A56B] block font-semibold mb-0.5">
                  EDITION 01 LOOKBOOK
                </span>
                <p className="text-base sm:text-lg text-[#F0EEE9] font-medium leading-snug">
                  Architectural Drape &amp; Structure
                </p>
              </div>
            </div>
          </div>

          {/* =================================================================
              NARRATIVE COLUMN (OPTIMIZED FOR MOBILE LEGIBILITY & DESKTOP GRANDEUR)
              ================================================================= */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6A56B]" />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#C6A56B] font-semibold">
                EDITORIAL DISPATCH
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal leading-tight text-[#F0EEE9] mb-4 sm:mb-6">
              Less, but better.
            </h2>

            {/* Body Copy */}
            <div className="space-y-3 sm:space-y-4 text-[13px] sm:text-[15px] leading-[1.7] text-[#F0EEE9]/80 font-light max-w-xl mb-6">
              <p>
                In a fashion landscape driven by disposable trends and artificial novelty, RŪH was founded upon an uncompromising premise: wardrobe foundations should outlive the seasons they were introduced in.
              </p>
              <p>
                We do not produce seasonal collections that obsolete earlier purchases. Every garment—from our 280 GSM heavyweight jersey tee to our hand-finished Biella wool overcoat—is designed as an interchangeable building block of modern personal style.
              </p>
            </div>

            {/* Spec Columns (Clean Vertical Stack on Mobile, 2 Columns on Tablet/Desktop) */}
            <div
              style={{
                borderTop: '1px solid rgba(240, 238, 233, 0.12)',
              }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-5 sm:pt-6"
            >
              <div>
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#C6A56B] font-semibold block mb-1">
                  TACTILE RESTRAINT
                </span>
                <p className="text-[11px] sm:text-[12px] text-[#F0EEE9]/70 leading-relaxed font-light">
                  Natural white balance, honest skin texture, and tactile fabrics that improve with age.
                </p>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#C6A56B] font-semibold block mb-1">
                  PRECISE FORMS
                </span>
                <p className="text-[11px] sm:text-[12px] text-[#F0EEE9]/70 leading-relaxed font-light">
                  Drop shoulders, architectural straight legs, and comfortable line proportions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
