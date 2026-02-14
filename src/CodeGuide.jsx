import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Github, Copy, CheckCircle, ExternalLink } from 'lucide-react';

// Love-themed background image
const LOVE_BACKGROUND_URL = 'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';

function CodeGuide() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const steps = [
    {
      title: "Step 1: Fork the Repository",
      description: "Click the Fork button to create your own copy of this project.",
      icon: "",
      details: [
        { text: "Visit ", link: { url: "https://github.com/jayanthgopala/love", text: "GitHub Repository" } },
        "Look for the Fork button in the top-right corner",
        "Click it to create your own copy of the repository",
        "This creates a copy in your GitHub account that you can modify"
      ],
      highlight: true
    },
    {
      title: "Step 2: Clone Your Fork",
      description: "Download the code to your local machine using Git.",
      icon: "📥",
      command: "git clone https://github.com/YOUR_USERNAME/love.git",
      details: [
        "Open your terminal/command prompt",
        "Navigate to your desired directory",
        "Run the clone command above (replace YOUR_USERNAME with your GitHub username)",
        "Navigate into the project folder: cd love"
      ]
    },
    {
      title: "Step 3: Set Up Environment Variables",
      description: "Configure your EmailJS credentials for email functionality.",
      icon: "🔧",
      details: [
        "Create a .env file in the root directory",
        "Add your EmailJS credentials:",
        "VITE_EMAILJS_PUBLIC_KEY=your_public_key",
        "VITE_EMAILJS_SERVICE_ID=your_service_id",
        "VITE_EMAILJS_TEMPLATE_ID=your_template_id",
        "Get these from https://www.emailjs.com/"
      ]
    },
    {
      title: "Step 4: Deploy to Netlify",
      description: "Deploy your customized app to Netlify for free hosting.",
      icon: "🚀",
      details: [
        "Go to https://netlify.com and sign up/login",
        "Click 'Add new site' → 'Import an existing project'",
        "Connect your GitHub account and select your forked repository",
        "Netlify will automatically build and deploy your site",
        "Get your live URL and share it with your loved one! 💕"
      ]
    }
  ];

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: `url('${LOVE_BACKGROUND_URL}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: isMobile ? '5rem 0 1rem 0' : '2rem 1rem',
      }}
    >
      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        style={{
          position: 'fixed',
          top: '1rem',
          left: '1rem',
          padding: isMobile ? '0.4rem 0.6rem' : '0.75rem 1rem',
          backgroundColor: 'rgba(255,255,255,0.9)',
          color: '#374151',
          borderRadius: '0.5rem',
          border: 'none',
          cursor: 'pointer',
          fontSize: isMobile ? '0.7rem' : '0.875rem',
          display: 'flex',
          alignItems: 'center',
          gap: isMobile ? '0.25rem' : '0.5rem',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          zIndex: 10,
        }}
      >
        <ArrowLeft size={isMobile ? 14 : 16} />
        Back
      </button>

      {/* GitHub Link */}
      <a
        href="https://github.com/jayanthgopala/love"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          top: '1rem',
          right: '1rem',
          padding: isMobile ? '0.4rem 0.6rem' : '0.75rem 1rem',
          backgroundColor: '#24292e',
          color: 'white',
          borderRadius: '0.5rem',
          textDecoration: 'none',
          fontSize: isMobile ? '0.7rem' : '0.875rem',
          display: 'flex',
          alignItems: 'center',
          gap: isMobile ? '0.25rem' : '0.5rem',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          zIndex: 10,
        }}
      >
        <Github size={isMobile ? 14 : 16} />
        View on GitHub
        <ExternalLink size={isMobile ? 12 : 14} />
      </a>

      <div
        style={{
          maxWidth: '48rem',
          margin: isMobile ? '0' : '0 auto',
          backgroundColor: 'rgba(255,255,255,0.95)',
          borderRadius: isMobile ? '0' : '1rem',
          padding: isMobile ? '0.75rem' : '2rem',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
          width: '100%',
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '1.25rem' : '2rem' }}>
          <div style={{ fontSize: isMobile ? '2rem' : '3rem', marginBottom: isMobile ? '0.5rem' : '1rem' }}>💻</div>
          <h1
            style={{
              fontSize: isMobile ? '1.5rem' : '2.25rem',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '0.5rem',
              lineHeight: '1.2',
            }}
          >
            How to Use This Code
          </h1>
          <p
            style={{
              fontSize: isMobile ? '0.875rem' : '1.125rem',
              color: '#6b7280',
              maxWidth: '36rem',
              margin: '0 auto',
              lineHeight: '1.5',
            }}
          >
            Follow these simple steps to fork, set up, and customize your own love proposal app! ❤️
          </p>
        </div>

        {/* Steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '1rem' : '2rem' }}>
          {steps.map((step, index) => (
            <div
              key={index}
              style={{
                backgroundColor: step.highlight ? '#fef3c7' : 'white',
                borderRadius: isMobile ? '0.5rem' : '0.75rem',
                padding: isMobile ? '0.75rem' : '1.5rem',
                border: step.highlight ? '2px solid #f59e0b' : '1px solid #e5e7eb',
                boxShadow: step.highlight ? '0 4px 12px rgba(245,158,11,0.3)' : '0 1px 3px rgba(0,0,0,0.1)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '0.5rem' : '1rem', marginBottom: isMobile ? '0.75rem' : '1rem' }}>
                <div style={{ fontSize: isMobile ? '1.5rem' : '2rem', flexShrink: 0 }}>{step.icon}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3
                    style={{
                      fontSize: isMobile ? '1rem' : '1.25rem',
                      fontWeight: 'bold',
                      color: '#1f2937',
                      margin: '0 0 0.25rem 0',
                      lineHeight: '1.3',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: isMobile ? '0.75rem' : '0.875rem',
                      color: '#6b7280',
                      margin: 0,
                      lineHeight: '1.4',
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>

              {step.highlight && (
                <div style={{ textAlign: 'center', marginBottom: isMobile ? '1rem' : '1.5rem' }}>
                  <img
                    src="/image.png"
                    alt="GitHub Fork Button"
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                      maxHeight: isMobile ? '150px' : '200px',
                      borderRadius: isMobile ? '4px' : '8px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                      border: '2px solid #e5e7eb'
                    }}
                  />
                  <p style={{
                    fontSize: isMobile ? '0.65rem' : '0.75rem',
                    color: '#6b7280',
                    marginTop: '0.5rem',
                    fontStyle: 'italic',
                    lineHeight: '1.4',
                  }}>
                    Click this button on GitHub to fork the repository
                  </p>
                </div>
              )}

              {step.command && (
                <div
                  style={{
                    backgroundColor: '#f3f4f6',
                    borderRadius: '0.5rem',
                    padding: isMobile ? '0.5rem' : '1rem',
                    marginBottom: isMobile ? '0.75rem' : '1rem',
                    fontFamily: 'monospace',
                    fontSize: isMobile ? '0.65rem' : '0.875rem',
                    color: '#374151',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.5rem',
                    overflowX: 'auto',
                  }}
                >
                  <code style={{ wordBreak: 'break-all', flex: 1 }}>{step.command}</code>
                  <button
                    onClick={() => copyToClipboard(step.command)}
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#6b7280',
                      padding: '0.25rem',
                      borderRadius: '0.25rem',
                    }}
                    title="Copy command"
                  >
                    <Copy size={16} />
                  </button>
                </div>
              )}

              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                }}
              >
                {step.details.map((detail, detailIndex) => (
                  <li
                    key={detailIndex}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                      fontSize: isMobile ? '0.75rem' : '0.875rem',
                      color: '#4b5563',
                      lineHeight: '1.5',
                      wordBreak: 'break-word',
                    }}
                  >
                    <CheckCircle
                      size={16}
                      style={{
                        color: '#10b981',
                        marginTop: '0.125rem',
                        flexShrink: 0,
                      }}
                    />
                    <span>
                      {typeof detail === 'string' ? (
                        detail
                      ) : (
                        <>
                          {detail.text}
                          <a
                            href={detail.link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              color: '#2563eb',
                              textDecoration: 'underline',
                              fontWeight: '500',
                            }}
                          >
                            {detail.link.text}
                          </a>
                        </>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            textAlign: 'center',
            marginTop: isMobile ? '1.25rem' : '2rem',
            padding: isMobile ? '1rem' : '1.5rem',
            backgroundColor: '#fef3c7',
            borderRadius: isMobile ? '0.5rem' : '0.75rem',
            border: '1px solid #f59e0b',
          }}
        >
          <div style={{ fontSize: isMobile ? '1.5rem' : '2rem', marginBottom: isMobile ? '0.5rem' : '1rem' }}>🎉</div>
          <h3
            style={{
              fontSize: isMobile ? '1rem' : '1.25rem',
              fontWeight: 'bold',
              color: '#92400e',
              marginBottom: '0.5rem',
              lineHeight: '1.3',
            }}
          >
            Happy Coding! 💻❤️
          </h3>
          <p
            style={{
              fontSize: isMobile ? '0.75rem' : '0.875rem',
              color: '#78350f',
              margin: 0,
              lineHeight: '1.5',
            }}
          >
            Need help with deployment? Check the{' '}
            <a
              href="https://github.com/jayanthgopala/love#readme"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#dc2626',
                textDecoration: 'underline',
                fontWeight: 'bold',
              }}
            >
              README
            </a>{' '}
            or open an issue on{' '}
            <a
              href="https://github.com/jayanthgopala/love"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#dc2626',
                textDecoration: 'underline',
                fontWeight: 'bold',
              }}
            >
              GitHub
            </a>
            ! Happy deploying! 🚀❤️
          </p>
        </div>
      </div>
    </div>
  );
}

export default CodeGuide;