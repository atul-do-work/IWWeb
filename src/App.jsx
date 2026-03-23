import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Load EmailJS dynamically
    const loadEmailJS = () => {
      return new Promise((resolve, reject) => {
        // If already loaded
        if (window.emailjs) {
          window.emailjs.init('FOglBeof19V01eIHg');
          resolve();
          return;
        }

        const script = document.createElement('script');
        // Updated reliable CDN link
        script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
        script.type = 'text/javascript';
        script.async = true;

        script.onload = () => {
          // The newer SDK might need a tiny beat to attach to window
          if (window.emailjs) {
            window.emailjs.init('FOglBeof19V01eIHg');
            resolve();
          } else {
            reject(new Error('EmailJS object not found on window'));
          }
        };

        script.onerror = () => reject(new Error('Failed to load EmailJS library'));
        document.head.appendChild(script);
      });
    };

    loadEmailJS().catch((error) => {
      console.error('EmailJS initialization error:', error);
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
