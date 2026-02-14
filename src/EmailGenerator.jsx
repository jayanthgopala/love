import React, { useState, useEffect } from 'react';
import { Mail, Send, Heart } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

// EmailJS credentials are loaded from environment variables
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

function EmailGenerator() {
  const [toEmail, setToEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    console.log('=== EmailJS Configuration ===');
    console.log('Public Key:', EMAILJS_PUBLIC_KEY);
    console.log('Service ID:', EMAILJS_SERVICE_ID);
    console.log('Template ID:', EMAILJS_TEMPLATE_ID);
    console.log('===========================');

    if (EMAILJS_PUBLIC_KEY && EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID) {
      emailjs.init(EMAILJS_PUBLIC_KEY);
      console.log('✅ EmailJS initialized successfully');
    } else {
      console.error('❌ Missing EmailJS credentials!');
    }
  }, []);

  const handleSendEmail = async () => {
    if (!toEmail.trim() || !subject.trim() || !message.trim()) {
      alert('Please fill in all fields!');
      return;
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      alert('EmailJS not configured. Check .env file and console.');
      return;
    }

    setIsSending(true);

    try {
      const templateParams = {
        to_email: toEmail,
        subject: subject,
        message: message,
      };

      console.log('📧 Sending email...');
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('✅ Email sent successfully!', response);
      setEmailSent(true);
      alert('Email sent successfully! 📧');
    } catch (error) {
      console.error('❌ Failed to send email:', error);
      alert('Failed to send email: ' + (error.text || error.message || 'Unknown error'));
    } finally {
      setIsSending(false);
    }
  };

  const resetForm = () => {
    setToEmail('');
    setSubject('');
    setMessage('');
    setEmailSent(false);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
          <Heart size={16} />
          Love Page
        </Link>

        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Mail style={{ width: '3rem', height: '3rem', color: '#3b82f6', margin: '0 auto 1rem auto' }} />
          <h1
            style={{
              fontSize: '1.875rem',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '0.5rem',
            }}
          >
            Email Generator
          </h1>
          <p style={{ color: '#6b7280' }}>
            Compose and send beautiful emails
          </p>
        </div>

        {emailSent ? (
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
              <Send style={{ width: '2rem', height: '2rem', color: 'white' }} />
            </div>
            <h2 style={{ color: '#10b981', marginBottom: '1rem' }}>
              Email Sent Successfully! 🎉
            </h2>
            <button
              onClick={resetForm}
              style={{
                padding: '0.75rem 2rem',
                backgroundColor: '#3b82f6',
                color: 'white',
                borderRadius: '0.5rem',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1rem',
              }}
            >
              Send Another Email
            </button>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '0.5rem',
                }}
              >
                To Email
              </label>
              <input
                type="email"
                value={toEmail}
                onChange={(e) => setToEmail(e.target.value)}
                placeholder="recipient@example.com"
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
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '0.5rem',
                }}
              >
                Subject
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Email subject"
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
              />
            </div>

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
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message here..."
                rows="6"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  outline: 'none',
                  resize: 'vertical',
                  boxSizing: 'border-box',
                }}
                onFocus={(e) => (e.target.style.borderColor = '#3b82f6')}
                onBlur={(e) => (e.target.style.borderColor = '#d1d5db')}
              />
            </div>

            <button
              onClick={handleSendEmail}
              disabled={isSending}
              style={{
                width: '100%',
                padding: '0.75rem',
                backgroundColor: isSending ? '#9ca3af' : '#3b82f6',
                color: 'white',
                borderRadius: '0.5rem',
                border: 'none',
                cursor: isSending ? 'not-allowed' : 'pointer',
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
              }}
            >
              {isSending ? (
                <>
                  <div
                    style={{
                      width: '1rem',
                      height: '1rem',
                      border: '2px solid #ffffff',
                      borderTop: '2px solid transparent',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite',
                    }}
                  />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Email
                </>
              )}
            </button>
          </div>
        )}
      </div>

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}

export default EmailGenerator;