'use client'

import React, { useState } from 'react'

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return
    const encoded = encodeURIComponent(`Hello RŪH Concierge, I have an inquiry regarding: ${message}`)
    window.open(`https://wa.me/919845012345?text=${encoded}`, '_blank')
    setMessage('')
    setIsOpen(false)
  }

  return (
    <aside aria-label="Customer Support Concierge" className="fixed bottom-6 right-6 z-40">
      {/* Expanded Concierge Drawer */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 bg-[#F0EEE9] text-[#111318] p-5 rounded-2xl shadow-2xl border border-[#C6A56B] mb-2 animate-fadeIn z-50">
          <div className="flex items-center justify-between pb-3 border-b border-[#111318]/10 mb-4">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <div>
                <h4 className="font-serif text-sm font-semibold text-[#111318]">
                  RŪH Client Concierge
                </h4>
                <span className="text-[10px] text-[#C6A56B] uppercase tracking-wider block">
                  Live via WhatsApp (India)
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-[#111318]/60 hover:text-[#111318] text-xs p-1 cursor-pointer"
            >
              ✕
            </button>
          </div>

          <p className="text-[12px] leading-relaxed text-[#111318]/75 mb-4 font-light">
            Need guidance with fabric hand-feel, bespoke sizing measurements, or Delhivery express transit status? Our studio team is online.
          </p>

          {/* Quick Prompts */}
          <div className="space-y-1.5 mb-4">
            {[
              'Need size recommendation for Overcoat',
              'Check Delhivery delivery status',
              'Inquire about corporate GST invoice',
            ].map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => setMessage(q)}
                className="w-full text-left p-2.5 bg-white/70 hover:bg-white text-[11px] text-[#111318] rounded-xl border border-[#111318]/10 transition-colors cursor-pointer"
              >
                &ldquo;{q}&rdquo;
              </button>
            ))}
          </div>

          {/* Chat Form */}
          <form onSubmit={handleSend} className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your inquiry..."
              className="flex-1 bg-white rounded-full border border-[#111318]/25 px-3.5 py-2 text-xs focus:outline-none focus:border-[#C6A56B]"
            />
            <button
              type="submit"
              className="ruh-btn-primary py-2 px-4 text-[10px]"
            >
              Send
            </button>
          </form>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 bg-[#111318] text-[#F0EEE9] hover:bg-[#1E212A] px-5 py-3 rounded-full shadow-2xl border border-[#C6A56B]/40 transition-all cursor-pointer group"
        aria-label="Open WhatsApp Concierge"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 group-hover:scale-110 transition-transform" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em]">
          WhatsApp
        </span>
      </button>
    </aside>
  )
}

