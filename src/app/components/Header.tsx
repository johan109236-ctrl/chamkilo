'use client'

import React, { useState, useEffect } from 'react'
import './header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}>

        <button
          className="header__menu-btn"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className="header__hamburger">
            <span />
            <span />
          </span>
          <span className="header__menu-label">MENU</span>
        </button>

        <a href="/" className="header__wordmark" aria-label="Chamkilo home">

 <img 
  src="/assets/images/chamkilo-logo.png" 
  className="header__logo-img" 
  alt="Chamkilo" 
/>
  
  

</a>

        <div className="header__actions">
          <button className="header__icon-btn" aria-label="Search">
            <i className="bi bi-search" />
          </button>
          <button className="header__icon-btn" aria-label="Cart (0)">
            <i className="bi bi-bag" />
            <span className="header__cart-count">0</span>
          </button>
        </div>
      </header>

      <div
        className={`nav-drawer${menuOpen ? ' nav-drawer--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav className="nav-drawer__nav">
          <ul className="nav-drawer__list">
            {['Home', 'Shop', 'Collections', 'About', 'Blog', 'Contact'].map((item) => (
              <li key={item} className="nav-drawer__item">
                <a
                  href={`/${item.toLowerCase()}`}
                  className="nav-drawer__link"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {menuOpen && (
        <div
          className="nav-drawer__backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}