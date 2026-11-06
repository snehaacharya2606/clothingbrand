'use client'

import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href="#"
      id="backtotop"
      style={{ display: visible ? 'block' : 'none' }}
      onClick={(e) => {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }}
    >
      <span className="fa fa-angle-up" />
      <span className="back-to-top">Back to Top</span>
    </a>
  )
}
