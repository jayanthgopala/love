import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import emailjs from '@emailjs/browser';

// EmailJS credentials
const EMAILJS_PUBLIC_KEY = 'z_DvzHDx07HpGHyzC';
const EMAILJS_SERVICE_ID = 'service_n0izsyk';
const EMAILJS_TEMPLATE_ID = 'template_murza2c';

function App() {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [showLoveMessage, setShowLoveMessage] = useState(false);
  const [isNoButtonMoved, setIsNoButtonMoved] = useState(false);
  const [message, setMessage] = useState(''); // State to hold the message
  const [emailSent, setEmailSent] = useState(false); // State to track if the email was sent

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

    try {
      const templateParams = {
        to_email: 'JAYANTH GOPALA V',
        message: `from BHANU \n BHANU said YES! at ${new Date().toLocaleString()}`,
      };

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', response);
    } catch (error) {
      console.error('Failed to send email:', error);
    }
  };

  const handleSendMessage = async () => {
    if (message.trim() === '') {
      alert('Please write a message before sending!');
      return;
    }

    try {
      const templateParams = {
        to_email: 'JAYANTH GOPALA V', // Your email address
        message: `Message from BHANU: \n\n${message}\n\nSent at: ${new Date().toLocaleString()}`,
      };

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('Message sent successfully:', response);
      setEmailSent(true); // Set emailSent to true after sending
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const handleMessageChange = (e) => {
    setMessage(e.target.value); // Update the message state with the input value
  };

  if (showLoveMessage) {
    return (
      <div
        className="min-h-screen bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-2xl max-w-lg text-center">
          <Heart className="w-16 h-16 text-red-500 mx-auto mb-4 animate-bounce" />
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            I Love You! ❤️
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            You've made me the happiest person alive BHANU💗
          </p>
          <div className="text-sm text-gray-600">
            Forever yours, with all my heart ❤️
          </div>

          {/* Sweet message for Jayanth */}
          <p className="text-xl text-gray-700 mt-6 mb-4">
            A sweet message for you, Jayanth: 
            <br />
            "Your presence makes everything beautiful, and my heart is filled with joy every time I think of you. 💖"
          </p>

          {/* Textbox to type message after Yes is clicked */}
          <textarea
            value={message}
            onChange={handleMessageChange}
            placeholder="Write a message for me 💌"
            className="w-full p-4 mt-4 text-lg rounded-lg border-2 border-gray-300 focus:outline-none focus:border-purple-500"
            rows="4"
          />

          {/* Send Button */}
          <button
            onClick={handleSendMessage}
            className="px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg mt-4"
          >
            Send Message 📩
          </button>

          {/* Show success message after sending */}
          {emailSent && (
            <div className="mt-4 text-green-500">
              Your message has been sent successfully! 💌
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-r from-pink-300 to-purple-300 flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-2xl max-w-lg text-center">
        <Heart className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Will You Be Mine Forever?
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Every moment spent with you feels like a beautiful dream. Would you
          make me the happiest person by saying yes?
        </p>
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={handleYesClick}
            className="px-8 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
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
                  }
                : {}
            }
            onMouseEnter={moveNoButton}
            onTouchStart={moveNoButton} // Add touch event here
            className="px-8 py-3 bg-gray-500 text-white rounded-full hover:bg-gray-600"
          >
            No 💔
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
