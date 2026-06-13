'use client'

import React, { useState, useEffect, useCallback } from 'react'
import './hero.css'

const slides = [
  {
    id: 1,
    image: '/assets/images/KL.webp',
    title: ' Gothic Bracelets',
    subtitle: 'Shop Now',
    tag: '',
  },
  {
    id: 2,
    image: '/assets/images/KL2.webp',
    title: 'Gothic Belts',
    subtitle: 'Explore Now',
    tag: '',
  },
  {
    id: 3,
    image: '/hero/slide-3.jpg',
    title: 'Statement Rings',
    subtitle: 'Shop Now',
    tag: 'Limited Edition',
  },
  {
    id: 4,
    image: '/hero/slide-4.jpg',
    title: "Men's Accessories",
    subtitle: 'View Collection',
    tag: 'Premium Accessories',
  },
]

const AUTOPLAY_DELAY = 4000

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const goTo = useCallback((index: number) => {
    setCurrent(index)
  }, [])

  const next = useCallback(() => {
    setCurrent(prev => (prev + 1) % slides.length)
  }, [])

  // Autoplay
  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, AUTOPLAY_DELAY)
    return () => clearInterval(timer)
  }, [paused, next])

  return (
    <section className="hero hero-offset">

      {/* Slides — click the right half to go next, left half to go prev */}
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`hero__slide ${i === current ? 'hero__slide--active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
          aria-hidden={i !== current}
        />
      ))}

      {/* Click zones — left half prev, right half next */}
      <button
        className="hero__zone hero__zone--prev"
        onClick={() => goTo((current - 1 + slides.length) % slides.length)}
        aria-label="Previous slide"
      />
      <button
        className="hero__zone hero__zone--next"
        onClick={() => goTo((current + 1) % slides.length)}
        aria-label="Next slide"
      />

      {/* Dark overlay */}
      <div className="hero__overlay" />

      {/* Content — bottom left */}
      <div className="hero__content">
        <span className="hero__tag">{slides[current].tag}</span>
        <h1 className="hero__title" key={current}>{slides[current].title}</h1>
        <a href="/shop" className="hero__cta" key={`cta-${current}`}>
          {slides[current].subtitle} →
        </a>
      </div>

      {/* Bottom right — dots + pause */}
      <div className="hero__ui">
        <div className="hero__dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`hero__dot ${i === current ? 'hero__dot--active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          className="hero__pause"
          onClick={() => setPaused(p => !p)}
          aria-label={paused ? 'Play slideshow' : 'Pause slideshow'}
        >
          {paused
            ? <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor"><path d="M0 0l10 6-10 6V0z"/></svg>
            : <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor"><rect x="0" y="0" width="3" height="12"/><rect x="7" y="0" width="3" height="12"/></svg>
          }
        </button>
      </div>

    </section>
  )
}