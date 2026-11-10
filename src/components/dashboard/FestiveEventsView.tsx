'use client'

import React, { useState } from 'react'
import { FestiveEvent, EventOrder } from '../../data/dashboardData'

interface Props {
  events: FestiveEvent[]
  eventOrders: EventOrder[]
  formatPrice: (val: number) => string
  onCreateEvent: (event: FestiveEvent) => void
}

export default function FestiveEventsView({ events, eventOrders, formatPrice, onCreateEvent }: Props) {
  const [selectedEventId, setSelectedEventId] = useState<string>(events[0]?.id || '')
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

  // Form state for creating a new event
  const [formName, setFormName] = useState('')
  const [formTagline, setFormTagline] = useState('')
  const [formCode, setFormCode] = useState('')
  const [formDiscountValue, setFormDiscountValue] = useState('20')
  const [formMinOrder, setFormMinOrder] = useState('20000')
  const [formGift, setFormGift] = useState('Archival Cedar Scent Tablet & Linen Dust Bag')
  const [formStartDate, setFormStartDate] = useState('Nov 15, 2026')
  const [formEndDate, setFormEndDate] = useState('Nov 30, 2026')

  const currentEvent = events.find((e) => e.id === selectedEventId) || events[0]
  const currentOrders = eventOrders.filter((o) => o.eventId === currentEvent?.id)

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formName.trim() || !formCode.trim()) return

    const newEvent: FestiveEvent = {
      id: `event-${Date.now()}`,
      name: formName.trim(),
      tagline: formTagline.trim() || 'Exclusive seasonal archive activation.',
      promoCode: formCode.trim().toUpperCase(),
      discountType: 'percentage',
      discountValue: Number(formDiscountValue),
      minOrderValue: Number(formMinOrder),
      giftInclusion: formGift.trim(),
      startDate: formStartDate,
      endDate: formEndDate,
      status: 'Active',
      totalOrdersCount: 0,
      totalGrossRevenue: 0,
      totalDiscountAbsorbed: 0,
      bannerActive: true
    }

    onCreateEvent(newEvent)
    setSelectedEventId(newEvent.id)
    setIsCreateModalOpen(false)

    // Reset Form
    setFormName('')
    setFormTagline('')
    setFormCode('')
  }

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Module Title & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#111318]/10">
        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#9B7C38] font-bold block mb-1">
            CAMPAIGN TELEMETRY & FESTIVE ACTIVATIONS
          </span>
          <h2 className="font-serif text-2xl text-[#111318] font-semibold">Seasonal Events & Promotional Bought Orders</h2>
          <p className="text-xs text-[#5A5D66] font-normal mt-1">
            Track customer purchases bought under specific event campaigns (e.g. Diwali Offer) with orders and gift inclusions.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsCreateModalOpen(true)}
            className="px-5 py-2.5 rounded-xl bg-[#111318] hover:bg-[#252830] text-[#F0EEE9] text-xs font-semibold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md transition-all"
          >
            <span>+ Create New Event Campaign</span>
          </button>
        </div>
      </div>

      {/* Event Switcher Tabs */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-[11px] uppercase tracking-wider text-[#6E7380] font-bold mr-1">Active Events:</span>
        {events.map((ev) => (
          <button
            key={ev.id}
            type="button"
            onClick={() => setSelectedEventId(ev.id)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 border ${
              selectedEventId === ev.id
                ? 'bg-[#111318] text-[#F0EEE9] border-[#111318] shadow-sm'
                : 'bg-white text-[#5A5D66] hover:text-[#111318] border-[#111318]/10'
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                ev.status === 'Active' ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'
              }`}
            />
            <span>{ev.name}</span>
            <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full font-bold ${
              selectedEventId === ev.id ? 'bg-[#C6A56B] text-[#111318]' : 'bg-[#FAF8F5] text-[#9B7C38] border border-[#9B7C38]/20'
            }`}>
              {ev.promoCode}
            </span>
          </button>
        ))}
      </div>

      {/* =====================================================================
          CURRENT EVENT HIGHLIGHT BILLBOARD
          ===================================================================== */}
      {currentEvent && (
        <div className="p-6 sm:p-8 bg-gradient-to-r from-white via-[#FAF8F5] to-[#FAF6EE] rounded-2xl border border-[#9B7C38]/30 space-y-6 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="px-3 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-bold bg-[#FAF3E0] text-[#9B7C38] border border-[#9B7C38]/30">
                  ● {currentEvent.status} FESTIVE CAMPAIGN
                </span>
                <span className="text-xs font-mono text-[#6E7380]">
                  {currentEvent.startDate} — {currentEvent.endDate}
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#111318] font-bold">{currentEvent.name}</h3>
              <p className="text-xs text-[#5A5D66] max-w-xl leading-relaxed">{currentEvent.tagline}</p>
            </div>

            {/* Offer Callout Badge */}
            <div className="p-5 bg-white rounded-2xl border border-[#9B7C38]/30 text-center space-y-1.5 flex-shrink-0 shadow-md">
              <span className="text-[10px] uppercase tracking-widest text-[#9B7C38] font-bold block">
                ACTIVE PROMO CODE
              </span>
              <p className="font-mono text-2xl font-bold tracking-widest text-[#111318] px-4 py-1.5 bg-[#FAF8F5] rounded-xl border border-[#9B7C38]/25">
                {currentEvent.promoCode}
              </p>
              <span className="text-xs text-emerald-700 block font-bold">
                {currentEvent.discountValue}% OFF orders over {formatPrice(currentEvent.minOrderValue)}
              </span>
            </div>
          </div>

          {/* Complimentary Gift Perk Callout */}
          <div className="p-3.5 bg-white rounded-xl border border-[#9B7C38]/20 flex items-center gap-3 text-xs shadow-sm">
            <span className="w-8 h-8 rounded-full bg-[#FAF3E0] text-[#9B7C38] flex items-center justify-center font-bold text-base border border-[#9B7C38]/30">
              🎁
            </span>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#9B7C38] font-bold">Event Gift Bundle:</span>
              <p className="text-[#2D3139] font-medium">{currentEvent.giftInclusion}</p>
            </div>
          </div>

          {/* Telemetry Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            <div className="p-4 bg-white rounded-xl border border-[#111318]/8 shadow-sm">
              <span className="text-[10px] uppercase text-[#6E7380] font-semibold block">Event Orders Placed</span>
              <p className="font-serif text-2xl text-[#111318] font-bold mt-1">
                {currentOrders.length > 0 ? currentOrders.length : currentEvent.totalOrdersCount}{' '}
                <span className="text-xs font-sans text-[#6E7380] font-normal">Orders</span>
              </p>
            </div>

            <div className="p-4 bg-emerald-50/70 rounded-xl border border-emerald-200 shadow-sm">
              <span className="text-[10px] uppercase text-emerald-900 font-bold block">Gross Event Sales</span>
              <p className="font-serif text-2xl text-emerald-950 font-bold mt-1">
                {formatPrice(
                  currentOrders.length > 0
                    ? currentOrders.reduce((sum, o) => sum + o.grossTotal, 0)
                    : currentEvent.totalGrossRevenue
                )}
              </p>
            </div>

            <div className="p-4 bg-amber-50/70 rounded-xl border border-amber-200 shadow-sm">
              <span className="text-[10px] uppercase text-amber-900 font-bold block">Discount Distributed</span>
              <p className="font-serif text-2xl text-amber-950 font-bold mt-1">
                -{formatPrice(
                  currentOrders.length > 0
                    ? currentOrders.reduce((sum, o) => sum + o.discountTotal, 0)
                    : currentEvent.totalDiscountAbsorbed
                )}
              </p>
            </div>

            <div className="p-4 bg-white rounded-xl border border-[#9B7C38]/25 shadow-sm">
              <span className="text-[10px] uppercase text-[#9B7C38] font-bold block">Net Realized Cash</span>
              <p className="font-serif text-2xl text-[#9B7C38] font-bold mt-1">
                {formatPrice(
                  currentOrders.length > 0
                    ? currentOrders.reduce((sum, o) => sum + o.netTotal, 0)
                    : currentEvent.totalGrossRevenue - currentEvent.totalDiscountAbsorbed
                )}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          EVENT BOUGHT ORDERS DASHBOARD TABLE
          ===================================================================== */}
      <div className="bg-white rounded-2xl border border-[#111318]/8 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-[#111318]/8 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-[0.16em] text-[#9B7C38] font-bold">
                BOUGHT DASHBOARD · {currentEvent?.name.toUpperCase()}
              </span>
              <span className="text-[9px] uppercase px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-mono font-bold">
                {currentOrders.length} Orders Redeemed
              </span>
            </div>
            <p className="text-xs text-[#5A5D66] mt-0.5">
              Comprehensive list of all customer orders bought under the {currentEvent?.promoCode} offer.
            </p>
          </div>

          <span className="text-xs font-mono font-semibold text-[#111318] bg-[#FAF8F5] px-3 py-1 rounded-full border border-[#111318]/8">
            Min Order Threshold: {formatPrice(currentEvent?.minOrderValue || 0)}
          </span>
        </div>

        {currentOrders.length === 0 ? (
          <div className="p-12 text-center text-xs text-[#6E7380]">
            No orders have been placed under this campaign yet. Orders using code {currentEvent?.promoCode} will automatically appear here.
          </div>
        ) : (
          <div className="divide-y divide-[#111318]/6">
            {currentOrders.map((ord) => (
              <div key={ord.id} className="p-5 hover:bg-[#FAF8F5] transition-colors space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#9B7C38]">{ord.orderId}</span>
                    <span className="text-sm text-[#111318] font-semibold">{ord.customerName}</span>
                    <span className="text-xs text-[#6E7380] font-mono">({ord.customerCity})</span>
                  </div>

                  <div className="flex items-center gap-3 text-xs">
                    <span className="text-xs text-[#6E7380] font-mono">{ord.date}</span>
                    <span
                      className={`px-3 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-bold border ${
                        ord.orderStatus === 'Delivered'
                          ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                          : ord.orderStatus === 'Dispatched'
                          ? 'bg-[#FAF3E0] text-[#9B7C38] border-[#9B7C38]/40'
                          : 'bg-blue-100 text-blue-800 border-blue-300'
                      }`}
                    >
                      ● {ord.orderStatus}
                    </span>
                  </div>
                </div>

                {/* Items Purchased with Event Offer */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {ord.items.map((it, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[#FAF8F5] rounded-xl border border-[#111318]/6 flex items-center justify-between"
                    >
                      <div>
                        <p className="font-medium text-[13px] text-[#111318]">{it.name}</p>
                        <p className="text-[11px] text-[#5A5D66] font-mono">
                          Size: <span className="font-bold text-[#9B7C38]">{it.size}</span> · Color: {it.color} · Qty: {it.quantity}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-[#8C887F] line-through block font-mono">
                          {formatPrice(it.originalPrice)}
                        </span>
                        <span className="font-mono text-xs text-emerald-800 font-bold">
                          {formatPrice(it.discountedPrice)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer Breakdown & Gift Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 border-t border-[#111318]/6 text-xs">
                  {ord.giftIncluded ? (
                    <div className="flex items-center gap-1.5 text-emerald-800 text-xs font-semibold">
                      <span>✓</span>
                      <span>Complimentary Archival Cedar Hanger & Travel Bag Included</span>
                    </div>
                  ) : (
                    <div />
                  )}

                  <div className="flex items-center gap-4 text-xs font-mono">
                    <span className="text-[#6E7380]">
                      Gross: <span className="line-through">{formatPrice(ord.grossTotal)}</span>
                    </span>
                    <span className="text-amber-800 font-semibold">
                      Offer: -{formatPrice(ord.discountTotal)} ({ord.promoCode})
                    </span>
                    <span className="text-sm font-bold text-[#9B7C38]">
                      Paid: {formatPrice(ord.netTotal)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* =====================================================================
          CREATE NEW FESTIVE EVENT MODAL
          ===================================================================== */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-xl bg-white border border-[#111318]/12 rounded-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto space-y-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-[#111318]/10">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#9B7C38] font-bold block mb-1">
                  CAMPAIGN CONFIGURATION
                </span>
                <h3 className="font-serif text-xl text-[#111318] font-semibold">Schedule New Festive Event Offer</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsCreateModalOpen(false)}
                className="w-8 h-8 rounded-full bg-[#FAF8F5] hover:bg-[#111318] hover:text-white text-[#111318] flex items-center justify-center transition-colors cursor-pointer text-xs"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateSubmit} className="space-y-4 text-xs">
              <div>
                <label className="text-[11px] uppercase tracking-wider text-[#111318]/70 font-semibold block mb-1">
                  Event Campaign Title *
                </label>
                <input
                  type="text"
                  required
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="e.g. New Year Archive Drop 2027"
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#111318]/15 rounded-xl text-[#111318] outline-none focus:bg-white focus:border-[#9B7C38]"
                />
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-wider text-[#111318]/70 font-semibold block mb-1">
                  Editorial Tagline
                </label>
                <input
                  type="text"
                  value={formTagline}
                  onChange={(e) => setFormTagline(e.target.value)}
                  placeholder="e.g. Architectural heavyweight streetwear engineered with intentional restraint."
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#111318]/15 rounded-xl text-[#111318] outline-none focus:bg-white focus:border-[#9B7C38]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#111318]/70 font-semibold block mb-1">
                    Promo Code *
                  </label>
                  <input
                    type="text"
                    required
                    value={formCode}
                    onChange={(e) => setFormCode(e.target.value.toUpperCase())}
                    placeholder="e.g. NEWYEAR25"
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#111318]/15 rounded-xl text-[#111318] outline-none focus:bg-white focus:border-[#9B7C38] font-mono font-bold"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#111318]/70 font-semibold block mb-1">
                    Discount % *
                  </label>
                  <input
                    type="number"
                    required
                    value={formDiscountValue}
                    onChange={(e) => setFormDiscountValue(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#111318]/15 rounded-xl text-[#111318] outline-none focus:bg-white focus:border-[#9B7C38] font-mono"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#111318]/70 font-semibold block mb-1">
                    Min Order Value (₹) *
                  </label>
                  <input
                    type="number"
                    required
                    value={formMinOrder}
                    onChange={(e) => setFormMinOrder(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#111318]/15 rounded-xl text-[#111318] outline-none focus:bg-white focus:border-[#9B7C38] font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-wider text-[#111318]/70 font-semibold block mb-1">
                  Complimentary Gift Inclusion Perk
                </label>
                <input
                  type="text"
                  value={formGift}
                  onChange={(e) => setFormGift(e.target.value)}
                  placeholder="e.g. Archival Brass Diya Set & Organic Cotton Tote Bag"
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#111318]/15 rounded-xl text-[#111318] outline-none focus:bg-white focus:border-[#9B7C38]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#111318]/70 font-semibold block mb-1">
                    Start Date
                  </label>
                  <input
                    type="text"
                    value={formStartDate}
                    onChange={(e) => setFormStartDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#111318]/15 rounded-xl text-[#111318] outline-none focus:bg-white focus:border-[#9B7C38]"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#111318]/70 font-semibold block mb-1">
                    End Date
                  </label>
                  <input
                    type="text"
                    value={formEndDate}
                    onChange={(e) => setFormEndDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#111318]/15 rounded-xl text-[#111318] outline-none focus:bg-white focus:border-[#9B7C38]"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-[#111318]/10 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsCreateModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-[#5A5D66] hover:bg-[#FAF8F5] text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#111318] hover:bg-[#252830] text-[#F0EEE9] text-xs font-semibold uppercase tracking-wider shadow-sm"
                >
                  Schedule Campaign
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
