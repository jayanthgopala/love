import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import emailjs from '@emailjs/browser';

// EmailJS credentials are loaded from environment variables
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
// Rose image with top part (rose) to be shown in full screen on the second page
const ROSE_IMAGE_URL = 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=865&q=80';
const BACKGROUND_IMAGE_URL = ROSE_IMAGE_URL;

function LovePage() {
  // Watermark/link style
  const watermarkStyle = {
    position: 'fixed',
    bottom: '24px',
    right: '32px',
    zIndex: 9999,
    color: 'rgba(255, 255, 255, 0.12)',
    fontSize: '1rem',
    fontWeight: 300,
    fontFamily: "'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",
    textDecoration: 'none',
    userSelect: 'none',
    pointerEvents: 'auto',
    letterSpacing: '0.08em',
    cursor: 'pointer',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.15)',
    animation: 'glowShine 3s ease-in-out infinite',
  };
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [showLoveMessage, setShowLoveMessage] = useState(false);
  const [isNoButtonMoved, setIsNoButtonMoved] = useState(false);
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [recipientEmail, setRecipientEmail] = useState('develouperforlove@gmail.com');

  const moveNoButton = () => {
    const maxX = window.innerWidth - 100;
    const maxY = window.innerHeight - 50;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    setNoButtonPosition({ x: newX, y: newY });
    setIsNoButtonMoved(true);
  };

  const handleYesClick = async () => {
    setShowLoveMessage(true);
    const messageContent = `💖 LOVE ALERT! 💖\n\nSHE SAID YES! ❤️\n\nYour special someone just accepted your proposal!\nTime: ${new Date().toLocaleString()}\n\nCongratulations! Your love story continues... 🌹`;

    console.log('\n=== Sending YES Email ===');
    console.log('Message:', messageContent);
    console.log('To:', recipientEmail);

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error('❌ Missing EmailJS configuration!');
      return;
    }

    try {
      const templateParams = {
        to_email: recipientEmail,
        subject: 'Love Alert! 💖',
        message: messageContent,
      };

      console.log('📧 Attempting to send email...');
      console.log('Service ID:', EMAILJS_SERVICE_ID);
      console.log('Template ID:', EMAILJS_TEMPLATE_ID);
      console.log('Template Params:', templateParams);

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('✅ Email sent successfully!');
      console.log('Response:', response);
    } catch (error) {
      console.error('❌ Failed to send email!');
      console.error('Error details:', error);
      console.error('Error text:', error.text);
      console.error('Error status:', error.status);
      alert('Failed to send email: ' + (error.text || error.message || 'Unknown error'));
    }
  };

  const handleSendMessage = async () => {
    console.log('🔍 handleSendMessage called');
    console.log('Message state:', message);
    console.log('Message trimmed:', message.trim());

    if (message.trim() === '') {
      alert('Please write a message before sending!');
      return;
    }

    const messageContent = `💌 A Sweet Message from Your Love 💌\n\n"${message}"\n\nSent with all the love in her heart ❤️\nTime: ${new Date().toLocaleString()}\n\nYour special someone wanted you to know how much you mean to them! 🌹`;

    console.log('\n=== Sending Custom Message ===');
    console.log('Message:', messageContent);
    console.log('To:', recipientEmail);

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error('❌ Missing EmailJS configuration!');
      return;
    }

    try {
      const templateParams = {
        to_email: recipientEmail,
        subject: 'A Sweet Message 💌',
        message: messageContent,
      };

      console.log('📧 Attempting to send custom message...');
      console.log('Template Params:', templateParams);

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('✅ Custom message sent successfully!');
      console.log('Response:', response);
      setEmailSent(true);
    } catch (error) {
      console.error('❌ Failed to send custom message!');
      console.error('Error details:', error);
      console.error('Error text:', error.text);
      console.error('Error status:', error.status);
      console.error('Error message:', error.message);
    }
  };

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
      console.error('Public Key:', EMAILJS_PUBLIC_KEY ? '✓' : '✗');
      console.error('Service ID:', EMAILJS_SERVICE_ID ? '✓' : '✗');
      console.error('Template ID:', EMAILJS_TEMPLATE_ID ? '✓' : '✗');
    }

    // Parse URL parameters for custom email recipient
    const urlParams = new URLSearchParams(window.location.search);
    const emailParam = urlParams.get('email');

    if (emailParam) {
      console.log('📧 Custom email from URL:', emailParam);
      setRecipientEmail(emailParam);
    } else {
      console.log('📧 Using default email:', recipientEmail);
    }
  }, []);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  if (showLoveMessage) {
    return (
      <>
        <a
          href="https://github.com/jayanthgopala"
          target="_blank"
          rel="noopener noreferrer"
          style={watermarkStyle}
          tabIndex={-1}
        >
          made by JAYANTH GOPALA
        </a>
      <div
        style={{
          minHeight: '100vh',
          minWidth: '100vw',
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          position: 'relative',
          backgroundImage: `url('${ROSE_IMAGE_URL}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 10%', // Shift focus to show the top 68-80% of the image
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(255,255,255,0.7)',
            padding: '2rem',
            borderRadius: '0.5rem',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
            maxWidth: '40rem',
            textAlign: 'center',
            width: '90%',
            margin: '3rem auto 0 auto',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Heart style={{ width: '4rem', height: '4rem', color: '#ef4444', margin: '0 auto 1rem auto' }} className="animate-bounce" />
          <h1
            style={{
              fontSize: '1.875rem',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '1rem',
            }}
          >
            I Love You! ❤️
          </h1>
          <p
            style={{
              fontSize: '1.125rem',
              color: '#374151',
              marginBottom: '1rem',
            }}
          >
            You've made me the happiest person alive💗
          </p>
          <div
            style={{
              fontSize: '0.875rem',
              color: '#4b5563',
            }}
          >
            Forever yours, with all my heart ❤️
          </div>

          <p
            style={{
              fontSize: '1.25rem',
              color: '#374151',
              marginTop: '1.5rem',
              marginBottom: '1rem',
            }}
          >
            A sweet message for you:
            <br />
            "Your presence makes everything beautiful, and my heart is filled with joy every time I think of you.💖"
          </p>

          <textarea
            value={message}
            onChange={handleMessageChange}
            placeholder="Write a message for me 💌"
            style={{
              width: '100%',
              boxSizing: 'border-box',
              padding: '1rem',
              marginTop: '1rem',
              fontSize: '1.1rem',
              lineHeight: '1.6',
              color: '#111827',
              backgroundColor: 'rgba(255,255,255,0.7)',
              borderRadius: '0.75rem',
              border: '2px solid #cbd5e1',
              boxShadow: 'inset 0 1px 2px rgba(15,23,42,0.05)',
              outline: 'none',
              resize: 'vertical',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#a855f7';
              e.target.style.boxShadow = '0 0 0 3px rgba(168,85,247,0.2)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#cbd5e1';
              e.target.style.boxShadow = 'inset 0 1px 2px rgba(15,23,42,0.05)';
            }}
            rows="4"
          />

          <button
            onClick={handleSendMessage}
            style={{
              padding: '0.75rem 2rem',
              backgroundColor: '#3b82f6',
              color: 'white',
              borderRadius: '9999px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
              transition: 'all 0.2s',
              fontSize: '1rem',
              marginTop: '1rem',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#2563eb';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#3b82f6';
              e.target.style.transform = 'scale(1)';
            }}
          >
            Send Message 📩
          </button>

          {emailSent && (
            <div
              style={{
                marginTop: '1rem',
                color: '#10b981',
              }}
            >
              Message sent
            </div>
          )}
        </div>
      </div>
    </>
  );
}

  return (
    <>
      <a
        href="https://github.com/jayanthgopala"
        target="_blank"
        rel="noopener noreferrer"
        style={watermarkStyle}
        tabIndex={-1}
      >
        made by JAYANTH GOPALA
      </a>
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: `url('${BACKGROUND_IMAGE_URL}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(255,255,255,0.7)',
          padding: '2rem',
          borderRadius: '0.5rem',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
          maxWidth: '32rem',
          textAlign: 'center',
          margin: '0 auto',
        }}
      >
        <Heart
          style={{
            width: '4rem',
            height: '4rem',
            color: '#ef4444',
            margin: '0 auto 1rem auto',
          }}
        />
        <h1
          style={{
            fontSize: '1.875rem',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '1.5rem',
          }}
        >
          Will You Be Mine Forever?
        </h1>
        <p
          style={{
            fontSize: '1.125rem',
            color: '#374151',
            marginBottom: '2rem',
          }}
        >
          Every moment spent with you feels like a beautiful dream. Would you make me the happiest person by saying yes?
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '1.5rem',
          }}
        >
          <button
            onClick={handleYesClick}
            style={{
              padding: '0.75rem 2rem',
              backgroundColor: '#ef4444',
              color: 'white',
              borderRadius: '9999px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
              transition: 'all 0.2s',
              fontSize: '1rem',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#dc2626';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#ef4444';
            }}
          >
            Yes, I Will! ❤️
          </button>
          <button
            style={
              isNoButtonMoved
                ? {
                    position: 'absolute',
                    left: `${noButtonPosition.x}px`,
                    top: `${noButtonPosition.y}px`,
                    transition: 'all 0.2s ease',
                    padding: '0.75rem 2rem',
                    backgroundColor: '#6b7280',
                    color: 'white',
                    borderRadius: '9999px',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1rem',
                  }
                : {
                    padding: '0.75rem 2rem',
                    backgroundColor: '#6b7280',
                    color: 'white',
                    borderRadius: '9999px',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1rem',
                  }
            }
            onMouseEnter={moveNoButton}
            onTouchStart={moveNoButton}
          >
            No 💔
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default LovePage;