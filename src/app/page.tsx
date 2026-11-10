import React from 'react'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import FoundersStory from '@/components/FoundersStory'
import EditorialStory from '@/components/EditorialStory'
import NewsletterSection from '@/components/NewsletterSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="ruh-app min-h-screen flex flex-col bg-[#F0EEE9] text-[#111318]">
      {/* Sticky Luxury Header (Contains Fixed Announcement Bar & Navigation) */}
      <Header />

      {/* Main Storefront Journey */}
      <main className="flex-1">
        {/* 1. Main Hero with Main Campaign Model */}
        <HeroSection />

        {/* 2. Editorial Craft & Textile Provenance (Editorial Dispatch) */}
        <EditorialStory />

        {/* 3. Founder and Co-Founder Story Section */}
        <FoundersStory />

        {/* 4. Partner With Us Section */}
        <NewsletterSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
