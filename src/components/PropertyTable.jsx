import React from 'react';
import { properties } from '../data/portfolioData';

export default function PropertyTable() {
  return (
    <>
      <div className="section-label">Property Details</div>
      <div className="panel" style={{ padding: 0, overflow: 'hidden' }}>
        <div className="table-wrapper">
          <table>
            <colgroup>
              <col className="col-property" />
              <col className="col-neighborhood" />
              <col className="col-narrow" />
              <col className="col-narrow" />
              <col className="col-money" />
              <col className="col-money" />
              <col className="col-noi" />
              <col className="col-status" />
            </colgroup>
            <thead>
              <tr>
                <th>Property</th>
                <th>Neighborhood</th>
                <th>Units</th>
                <th>Occupancy</th>
                <th className="numeric">Rent Collected</th>
                <th className="numeric">Expenses</th>
                <th className="numeric">NOI</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {properties.map((p, i) => (
                <tr key={i}>
                  <td>{p.name}</td>
                  <td>{p.neighborhood}</td>
                  <td>{p.units}</td>
                  <td>{p.occupancy}</td>
                  <td className="numeric">{p.rent}</td>
                  <td className="numeric">{p.expenses}</td>
                  <td
                    className="numeric"
                    style={{
                      color: p.noiPositive ? 'var(--color-accent)' : 'var(--color-danger)',
                      fontWeight: 600,
                    }}
                  >
                    {p.noi}
                  </td>
                  <td>
                    <span className={`status-pill status-pill--${p.statusType}`}>
                      {p.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
