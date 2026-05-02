import React, { useState, useCallback } from 'react';
import { propertiesManaged } from '../data/portfolioData';

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      const formData = new FormData(e.target);
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMsg('Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please try again.');
    }
  }, []);

  return (
    <section className="form-section" id="get-started">
      <div className="form-section-label">Get Started</div>
      <h2 className="form-section-title">Request Free Access</h2>
      <p className="form-section-desc">
        Tell me a little about your portfolio and I&rsquo;ll personally set up DoorROI
        with your data within 48 hours. I&rsquo;ll ask about your stack and city in my reply.
      </p>

      <div className="form-section-inner">
        <div className="form-card">
          {status === 'success' ? (
            <div className="form-success" style={{ display: 'block' }}>
              <div className="form-success-icon">&#9989;</div>
              <h3>Request received!</h3>
              <p>I&rsquo;ll reach out within 24 hours to get your dashboard set up.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="access_key" value="fc9067bb-2fdf-4f6b-aa23-4fa6ab5db2e3" />
              <input type="hidden" name="subject" value="New DoorROI Access Request" />
              <input type="hidden" name="from_name" value="DoorROI Website" />
              <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} aria-hidden="true" />

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">
                    First Name <span className="req">*</span>
                  </label>
                  <input type="text" name="first_name" className="form-input" placeholder="John" required />
                </div>
                <div className="form-group">
                  <label className="form-label">
                    Properties Managed <span className="req">*</span>
                  </label>
                  <select name="properties_managed" className="form-select" required defaultValue="">
                    <option value="" disabled>Select range...</option>
                    {propertiesManaged.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group full-width">
                  <label className="form-label">
                    Email <span className="req">*</span>
                  </label>
                  <input type="email" name="email" className="form-input" placeholder="you@yourcompany.com" required />
                </div>
              </div>

              {errorMsg && (
                <div style={{ color: 'var(--color-danger)', fontSize: '0.85rem', marginBottom: '8px' }}>
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                className="btn-primary form-submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending…' : 'Request Free Access'}{' '}
                {status !== 'sending' && <span>&rarr;</span>}
              </button>
            </form>
          )}
        </div>

        <div className="form-trust">
          <span>No credit card</span>
          <span>No commitment</span>
          <span>I set it up personally</span>
          <span>Reply within 24 hours</span>
        </div>
      </div>
    </section>
  );
}
