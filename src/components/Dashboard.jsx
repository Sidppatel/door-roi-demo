import React, { useState, useEffect } from 'react';
import ErrorBoundary from './ErrorBoundary';
import KPIGrid from './KPIGrid';
import { NOIBarChart, ExpenseDonut, NOITrendChart, OccupancyBarChart } from './Charts';
import PropertyTable from './PropertyTable';
import ActionItems from './ActionItems';

export default function Dashboard() {
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
  }, []);

  return (
    <div className="dashboard-wrapper" id="portfolio">
      <div className="dashboard-header">
        <div>
          <div className="dashboard-title">Portfolio Overview</div>
          <div className="dashboard-portfolio">
            Mobile, AL Demo Portfolio
            <span className="badge-location">5 Properties &middot; 9 Units</span>
          </div>
        </div>
        <div className="panel-subtitle">{lastUpdated}</div>
      </div>

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
    </div>
  );
}
