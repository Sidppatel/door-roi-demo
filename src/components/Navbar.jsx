import React from 'react';
import { useTheme } from '../hooks/useTheme';

export default function Navbar() {
  const { isDark, toggle } = useTheme();

  return (
    <div className="nav-outer">
      <header className="nav">
        <div className="brand">
          <div className="brand-icon" aria-hidden="true" />
          <div>
            <div className="brand-text-main">
              Door<span>ROI</span>
            </div>
            <div className="brand-sub">Property NOI Analytics</div>
          </div>
        </div>
        <nav className="nav-actions" aria-label="Main navigation">
          <a href="#portfolio" className="nav-link">Portfolio</a>
          <a href="#reports" className="nav-link">Owner Reports</a>
          <a href="#about" className="nav-link">About</a>
          <button
            className="theme-toggle"
            onClick={toggle}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          >
            <span className="theme-toggle-icon">
              {isDark ? '\u2600' : '\u263E'}
            </span>
            <span>{isDark ? 'Light' : 'Dark'}</span>
          </button>
          <a href="#get-started" className="btn-primary" style={{ textDecoration: 'none' }}>
            Request demo <span>&rarr;</span>
          </a>
        </nav>
      </header>
    </div>
  );
}
