import React from 'react';
import { kpiData } from '../data/portfolioData';

function KPICard({ label, value, accent, meta }) {
  return (
    <article className={`kpi-card kpi-card--${accent}`}>
      <div className="kpi-label">{label}</div>
      <div className="kpi-value">{value}</div>
      <div className="kpi-meta">
        {meta.map((m, i) => {
          if (m.type === 'change-up') {
            return (
              <span key={i} className="kpi-change kpi-change--up">
                <span className="kpi-change-arrow">&uarr;</span>
                {m.text}
              </span>
            );
          }
          if (m.type === 'change-down') {
            return (
              <span key={i} className="kpi-change kpi-change--down">
                <span className="kpi-change-arrow">&darr;</span>
                {m.text}
              </span>
            );
          }
          if (m.type === 'change-alert') {
            return (
              <span key={i} className="kpi-change kpi-change--down">
                <span className="kpi-change-arrow">!</span>
                {m.text}
              </span>
            );
          }
          return <span key={i}>{m.text}</span>;
        })}
      </div>
    </article>
  );
}

export default function KPIGrid() {
  return (
    <div className="kpi-grid">
      {kpiData.map((kpi, i) => (
        <KPICard key={i} {...kpi} />
      ))}
    </div>
  );
}
