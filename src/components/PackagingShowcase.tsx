import React from 'react'

export default function PackagingShowcase() {
  return (
    <section
      id="packaging"
      className="w-full bg-[#F0EEE9] py-10 sm:py-16 lg:py-24 px-4 sm:px-8 border-b border-[#111318]/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A56B]" />
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#C6A56B] font-semibold">
              04 / THE UNBOXING EXPERIENCE
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#111318] font-normal mb-3">
            Packaging & Stationery
          </h2>
          <p className="text-[13px] sm:text-[14px] text-[#111318]/70 leading-relaxed font-light">
            A coherent packaging system extends the brand experience from the first impression through delivery and repeat rotation.
          </p>
        </div>

        {/* 3 Packaging Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Rigid Box & Bag */}
          <div className="bg-[#EAE6DE] p-8 rounded-2xl border border-[#111318]/10 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-full bg-[#111318] flex items-center justify-center mb-6">
                <span className="text-[#C6A56B] text-lg font-serif">M</span>
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C6A56B] font-semibold block mb-1">
                STRUCTURE · 01
              </span>
              <h3 className="font-serif text-xl text-[#111318] mb-3">
                Midnight Black Rigid Box
              </h3>
              <p className="text-[13px] text-[#111318]/70 leading-relaxed font-light">
                Constructed from 100% recycled rigid board with a tactile matte finish. Stamped with our subtle Champagne Gold foil wordmark. Designed to be reused for seasonal wardrobe storage.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#111318]/10 text-[11px] font-mono text-[#111318]/60">
              FSC-Certified · 100% Recyclable
            </div>
          </div>

          {/* Card 2: Warm Ivory Tissue & Sticker */}
          <div className="bg-[#EAE6DE] p-8 rounded-2xl border border-[#111318]/10 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-full bg-[#F0EEE9] border border-[#111318]/15 flex items-center justify-center mb-6">
                <span className="text-[#111318] text-lg font-serif">R</span>
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C6A56B] font-semibold block mb-1">
                TACTILITY · 02
              </span>
              <h3 className="font-serif text-xl text-[#111318] mb-3">
                Warm Ivory Tissue & Seals
              </h3>
              <p className="text-[13px] text-[#111318]/70 leading-relaxed font-light">
                Uncoated Warm Ivory tissue paper watermarked with a repeating micro-monogram. Sealed by hand using a single-color debossed wax seal in Midnight Black.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#111318]/10 text-[11px] font-mono text-[#111318]/60">
              Acid-free archival tissue paper
            </div>
          </div>

          {/* Card 3: Thank-You & Care Dispatch */}
          <div className="bg-[#EAE6DE] p-8 rounded-2xl border border-[#111318]/10 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-full bg-[#C6A56B] flex items-center justify-center mb-6">
                <span className="text-[#111318] text-sm font-semibold tracking-wider">EST</span>
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C6A56B] font-semibold block mb-1">
                DISPATCH · 03
              </span>
              <h3 className="font-serif text-xl text-[#111318] mb-3">
                Letterpress Care Dispatch
              </h3>
              <p className="text-[13px] text-[#111318]/70 leading-relaxed font-light">
                Printed on 450 GSM cotton stock. Features verified fiber provenance, lifetime garment repair instructions, and a dedicated personal styling concierge contact.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#111318]/10 text-[11px] font-mono text-[#111318]/60">
              450 GSM Cotton Rag Letterpress
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

