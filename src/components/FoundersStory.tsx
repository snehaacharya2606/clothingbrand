'use client'

import React from 'react'

export default function FoundersStory() {
  return (
    <section
      id="founders-story"
      className="w-full bg-[#F0EEE9] text-[#111318] py-12 sm:py-16 lg:py-24 px-4 sm:px-8 border-b border-[#111318]/10"
    >
      <div style={{ maxWidth: '980px', margin: '0 auto' }}>
        {/* Section Header */}
        <div className="mb-8 sm:mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 mb-2">
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#C6A56B',
                display: 'inline-block',
              }}
            />
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#9B7C38] font-bold">
              ATELIER ARCHIVE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl text-[#111318] font-normal tracking-tight">
            Founder &amp; Co-Founder Journey
          </h2>
        </div>

        {/* Dual Founder Grid - Sized Generously with Full-Bleed Image Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7 mb-10 sm:mb-14">
          {/* Card 1: Sneha Acharya - Founder */}
          <div className="founder-card-box group">
            {/* Full-Bleed Image Covering Entire Grid Box (No Padding) */}
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop"
              alt="Sneha Acharya"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 10%',
                display: 'block',
                transition: 'transform 0.5s ease',
              }}
              className="group-hover:scale-105"
            />

            {/* Top Founder Badge */}
            <div
              style={{
                position: 'absolute',
                top: '14px',
                left: '14px',
                padding: '4px 11px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(17, 19, 24, 0.7)',
                backdropFilter: 'blur(6px)',
                border: '1px solid rgba(198, 165, 107, 0.4)',
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                fontWeight: 600,
                color: '#C6A56B',
                zIndex: 2,
              }}
            >
              Founder
            </div>

            {/* Gradient Scrim for crystal clear text readability */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to top, rgba(17, 19, 24, 0.95) 0%, rgba(17, 19, 24, 0.75) 30%, rgba(17, 19, 24, 0.15) 55%, transparent 80%)',
                pointerEvents: 'none',
                zIndex: 1,
              }}
            />

            {/* Text & Socials Overlay - Inside the Image at the bottom */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '24px 22px',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
              }}
            >
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  margin: 0,
                  lineHeight: '1.3',
                }}
              >
                Sneha Acharya
              </h3>
              <p
                style={{
                  fontSize: '13px',
                  fontWeight: 500,
                  color: '#F0EEE9',
                  margin: 0,
                }}
              >
                Software Engineer with Business Mindset
              </p>
              <p
                style={{
                  fontSize: '12px',
                  fontWeight: 400,
                  color: 'rgba(240, 238, 233, 0.8)',
                  margin: 0,
                  lineHeight: '1.45',
                }}
              >
                Contribution in Development and Product thinking
              </p>

              {/* Socials: Instagram, Twitter, Gmail */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '9px',
                  marginTop: '10px',
                }}
              >
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Sneha Acharya on Instagram"
                  title="Instagram"
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.12)',
                    backdropFilter: 'blur(4px)',
                    border: '1px solid rgba(255, 255, 255, 0.22)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#F0EEE9',
                    transition: 'all 0.2s ease',
                  }}
                  className="hover:bg-[#C6A56B] hover:text-[#111318] hover:border-[#C6A56B]"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>

                {/* Twitter / X */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Sneha Acharya on Twitter"
                  title="Twitter / X"
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.12)',
                    backdropFilter: 'blur(4px)',
                    border: '1px solid rgba(255, 255, 255, 0.22)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#F0EEE9',
                    transition: 'all 0.2s ease',
                  }}
                  className="hover:bg-[#C6A56B] hover:text-[#111318] hover:border-[#C6A56B]"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* Gmail */}
                <a
                  href="mailto:contact.ruh@gmail.com"
                  aria-label="Email Sneha Acharya"
                  title="Gmail"
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.12)',
                    backdropFilter: 'blur(4px)',
                    border: '1px solid rgba(255, 255, 255, 0.22)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#F0EEE9',
                    transition: 'all 0.2s ease',
                  }}
                  className="hover:bg-[#C6A56B] hover:text-[#111318] hover:border-[#C6A56B]"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Kunal Vishwakarma - Co-Founder */}
          <div className="founder-card-box group">
            {/* Full-Bleed Image Covering Entire Grid Box (No Padding) */}
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop"
              alt="Kunal Vishwakarma"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 10%',
                display: 'block',
                transition: 'transform 0.5s ease',
              }}
              className="group-hover:scale-105"
            />

            {/* Top Co-Founder Badge */}
            <div
              style={{
                position: 'absolute',
                top: '14px',
                left: '14px',
                padding: '4px 11px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(17, 19, 24, 0.7)',
                backdropFilter: 'blur(6px)',
                border: '1px solid rgba(198, 165, 107, 0.4)',
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                fontWeight: 600,
                color: '#C6A56B',
                zIndex: 2,
              }}
            >
              Co-Founder
            </div>

            {/* Gradient Scrim for crystal clear text readability */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to top, rgba(17, 19, 24, 0.95) 0%, rgba(17, 19, 24, 0.75) 30%, rgba(17, 19, 24, 0.15) 55%, transparent 80%)',
                pointerEvents: 'none',
                zIndex: 1,
              }}
            />

            {/* Text & Socials Overlay - Inside the Image at the bottom */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '24px 22px',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
              }}
            >
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  margin: 0,
                  lineHeight: '1.3',
                }}
              >
                Kunal Vishwakarma
              </h3>
              <p
                style={{
                  fontSize: '13px',
                  fontWeight: 500,
                  color: '#F0EEE9',
                  margin: 0,
                }}
              >
                Graphic Designer with Creative Aspect
              </p>
              <p
                style={{
                  fontSize: '12px',
                  fontWeight: 400,
                  color: 'rgba(240, 238, 233, 0.8)',
                  margin: 0,
                  lineHeight: '1.45',
                }}
              >
                Contribution in Design and Marketing
              </p>

              {/* Socials: Instagram, Twitter, Gmail */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '9px',
                  marginTop: '10px',
                }}
              >
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Kunal Vishwakarma on Instagram"
                  title="Instagram"
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.12)',
                    backdropFilter: 'blur(4px)',
                    border: '1px solid rgba(255, 255, 255, 0.22)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#F0EEE9',
                    transition: 'all 0.2s ease',
                  }}
                  className="hover:bg-[#C6A56B] hover:text-[#111318] hover:border-[#C6A56B]"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>

                {/* Twitter / X */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Kunal Vishwakarma on Twitter"
                  title="Twitter / X"
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.12)',
                    backdropFilter: 'blur(4px)',
                    border: '1px solid rgba(255, 255, 255, 0.22)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#F0EEE9',
                    transition: 'all 0.2s ease',
                  }}
                  className="hover:bg-[#C6A56B] hover:text-[#111318] hover:border-[#C6A56B]"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* Gmail */}
                <a
                  href="mailto:contact.ruh@gmail.com"
                  aria-label="Email Kunal Vishwakarma"
                  title="Gmail"
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.12)',
                    backdropFilter: 'blur(4px)',
                    border: '1px solid rgba(255, 255, 255, 0.22)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#F0EEE9',
                    transition: 'all 0.2s ease',
                  }}
                  className="hover:bg-[#C6A56B] hover:text-[#111318] hover:border-[#C6A56B]"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Spanning Quote Block at Bottom */}
        <div
          style={{
            paddingTop: '24px',
            borderTop: '1px solid rgba(17, 19, 24, 0.1)',
            textAlign: 'center',
            maxWidth: '720px',
            margin: '0 auto',
          }}
        >
          <blockquote className="text-sm sm:text-[15px] leading-[1.8] text-[#111318]/80 font-normal italic">
            &ldquo;RŪH was born from our love for thoughtful design and the brands that shaped our own wardrobes. We wanted to build a label that balances enduring staples with modern sensibilities. Now that you&apos;re here, take a moment to explore the collection—you might just find the piece you never take off.&rdquo;
          </blockquote>
          <p className="mt-3 text-xs text-[#9B7C38] font-semibold uppercase tracking-[0.16em] not-italic">
            — Sneha Acharya, Founder
          </p>
        </div>
      </div>
    </section>
  )
}
