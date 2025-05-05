import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GenuineSchool } from './GenuineSchool.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GenuineSchool />
  </StrictMode>,
)
