import React from 'react';

export function SkeletonBlock({ width = '100%', height = '1rem', style = {} }) {
  return (
    <div
      className="skeleton"
      style={{ width, height, borderRadius: '8px', ...style }}
      aria-hidden="true"
    />
  );
}

export function KPISkeleton() {
  return (
    <div className="kpi-grid">
      {[0, 1, 2, 3].map((i) => (
        <article className="kpi-card" key={i}>
          <SkeletonBlock width="60%" height="0.75rem" style={{ marginBottom: '12px' }} />
          <SkeletonBlock width="40%" height="1.5rem" style={{ marginBottom: '8px' }} />
          <SkeletonBlock width="80%" height="0.7rem" />
        </article>
      ))}
    </div>
  );
}

export function ChartSkeleton() {
  return (
    <div className="panel">
      <SkeletonBlock width="40%" height="0.8rem" style={{ marginBottom: '14px' }} />
      <SkeletonBlock width="100%" height="260px" />
    </div>
  );
}

export function TableSkeleton() {
  return (
    <div className="panel" style={{ padding: 0, overflow: 'hidden' }}>
      <div className="table-wrapper">
        <div style={{ padding: '18px' }}>
          {[0, 1, 2, 3, 4].map((i) => (
            <SkeletonBlock
              key={i}
              width="100%"
              height="2rem"
              style={{ marginBottom: '8px' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
