import { createRoot } from 'react-dom/client';
import './index.css';
import { StrictMode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Home } from './pages/home.tsx';
import { Form } from './pages/form.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
