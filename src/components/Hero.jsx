import React from 'react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-pill">
        <span className="hero-pill-dot" />
        Built for landlords
      </div>
      <h1 className="hero-main-title">
        See the <span className="hero-highlight">ROI on every door</span>.
      </h1>
      <p className="hero-subtitle">
        No tenant portal. No leases. Just the financial visibility layer your
        spreadsheet can&rsquo;t give you.
      </p>
      <a href="#get-started" className="btn-primary" style={{ textDecoration: 'none' }}>
        Request Free Access <span>&rarr;</span>
      </a>
      <p className="hero-footnote">
        Turn QuickBooks or CSV exports into a clean NOI dashboard for each property &mdash;
        so you know exactly which doors are paying you, and which ones aren&rsquo;t.
      </p>
    </section>
  );
}
