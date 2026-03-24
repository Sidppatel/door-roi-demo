import React, { useState, useEffect, Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';
import KPIGrid from './KPIGrid';
import { KPISkeleton, ChartSkeleton, TableSkeleton } from './Skeleton';
import { NOIBarChart, ExpenseDonut, NOITrendChart, OccupancyBarChart } from './Charts';
import PropertyTable from './PropertyTable';
import ActionItems from './ActionItems';

function LoadingDashboard() {
  return (
    <>
      <KPISkeleton />
      <div className="section-label">Financial Performance</div>
      <div className="chart-grid">
        <ChartSkeleton />
        <ChartSkeleton />
      </div>
      <div className="section-label">Trends &amp; Occupancy</div>
      <div className="chart-grid">
        <ChartSkeleton />
        <ChartSkeleton />
      </div>
      <TableSkeleton />
    </>
  );
}

export default function Dashboard() {
  const [loaded, setLoaded] = useState(false);
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    const today = new Date();
    setLastUpdated(
      'Last updated: ' +
        today.toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })
    );
    // Simulate a brief loading state for smooth transition
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="dashboard-wrapper" id="portfolio">
      <div className="dashboard-header">
        <div>
          <div className="dashboard-title">Portfolio Overview</div>
          <div className="dashboard-portfolio">
            Sample Portfolio
            <span className="badge-location">5 Properties &middot; 9 Units</span>
          </div>
        </div>
        <div className="panel-subtitle">{lastUpdated}</div>
      </div>

      {!loaded ? (
        <LoadingDashboard />
      ) : (
        <>
          <ErrorBoundary fallbackMessage="KPI data failed to load.">
            <KPIGrid />
          </ErrorBoundary>

          <div className="section-label">Financial Performance</div>
          <div className="chart-grid">
            <ErrorBoundary fallbackMessage="Chart failed to render.">
              <NOIBarChart />
            </ErrorBoundary>
            <ErrorBoundary fallbackMessage="Chart failed to render.">
              <ExpenseDonut />
            </ErrorBoundary>
          </div>

          <div className="section-label">Trends &amp; Occupancy</div>
          <div className="chart-grid">
            <ErrorBoundary fallbackMessage="Chart failed to render.">
              <NOITrendChart />
            </ErrorBoundary>
            <ErrorBoundary fallbackMessage="Chart failed to render.">
              <OccupancyBarChart />
            </ErrorBoundary>
          </div>

          <ErrorBoundary fallbackMessage="Property table failed to load.">
            <PropertyTable />
          </ErrorBoundary>

          <ErrorBoundary fallbackMessage="Action items failed to load.">
            <ActionItems />
          </ErrorBoundary>
        </>
      )}
    </div>
  );
}
