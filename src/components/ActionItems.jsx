import React from 'react';
import { actionItems } from '../data/portfolioData';

export default function ActionItems() {
  return (
    <>
      <div className="section-label">Action Items</div>
      <ul className="action-list">
        {actionItems.map((item, i) => (
          <li key={i} className={`action-item action-item--${item.severity}`}>
            <div>
              <div>{item.property}</div>
              <div className="action-item-note">{item.note}</div>
            </div>
            <button className="btn-primary btn-sm">{item.buttonText}</button>
          </li>
        ))}
      </ul>
    </>
  );
}
