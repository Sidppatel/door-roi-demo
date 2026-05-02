import React from 'react';
import { useTheme } from '../hooks/useTheme';

export default function Navbar() {
  const { isDark, toggle } = useTheme();

  return (
    <div className="nav-outer">
      <header className="nav">
        <div className="brand">
          <img src="/logo.svg" alt="DoorROI Logo" className="brand-icon" />
          <div>
            <div className="brand-text-main">
              DOOR <span className="roi-text">ROI</span>
            </div>
            <div className="brand-sub">Property Profit Analytics</div>
          </div>
        </div>
        <nav className="nav-actions" aria-label="Main navigation">
          <a href="#portfolio" className="nav-link">Demo</a>
          <a href="#about" className="nav-link">About</a>
          <button
            className="theme-toggle"
            onClick={toggle}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          >
            <span className="theme-toggle-icon">
              {isDark ? '☀' : '☾'}
            </span>
            <span>{isDark ? 'Light' : 'Dark'}</span>
          </button>
          <a href="#get-started" className="btn-primary" style={{ textDecoration: 'none' }}>
            Request Free Access <span>&rarr;</span>
          </a>
        </nav>
      </header>
    </div>
  );
}
