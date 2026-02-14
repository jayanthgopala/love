import React, { useState } from 'react';
import { Link, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Love-themed background image with hearts
const LOVE_BACKGROUND_URL = 'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';

function EmailGenerator() {
  const [email, setEmail] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const generateLink = () => {
    if (!email.trim()) {
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
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

            <div style={{ marginTop: '1rem', textAlign: 'center' }}>
              <button
                onClick={() => navigate('/code-guide')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#24292e',
                  color: 'white',
                  borderRadius: '0.5rem',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#1a1e22';
                  e.target.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#24292e';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  style={{ flexShrink: 0 }}
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-1.29-.61-.2-.63.63-.06.95.58.99.94.07.12.32.58.58.76.23.15.52.07.65-.04.01-.37.01-.89.01-1.49 0-1.21.73-2.18 1.74-2.63-.55-.11-.9-.52-.9-.96 0-.44.31-.81.7-.94C5.55 6.24 6.02 5.5 6.02 4.42c0-.44-.01-.89-.01-1.59 0-.66-.23-.93-.55-.93C4.69 1.41 4.14 2.39 4.14 3.86c0 1.41-.39 2.52-1.03 3.36-.67.49-1.29.19-1.55-.45-.13-.72-.45-1.24-.82-1.53-.17-.09-.55-.34-.11-.64.44-.28.9-.42.9-.42.63-.43 1.08-.19 1.31.04.28.25.64.81.64.81.2.63.54 1.08 1.01 1.22.01.39.01.77.01 1.1 0 1.76-.53 2.93-1.23 3.47C5.7 14.21 8 14.49 8 14.49s.3-.01.67-.01c.46-.62 1.19-1.91 1.19-3.47 0-.33.01-.71.01-1.1.48.07.93.22 1.22.46.28.26.63.81.63.81s.46.16.9.42c0 0 .46.14.9.42.35.31.73.83.73.83-.27.71-.89 1.01-1.55.45-.74-.86-1.03-1.97-1.03-3.36 0-1.47.55-2.45 1.31-2.39.44.06 1.45.5 1.45.5.37.19.73.52.73.52.37.42.91.94.91.94.39.52.39 1.23.39 1.23s.01.39.01.77c0 .72.05 1.46.05 1.46.04.31.25.54.56.54.3.01.61-.22.61-.22.39-.16.78-.53.78-.53.37-.47.6-.59.6-.59.37-.07.6-.36.6-.36.24-.19.37-.53.37-.53.19-.58.22-1.21.22-1.87 0-4.42-3.58-8-8-8z"/>
                </svg>
                Want Code
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default EmailGenerator;