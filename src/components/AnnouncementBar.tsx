'use client'

import React, { useState } from 'react'
import { useShop } from '../context/ShopContext'

export default function AnnouncementBar() {
  const { currency, setCurrency } = useShop()
  const [showTooltip, setShowTooltip] = useState(false)
  const [copiedCode, setCopiedCode] = useState(false)

  const handleCopyCode = () => {
    navigator.clipboard.writeText('RUHWELCOMESYOU25')
    setCopiedCode(true)
    setTimeout(() => setCopiedCode(false), 2000)
  }

  return (
    <aside
      aria-label="Announcement"
      className="w-full bg-[#111318] text-[#F0EEE9] text-[10px] sm:text-[11px] uppercase tracking-[0.06em] sm:tracking-[0.12em] py-1.5 sm:py-2 px-3 sm:px-8 border-b border-[#C6A56B]/25"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        {/* Center: Exact Announcement Banner per User Wireframe Sketch */}
        <div className="flex-1 flex flex-wrap items-center justify-center text-center font-medium leading-relaxed">
          <span className="text-[#F0EEE9]/90">
            Welcome Offer Upto 25% Off OR Upto 200/- Off. Use &nbsp;
          </span>

          <button
            type="button"
            onClick={handleCopyCode}
            title="Click to copy coupon code"
            className="mx-1.5 px-2 py-0.5 rounded bg-[#C6A56B]/20 hover:bg-[#C6A56B]/30 text-[#C6A56B] font-bold border border-[#C6A56B]/40 transition-colors cursor-pointer"
          >
            {copiedCode ? 'COPIED!' : 'RUHWELCOMESYOU25'}
          </button> &nbsp;&nbsp;

          {/* (i) Information Hover Pill with Tooltip */}
          <div
            className="relative inline-flex items-center"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <button
              type="button"
              onClick={() => setShowTooltip((prev) => !prev)}
              aria-label="Welcome offer terms"
              className="w-4 h-4 rounded-full border border-[#C6A56B]/60 text-[#C6A56B] hover:bg-[#C6A56B] hover:text-[#111318] flex items-center justify-center text-[10px] font-bold transition-all ml-0.5 cursor-pointer"
            >
              i
            </button>

            {/* Hover Tooltip matching user wireframe sketch exactly */}
            {showTooltip && (
              <div
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 10px)',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#111318',
                  color: '#F0EEE9',
                  border: '1px solid #C6A56B',
                  borderRadius: '10px',
                  padding: '10px 16px',
                  boxShadow: '0 12px 30px rgba(0, 0, 0, 0.65)',
                  zIndex: 9999,
                  width: 'max-content',
                  minWidth: '190px',
                  whiteSpace: 'nowrap',
                  textAlign: 'left',
                  textTransform: 'none',
                  letterSpacing: 'normal',
                }}
              >
                {/* Upward pointing caret arrow anchoring to the (i) icon */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-5px',
                    left: '50%',
                    transform: 'translateX(-50%) rotate(45deg)',
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#111318',
                    borderTop: '1px solid #C6A56B',
                    borderLeft: '1px solid #C6A56B',
                  }}
                />

                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', color: '#F0EEE9', fontWeight: 500 }}>
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#C6A56B', flexShrink: 0 }} />
                    <span>FCFS Basis</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', color: '#F0EEE9', fontWeight: 500 }}>
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#C6A56B', flexShrink: 0 }} />
                    <span>For First 25 customers</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', color: '#F0EEE9', fontWeight: 500 }}>
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#C6A56B', flexShrink: 0 }} />
                    <span>Limited Offer</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  )
}
