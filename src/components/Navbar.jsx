import { useState } from 'react';

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <div className="logo">
        <img src="assets/Indian.png" alt="IndianWorker Logo" style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
        <span>IndianWorker</span>
      </div>
      
      <nav>
        <button onClick={() => scrollToSection('home')}>Home</button>
        <button onClick={() => scrollToSection('services')}>Services</button>
        <button onClick={() => scrollToSection('about')}>About</button>
      </nav>

      <button className="play-store-btn" onClick={() => alert('Download from Play Store coming soon!')}>
        <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" />
      </button>
    </header>
  );
}

export default Navbar;
