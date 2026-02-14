import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmailGenerator from './EmailGenerator.jsx';
import LovePage from './LovePage.jsx';
import CodeGuide from './CodeGuide.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmailGenerator />} />
        <Route path="/love" element={<LovePage />} />
        <Route path="/code-guide" element={<CodeGuide />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
