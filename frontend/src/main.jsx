import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

const RootWithAOS = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,    
      once: true,       
      offset: 120,      
      easing: 'ease-in-out',
    });
  }, []);

  return <App />;
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RootWithAOS />
  </StrictMode>
);
