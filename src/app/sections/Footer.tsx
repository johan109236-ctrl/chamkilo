import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <footer className="footer">

      {/* ── Main footer grid ── */}
      <div className="footer__main">

        {/* Left — wordmark */}
        <div className="footer__brand">
          <a href="/" className="footer__wordmark">Chamkilo</a>
        </div>

        {/* Center — Help links */}
        <div className="footer__col">
          <h3 className="footer__col-heading">HELP</h3>
          <ul className="footer__links">
            <li><a href="/exchange-returns" className="footer__link">Exchange, Returns &amp; Cancellation Policy</a></li>
            <li><a href="/shipping"         className="footer__link">Shipping</a></li>
            <li><a href="/terms"            className="footer__link">Terms</a></li>
            <li><a href="/track-order"      className="footer__link">Track Your Order</a></li>
            <li><a href="/privacy-policy"   className="footer__link">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Right — Company links */}
        <div className="footer__col">
          <h3 className="footer__col-heading">COMPANY</h3>
          <ul className="footer__links">
            <li><a href="/careers"    className="footer__link">Get Hired</a></li>
            <li><a href="/contact"    className="footer__link">Contact Us</a></li>
          </ul>
        </div>

      </div>

      {/* ── Social row ── */}
      <div className="footer__social">
        <a href="https://instagram.com" className="footer__social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-instagram" />
        </a>
        <a href="https://twitter.com"   className="footer__social-link" aria-label="Twitter / X"  target="_blank" rel="noopener noreferrer">
          <i className="bi bi-twitter-x" />
        </a>
        <a href="https://facebook.com"  className="footer__social-link" aria-label="Facebook"  target="_blank" rel="noopener noreferrer">
          <i className="bi bi-facebook" />
        </a>
      </div>

      {/* ── Bottom bar ── */}
      <div className="footer__bottom">
        <p className="footer__copy">© 2026, Chamkilo</p>
        <p className="footer__credit">Premium Accessories</p>
      </div>

    </footer>
  )
}