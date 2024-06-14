// src/components/Component.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Components.css';

export default function Component() {
  return (
    <div className="container">
      <header className="header">
        <Link to="/" className="logo">
          <MountainIcon className="icon" />
          <span className="sr-only">Generative UI</span>
        </Link>
        <nav className="nav">
          <Link to="/features" className="nav-link">Features</Link>
          <Link to="/examples" className="nav-link">Examples</Link>
          <Link to="/investors" className="nav-link">Investors</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
      </header>
      <main className="main-content">
        <section className="hero">
          <div className="hero-container">
            <div className="hero-text">
              <div className="hero-heading">
                <h1 className="title">Boost Your Sales with Generative UI</h1>
                <p className="description">
                  Our platform generates unique web designs for every visitor, tailored to their needs and preferences, increasing engagement and sales.
                </p>
              </div>
              <div className="hero-buttons">
                <Link to="/get-started" className="btn primary">Get Started</Link>
                <Link to="/learn-more" className="btn secondary">Learn More</Link>
              </div>
            </div>
            <img src="/placeholder.svg" width="550" height="550" alt="Hero" className="hero-image" />
          </div>
        </section>
        {/* Resto del componente */}
      </main>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <h3 className="footer-heading">Company</h3>
            <Link to="/about-us" className="footer-link">About Us</Link>
            <Link to="/our-team" className="footer-link">Our Team</Link>
            <Link to="/careers" className="footer-link">Careers</Link>
            <Link to="/news" className="footer-link">News</Link>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Products</h3>
            <Link to="/generative-ui" className="footer-link">Generative UI</Link>
            <Link to="/ai-design-tools" className="footer-link">AI Design Tools</Link>
            <Link to="/web-development" className="footer-link">Web Development</Link>
            <Link to="/hosting" className="footer-link">Hosting</Link>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Resources</h3>
            <Link to="/blog" className="footer-link">Blog</Link>
            <Link to="/documentation" className="footer-link">Documentation</Link>
            <Link to="/support" className="footer-link">Support</Link>
            <Link to="/faqs" className="footer-link">FAQs</Link>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Legal</h3>
            <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
            <Link to="/terms-of-service" className="footer-link">Terms of Service</Link>
            <Link to="/cookie-policy" className="footer-link">Cookie Policy</Link>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Contact</h3>
            <Link to="/sales" className="footer-link">Sales</Link>
            <Link to="/support" className="footer-link">Support</Link>
            <Link to="/partnerships" className="footer-link">Partnerships</Link>
            <Link to="/press" className="footer-link">Press</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
