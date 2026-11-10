'use client'

import React, { useState } from 'react'
import { useShop } from '../context/ShopContext'

export default function AuthModal() {
  const { isAuthOpen, setIsAuthOpen, login } = useShop()
  const [phone, setPhone] = useState('+91 98450 12345')
  const [step, setStep] = useState<'input' | 'otp'>('input')
  const [otp, setOtp] = useState('')

  if (!isAuthOpen) return null

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault()
    if (phone.trim()) {
      setStep('otp')
    }
  }

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault()
    login(phone)
    setStep('input')
  }

  const handleGoogleLogin = () => {
    login('client.google@ruh.in')
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#111318]/70 backdrop-blur-sm transition-opacity"
        onClick={() => setIsAuthOpen(false)}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-[#F0EEE9] text-[#111318] p-8 rounded-2xl shadow-2xl border border-[#C6A56B]/40 z-10">
        <button
          type="button"
          onClick={() => setIsAuthOpen(false)}
          className="absolute top-4 right-4 text-[#111318]/60 hover:text-[#111318] text-sm cursor-pointer"
        >
          ✕
        </button>

        <div className="text-center mb-6">
          <div className="w-10 h-10 rounded-full bg-[#111318] text-[#C6A56B] flex items-center justify-center mx-auto mb-2 text-sm font-serif">
            R
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#C6A56B] font-semibold block mb-1">
            CLIENT IDENTITY
          </span>
          <h3 className="font-serif text-2xl text-[#111318]">
            {step === 'input' ? 'Sign In to RŪH' : 'Verify Dispatch Code'}
          </h3>
          <p className="text-xs text-[#111318]/65 mt-1 font-light">
            {step === 'input'
              ? 'Passwordless access via WhatsApp or SMS OTP'
              : `Enter the 4-digit code dispatched to ${phone}`}
          </p>
        </div>

        {step === 'input' ? (
          <div className="space-y-4">
            <form onSubmit={handleSendOtp} className="space-y-3">
              <div>
                <label className="text-[10px] uppercase tracking-wider text-[#111318]/70 block mb-1 font-semibold">
                  Mobile Number (India)
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full bg-white rounded-full border border-[#111318]/25 px-4 py-2.5 text-xs font-mono focus:outline-none focus:border-[#C6A56B]"
                />
              </div>

              <button
                type="submit"
                className="w-full ruh-btn-primary py-3 text-[11px]"
              >
                Dispatch OTP via WhatsApp / SMS
              </button>
            </form>

            <div className="relative py-2 flex items-center justify-center">
              <span className="absolute inset-0 flex items-center"><span className="w-full border-t border-[#111318]/15" /></span>
              <span className="relative bg-[#F0EEE9] px-3 text-[10px] text-[#111318]/50 uppercase tracking-widest">or</span>
            </div>

            {/* Google One-Tap Simulation */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full ruh-btn-secondary py-2.5 px-4 text-[11px] bg-white flex items-center justify-center gap-2.5 shadow-sm"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span>Continue with Google One-Tap</span>
            </button>
          </div>
        ) : (
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <div>
              <input
                type="text"
                autoFocus
                maxLength={4}
                required
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="4-Digit Code (e.g. 2026)"
                className="w-full text-center bg-white rounded-full border border-[#111318]/25 px-4 py-3 text-lg tracking-[0.5em] font-mono focus:outline-none focus:border-[#C6A56B]"
              />
              <span className="text-[10px] text-[#111318]/50 text-center block mt-1.5">
                Tip: Enter any 4-digit code (e.g. 2026) to test
              </span>
            </div>

            <button
              type="submit"
              className="w-full ruh-btn-primary py-3 text-[11px]"
            >
              Verify Code & Enter
            </button>

            <button
              type="button"
              onClick={() => setStep('input')}
              className="w-full text-[10px] uppercase tracking-wider text-[#111318]/60 hover:text-[#111318] cursor-pointer"
            >
              ← Edit Phone Number
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

