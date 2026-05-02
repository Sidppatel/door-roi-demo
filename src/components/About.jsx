import React from 'react';

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="form-section-label">Who built this</div>
      <h2 className="form-section-title">
        A BI engineer tired of watching landlords drown in spreadsheets.
      </h2>
      <div className="about-body">
        <p>
          I&rsquo;m Siddh &mdash; I work in business intelligence and reporting at Austal USA
          in Mobile, AL. Most small landlords still juggle rent collected, vacancy days, and
          per-property NOI across separate Excel tabs. DoorROI is the dashboard I&rsquo;d want
          if I were running 5&ndash;50 doors myself.
        </p>
        <p>
          I&rsquo;m setting up the first five portfolios personally. Share a QuickBooks export
          or a CSV, and I&rsquo;ll build your dashboard and send you the link within 48 hours.
        </p>
      </div>
    </section>
  );
}
