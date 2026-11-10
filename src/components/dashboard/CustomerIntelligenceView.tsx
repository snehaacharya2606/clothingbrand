'use client'

import React, { useState, useMemo } from 'react'
import { CustomerPurchaseRecord } from '../../data/dashboardData'

interface Props {
  customers: CustomerPurchaseRecord[]
  formatPrice: (val: number) => string
}

export default function CustomerIntelligenceView({ customers, formatPrice }: Props) {
  const [filterDisposition, setFilterDisposition] = useState<'All' | 'Kept' | 'Returned' | 'Exchanged'>('All')
  const [filterRating, setFilterRating] = useState<number | 'All'>('All')
  const [searchQuery, setSearchQuery] = useState('')

  // Metrics
  const totalCustomers = customers.length
  const keptCount = customers.filter((c) => c.disposition === 'Kept').length
  const returnedCount = customers.filter((c) => c.disposition === 'Returned').length
  const exchangedCount = customers.filter((c) => c.disposition === 'Exchanged').length

  const keptRate = totalCustomers > 0 ? ((keptCount / totalCustomers) * 100).toFixed(1) : '0'
  const returnedRate = totalCustomers > 0 ? ((returnedCount / totalCustomers) * 100).toFixed(1) : '0'
  const exchangedRate = totalCustomers > 0 ? ((exchangedCount / totalCustomers) * 100).toFixed(1) : '0'

  const totalReviews = customers.filter((c) => c.review).length
  const avgRating =
    totalReviews > 0
      ? (customers.reduce((acc, c) => acc + (c.review?.rating || 0), 0) / totalReviews).toFixed(1)
      : '5.0'

  // Filtered List
  const filteredCustomers = useMemo(() => {
    return customers.filter((c) => {
      if (filterDisposition !== 'All' && c.disposition !== filterDisposition) return false
      if (filterRating !== 'All' && c.review?.rating !== filterRating) return false
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase()
        const matchesName = c.customerName.toLowerCase().includes(q)
        const matchesEmail = c.email.toLowerCase().includes(q)
        const matchesCity = c.city.toLowerCase().includes(q)
        const matchesProduct = c.itemsBought.some((item) => item.name.toLowerCase().includes(q))
        return matchesName || matchesEmail || matchesCity || matchesProduct
      }
      return true
    })
  }, [customers, filterDisposition, filterRating, searchQuery])

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Module Title & Subtitle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#111318]/10">
        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#9B7C38] font-bold block mb-1">
            DASHBOARD 1 · CUSTOMER INTELLIGENCE & REVIEWS
          </span>
          <h2 className="font-serif text-2xl text-[#111318] font-semibold">Customer Orders & Garment Status</h2>
          <p className="text-xs text-[#5A5D66] font-normal mt-1">
            Live telemetry of user purchases, garment disposition status (Kept, Exchanged, or Returned), and verified customer reviews.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="px-3.5 py-1.5 rounded-full bg-white border border-[#9B7C38]/30 text-[11px] font-mono text-[#9B7C38] font-semibold shadow-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{totalCustomers} Verified Buyers Active</span>
          </div>
        </div>
      </div>

      {/* Metric KPI Cards (Clean, readable, website theme) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="p-5 bg-white rounded-2xl border border-[#111318]/8 shadow-sm">
          <span className="text-[11px] uppercase tracking-[0.12em] text-[#6E7380] font-semibold block">Total Clients</span>
          <p className="font-serif text-3xl text-[#111318] font-bold mt-1.5">{totalCustomers}</p>
          <span className="text-[11px] text-emerald-700 font-medium mt-1 block">100% Verified Order Volume</span>
        </div>

        <div className="p-5 bg-emerald-50/70 rounded-2xl border border-emerald-200 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-[0.12em] text-emerald-900 font-bold">Kept Garments</span>
            <span className="text-[11px] font-mono font-bold text-emerald-800 bg-white px-2 py-0.5 rounded-full border border-emerald-200">
              {keptRate}%
            </span>
          </div>
          <p className="font-serif text-3xl text-emerald-950 font-bold mt-1.5">{keptCount}</p>
          <span className="text-[11px] text-emerald-700 mt-1 block">Retained with zero dispute</span>
        </div>

        <div className="p-5 bg-blue-50/70 rounded-2xl border border-blue-200 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-[0.12em] text-blue-900 font-bold">Exchanged</span>
            <span className="text-[11px] font-mono font-bold text-blue-800 bg-white px-2 py-0.5 rounded-full border border-blue-200">
              {exchangedRate}%
            </span>
          </div>
          <p className="font-serif text-3xl text-blue-950 font-bold mt-1.5">{exchangedCount}</p>
          <span className="text-[11px] text-blue-700 mt-1 block">Size or silhouette swaps</span>
        </div>

        <div className="p-5 bg-amber-50/80 rounded-2xl border border-amber-200 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-[0.12em] text-amber-900 font-bold">Returned</span>
            <span className="text-[11px] font-mono font-bold text-amber-800 bg-white px-2 py-0.5 rounded-full border border-amber-200">
              {returnedRate}%
            </span>
          </div>
          <p className="font-serif text-3xl text-amber-950 font-bold mt-1.5">{returnedCount}</p>
          <span className="text-[11px] text-amber-800 mt-1 block">Processed & refunded</span>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-[#9B7C38]/25 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-[0.12em] text-[#9B7C38] font-bold">Customer CSAT</span>
            <span className="text-xs text-[#C6A56B]">★ ★ ★ ★ ★</span>
          </div>
          <p className="font-serif text-3xl text-[#111318] font-bold mt-1.5">
            {avgRating} <span className="text-xs font-sans text-[#8C887F] font-normal">/ 5.0</span>
          </p>
          <span className="text-[11px] text-[#6E7380] mt-1 block">From {totalReviews} client reviews</span>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="p-4 bg-white rounded-2xl border border-[#111318]/8 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Search */}
        <div className="relative flex-1">
          <svg className="w-4 h-4 text-[#8C887F] absolute left-3.5 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by client name, email, city, or silhouette..."
            className="w-full pl-10 pr-4 py-2.5 bg-[#FAF8F5] rounded-xl border border-[#111318]/12 text-xs text-[#111318] placeholder-[#8C887F] outline-none focus:bg-white focus:border-[#9B7C38] transition-colors"
          />
        </div>

        {/* Disposition Filter Pills */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-[10px] uppercase tracking-wider text-[#6E7380] font-bold mr-1">Status:</span>
          {(['All', 'Kept', 'Exchanged', 'Returned'] as const).map((disp) => (
            <button
              key={disp}
              type="button"
              onClick={() => setFilterDisposition(disp)}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${
                filterDisposition === disp
                  ? 'bg-[#111318] text-[#F0EEE9] shadow-sm'
                  : 'bg-[#FAF8F5] text-[#5A5D66] hover:bg-white hover:text-[#111318] border border-[#111318]/10'
              }`}
            >
              {disp}
            </button>
          ))}
        </div>

        {/* Rating Filter */}
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] uppercase tracking-wider text-[#6E7380] font-bold mr-1">Rating:</span>
          {(['All', 5, 4] as const).map((r) => (
            <button
              key={r.toString()}
              type="button"
              onClick={() => setFilterRating(r)}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-mono font-semibold transition-all cursor-pointer ${
                filterRating === r
                  ? 'bg-[#9B7C38] text-white shadow-sm'
                  : 'bg-[#FAF8F5] text-[#5A5D66] hover:bg-white border border-[#111318]/10'
              }`}
            >
              {r === 'All' ? 'All' : `${r} ★`}
            </button>
          ))}
        </div>
      </div>

      {/* Customer Record Cards */}
      <div className="space-y-4">
        {filteredCustomers.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-2xl border border-[#111318]/8 text-xs text-[#6E7380]">
            No customer disposition records match the active search or status filters.
          </div>
        ) : (
          filteredCustomers.map((cust) => (
            <div
              key={cust.id}
              className="p-6 bg-white rounded-2xl border border-[#111318]/8 hover:border-[#9B7C38]/40 shadow-sm hover:shadow-md transition-all space-y-4"
            >
              {/* Header row: Customer & Order Metadata */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#111318]/8">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#FAF3E0] text-[#9B7C38] font-bold text-xs flex items-center justify-center border border-[#9B7C38]/30 flex-shrink-0 shadow-sm">
                    {cust.customerName.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-serif text-lg text-[#111318] font-semibold">{cust.customerName}</h4>
                      <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold">
                        Verified Buyer
                      </span>
                    </div>
                    <p className="text-xs text-[#5A5D66] font-mono mt-0.5">
                      {cust.email} · {cust.phone} · <span className="font-sans font-medium text-[#111318]">{cust.city}, {cust.state}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <span className="text-[11px] text-[#6E7380] block font-mono">{cust.orderId} · {cust.orderDate}</span>
                    <span className="font-serif text-base text-[#9B7C38] font-bold">{formatPrice(cust.totalSpend)}</span>
                  </div>

                  {/* Disposition Badge */}
                  <span
                    className={`px-3.5 py-1.5 rounded-full text-[11px] uppercase tracking-[0.12em] font-bold border shadow-sm ${
                      cust.disposition === 'Kept'
                        ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
                        : cust.disposition === 'Exchanged'
                        ? 'bg-blue-100 text-blue-900 border-blue-300'
                        : 'bg-amber-100 text-amber-900 border-amber-300'
                    }`}
                  >
                    ● {cust.disposition}
                  </span>
                </div>
              </div>

              {/* Items Bought Row */}
              <div>
                <span className="text-[10px] uppercase tracking-[0.16em] text-[#6E7380] font-bold block mb-2">
                  Garments Purchased ({cust.itemsBought.length} {cust.itemsBought.length === 1 ? 'Piece' : 'Pieces'})
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {cust.itemsBought.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[#FAF8F5] rounded-xl border border-[#111318]/6 flex items-center justify-between text-xs"
                    >
                      <div className="min-w-0 pr-2">
                        <p className="font-medium text-[13px] text-[#111318] truncate">{item.name}</p>
                        <p className="text-[11px] text-[#5A5D66] mt-0.5 font-mono">
                          Size: <span className="text-[#9B7C38] font-bold">{item.size}</span> · Color: {item.color} · Qty: {item.quantity}
                        </p>
                      </div>
                      <span className="font-mono text-xs font-semibold text-[#111318] flex-shrink-0">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Disposition Operational Notes */}
              {cust.dispositionNotes && (
                <div className="p-3.5 bg-[#FAF8F5] rounded-xl border border-[#111318]/8 flex items-start gap-2.5 text-xs">
                  <span className="text-[#9B7C38] font-bold text-[11px] uppercase tracking-wider flex-shrink-0 mt-0.5">
                    Order Note:
                  </span>
                  <p className="text-[#4A4D55] leading-relaxed">{cust.dispositionNotes}</p>
                </div>
              )}

              {/* Verified Product Review Card */}
              {cust.review && (
                <div className="p-4 bg-[#FAF6EC] rounded-xl border border-[#9B7C38]/25 space-y-1.5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[#C6A56B] text-sm">
                        {'★'.repeat(cust.review.rating)}
                        {'☆'.repeat(5 - cust.review.rating)}
                      </span>
                      <span className="text-xs font-bold text-[#111318]">{cust.review.title}</span>
                    </div>
                    <span className="text-[11px] text-[#6E7380] font-mono">{cust.review.date}</span>
                  </div>
                  <p className="text-xs text-[#2D3139] italic font-serif leading-relaxed">
                    &ldquo;{cust.review.comment}&rdquo;
                  </p>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  )
}
