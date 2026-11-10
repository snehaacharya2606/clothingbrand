'use client'

import React, { useState } from 'react'
import { ProductSupplyAllocation } from '../../data/dashboardData'

interface Props {
  allocations: ProductSupplyAllocation[]
  formatPrice: (val: number) => string
}

export default function ProcurementSupplyView({ allocations, formatPrice }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState('')

  // Calculate high-level supply metrics
  const totalUnitsOrdered = allocations.reduce((acc, a) => acc + a.totalOrdered, 0)
  const totalUnitsReceived = allocations.reduce((acc, a) => acc + a.totalReceived, 0)
  const overallFulfillmentRate = totalUnitsOrdered > 0 ? ((totalUnitsReceived / totalUnitsOrdered) * 100).toFixed(1) : '0'

  // Extract unique active vendors across all products
  const uniqueVendorsSet = new Set<string>()
  allocations.forEach((a) => {
    a.vendors.forEach((v) => uniqueVendorsSet.add(v.vendorName))
  })
  const totalUniqueVendors = uniqueVendorsSet.size

  const categories = ['All', ...Array.from(new Set(allocations.map((a) => a.category)))]

  const filteredAllocations = allocations.filter((a) => {
    if (selectedCategory !== 'All' && a.category !== selectedCategory) return false
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      const matchesProd = a.productName.toLowerCase().includes(q) || a.sku.toLowerCase().includes(q)
      const matchesVendor = a.vendors.some((v) =>
        v.vendorName.toLowerCase().includes(q) || v.contactPerson.toLowerCase().includes(q)
      )
      return matchesProd || matchesVendor
    }
    return true
  })

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Module Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#111318]/10">
        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#9B7C38] font-bold block mb-1">
            DASHBOARD 2 · SUPPLY CHAIN & ATELIER PROCUREMENT
          </span>
          <h2 className="font-serif text-2xl text-[#111318] font-semibold">Vendor Supply & Product Procurement Matrix</h2>
          <p className="text-xs text-[#5A5D66] font-normal mt-1">
            Track batch units ordered from suppliers, vendor counts, multi-vendor product splits, and direct representative contact information.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="px-3.5 py-1.5 rounded-full bg-white border border-[#9B7C38]/30 text-[11px] font-mono text-[#9B7C38] font-semibold shadow-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#9B7C38] animate-ping" />
            <span>{totalUniqueVendors} Active Ateliers Contracted</span>
          </div>
        </div>
      </div>

      {/* Metric KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 bg-white rounded-2xl border border-[#111318]/8 shadow-sm">
          <span className="text-[11px] uppercase tracking-[0.12em] text-[#6E7380] font-semibold block">Total Units Ordered</span>
          <p className="font-serif text-3xl text-[#111318] font-bold mt-1.5">{totalUnitsOrdered.toLocaleString()} <span className="text-xs font-sans text-[#6E7380] font-normal">Units</span></p>
          <span className="text-[11px] text-[#9B7C38] font-medium mt-1 block">Across {allocations.length} Active Silhouettes</span>
        </div>

        <div className="p-5 bg-emerald-50/70 rounded-2xl border border-emerald-200 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-[0.12em] text-emerald-900 font-bold">Received & Stocked</span>
            <span className="text-[11px] font-mono font-bold text-emerald-800 bg-white px-2 py-0.5 rounded-full border border-emerald-200">
              {overallFulfillmentRate}%
            </span>
          </div>
          <p className="font-serif text-3xl text-emerald-950 font-bold mt-1.5">{totalUnitsReceived.toLocaleString()} <span className="text-xs font-sans text-emerald-800 font-normal">Units</span></p>
          <span className="text-[11px] text-emerald-700 mt-1 block">Quality inspected in warehouse</span>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-[#9B7C38]/25 shadow-sm">
          <span className="text-[11px] uppercase tracking-[0.12em] text-[#9B7C38] font-bold block">Active Mills & Ateliers</span>
          <p className="font-serif text-3xl text-[#111318] font-bold mt-1.5">{totalUniqueVendors} <span className="text-xs font-sans text-[#6E7380] font-normal">Ateliers</span></p>
          <span className="text-[11px] text-[#6E7380] mt-1 block">Tirupur, Surat, Ludhiana & Como</span>
        </div>

        <div className="p-5 bg-amber-50/70 rounded-2xl border border-amber-200 shadow-sm">
          <span className="text-[11px] uppercase tracking-[0.12em] text-amber-900 font-bold block">Pending In-Transit</span>
          <p className="font-serif text-3xl text-amber-950 font-bold mt-1.5">{(totalUnitsOrdered - totalUnitsReceived).toLocaleString()} <span className="text-xs font-sans text-amber-800 font-normal">Units</span></p>
          <span className="text-[11px] text-amber-800 mt-1 block">Scheduled for delivery this month</span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 bg-white rounded-2xl border border-[#111318]/8 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        <div className="relative flex-1">
          <svg className="w-4 h-4 text-[#8C887F] absolute left-3.5 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by silhouette, SKU, vendor name, or representative..."
            className="w-full pl-10 pr-4 py-2.5 bg-[#FAF8F5] rounded-xl border border-[#111318]/12 text-xs text-[#111318] placeholder-[#8C887F] outline-none focus:bg-white focus:border-[#9B7C38] transition-colors"
          />
        </div>

        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-[10px] uppercase tracking-wider text-[#6E7380] font-bold mr-1">Category:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#111318] text-[#F0EEE9] shadow-sm'
                  : 'bg-[#FAF8F5] text-[#5A5D66] hover:bg-white hover:text-[#111318] border border-[#111318]/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product-to-Vendor Matrix Cards */}
      <div className="space-y-4">
        {filteredAllocations.map((alloc) => {
          const completionPct = alloc.totalOrdered > 0 ? Math.round((alloc.totalReceived / alloc.totalOrdered) * 100) : 0
          const hasMultipleVendors = alloc.vendors.length > 1

          return (
            <div
              key={alloc.productId}
              className="p-6 bg-white rounded-2xl border border-[#111318]/8 hover:border-[#9B7C38]/40 shadow-sm hover:shadow-md transition-all space-y-4"
            >
              {/* Product Header & Progress */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#111318]/8">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] uppercase tracking-[0.16em] px-2.5 py-0.5 rounded-full bg-[#FAF3E0] text-[#9B7C38] font-bold border border-[#9B7C38]/30">
                      {alloc.category}
                    </span>
                    <span className="text-[11px] text-[#6E7380] font-mono">{alloc.sku}</span>
                    {hasMultipleVendors && (
                      <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200 font-bold">
                        {alloc.vendors.length} Vendors Split
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif text-xl text-[#111318] font-semibold mt-1">{alloc.productName}</h3>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <span className="text-[11px] text-[#6E7380] block font-mono">
                      Received {alloc.totalReceived} of {alloc.totalOrdered} units
                    </span>
                    <span className="font-mono text-sm text-[#9B7C38] font-bold">{completionPct}% Fulfilled</span>
                  </div>
                  <div className="w-28 bg-[#FAF8F5] h-2.5 rounded-full overflow-hidden border border-[#111318]/10">
                    <div
                      className="bg-[#9B7C38] h-full rounded-full transition-all duration-500"
                      style={{ width: `${completionPct}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Vendors List: Lists all vendors for this product with units and contact details */}
              <div>
                <span className="text-[10px] uppercase tracking-[0.16em] text-[#6E7380] font-bold block mb-3">
                  ASSIGNED ATELIERS & VENDOR SPLIT ({alloc.vendors.length} {alloc.vendors.length === 1 ? 'SUPPLIER' : 'SUPPLIERS'})
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {alloc.vendors.map((v, vIdx) => (
                    <div
                      key={vIdx}
                      className="p-4 bg-[#FAF8F5] rounded-xl border border-[#111318]/8 space-y-3 flex flex-col justify-between"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="font-serif text-base text-[#111318] font-semibold">{v.vendorName}</h4>
                          <p className="text-xs text-[#5A5D66] font-mono mt-0.5">
                            Contact: <span className="text-[#111318] font-medium font-sans">{v.contactPerson}</span>
                          </p>
                        </div>

                        {/* Status Badge */}
                        <span
                          className={`text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full font-bold border ${
                            v.status === 'Delivered to BOM'
                              ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                              : v.status === 'Quality Inspection'
                              ? 'bg-[#FAF3E0] text-[#9B7C38] border-[#9B7C38]/40'
                              : 'bg-blue-100 text-blue-800 border-blue-300'
                          }`}
                        >
                          ● {v.status}
                        </span>
                      </div>

                      {/* Units & Pricing Breakdown */}
                      <div className="grid grid-cols-2 gap-2 p-2.5 bg-white rounded-lg border border-[#111318]/8 text-xs">
                        <div>
                          <span className="text-[10px] uppercase text-[#6E7380] font-bold block">Units Contracted</span>
                          <span className="font-mono text-sm text-[#111318] font-bold">{v.unitsAllocated} Units</span>
                        </div>
                        <div>
                          <span className="text-[10px] uppercase text-[#6E7380] font-bold block">Agreed Unit Cost</span>
                          <span className="font-mono text-sm text-[#9B7C38] font-bold">{formatPrice(v.unitCost)}</span>
                        </div>
                      </div>

                      {/* Vendor Contact Actions */}
                      <div className="pt-2 border-t border-[#111318]/8 flex items-center justify-between text-xs">
                        <span className="text-[#5A5D66] font-mono text-[11px]">{v.phone}</span>
                        <div className="flex items-center gap-2">
                          <a
                            href={`mailto:${v.email}?subject=PO Inquiry: ${alloc.sku} ${alloc.productName}`}
                            className="px-3 py-1 rounded-lg bg-white hover:bg-[#111318] hover:text-[#F0EEE9] text-[#111318] text-xs font-semibold transition-colors border border-[#111318]/15 shadow-sm"
                          >
                            ✉ Email Rep
                          </a>
                          <a
                            href={`https://wa.me/${v.phone.replace(/[^0-9]/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors shadow-sm"
                          >
                            WhatsApp
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
