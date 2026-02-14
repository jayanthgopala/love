import React, { useState } from 'react';
import { Link, ExternalLink } from 'lucide-react';

// Love-themed background image with hearts
const LOVE_BACKGROUND_URL = 'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';

function EmailGenerator() {
  const [email, setEmail] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');
  const [copied, setCopied] = useState(false);

  const generateLink = () => {
    if (!email.trim()) {
      alert('Please enter an email address!');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address!');
      return;
    }

    const link = `${window.location.origin}/love?email=${encodeURIComponent(email)}`;
    setGeneratedLink(link);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = generatedLink;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const resetForm = () => {
    setEmail('');
    setGeneratedLink('');
    setCopied(false);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: `url('${LOVE_BACKGROUND_URL}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '1rem',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
          maxWidth: '32rem',
          width: '100%',
          position: 'relative',
        }}
      >
        {/* Navigation Link */}
        <Link
          to="/love"
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            color: '#ef4444',
            textDecoration: 'none',
            fontSize: '0.875rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
          }}
        >
          <span>❤️</span>
          Love Page
        </Link>

        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Link style={{ width: '3rem', height: '3rem', color: '#3b82f6', margin: '0 auto 1rem auto' }} />
          <h1
            style={{
              fontSize: '1.875rem',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '0.5rem',
            }}
          >
            Link Generator
          </h1>
          <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
            Generate a personalized love page link
          </p>

          {/* Background Information */}
          <div
            style={{
              backgroundColor: '#f8fafc',
              padding: '1rem',
              borderRadius: '0.5rem',
              marginBottom: '1.5rem',
              border: '1px solid #e2e8f0',
            }}
          >
            <p
              style={{
                fontSize: '0.875rem',
                color: '#64748b',
                lineHeight: '1.5',
                margin: '0',
              }}
            >
              <strong>How it works:</strong> Enter an email address to create a unique link to a romantic Valentine's Day page.
              Share this link with your special someone - they'll receive email notifications when they interact with the page!
              💕
            </p>
          </div>
        </div>

        {generatedLink ? (
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                width: '4rem',
                height: '4rem',
                backgroundColor: '#10b981',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem auto',
              }}
            >
              <ExternalLink style={{ width: '2rem', height: '2rem', color: 'white' }} />
            </div>
            <h2 style={{ color: '#10b981', marginBottom: '1rem' }}>
              Link Generated! 🎉
            </h2>

            <div
              style={{
                backgroundColor: '#f3f4f6',
                padding: '1rem',
                borderRadius: '0.5rem',
                marginBottom: '1rem',
                wordBreak: 'break-all',
                fontSize: '0.875rem',
                color: '#374151',
                border: '1px solid #e5e7eb',
              }}
            >
              {generatedLink}
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
              <button
                onClick={copyToClipboard}
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  backgroundColor: copied ? '#10b981' : '#3b82f6',
                  color: 'white',
                  borderRadius: '0.5rem',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                }}
              >
                {copied ? '✅ Copied!' : '📋 Copy Link'}
              </button>

              <a
                href={generatedLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  backgroundColor: '#ef4444',
                  color: 'white',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                }}
              >
                <ExternalLink size={16} />
                Open Link
              </a>
            </div>

            <button
              onClick={resetForm}
              style={{
                padding: '0.75rem 2rem',
                backgroundColor: '#6b7280',
                color: 'white',
                borderRadius: '0.5rem',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1rem',
              }}
            >
              Generate Another Link
            </button>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '0.5rem',
                }}
              >
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address (e.g., love@example.com)"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
                onFocus={(e) => (e.target.style.borderColor = '#3b82f6')}
                onBlur={(e) => (e.target.style.borderColor = '#d1d5db')}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    generateLink();
                  }
                }}
              />
              <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.5rem' }}>
                This email will receive notifications when someone interacts with the love page
              </p>
            </div>

            <button
              onClick={generateLink}
              style={{
                width: '100%',
                padding: '0.75rem',
                backgroundColor: '#3b82f6',
                color: 'white',
                borderRadius: '0.5rem',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
              }}
            >
              <Link size={16} />
              Generate Link
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default EmailGenerator;