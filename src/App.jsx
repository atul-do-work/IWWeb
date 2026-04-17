import React, { useState, useEffect } from 'react';

function Navbar({ onPlayStoreClick }) {
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
        <img
          src="/assets/Indian.png"
          alt="IndianWorker Logo"
          style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }}
        />
        <span>IndianWorker</span>
      </div>

      <nav>
        <button onClick={() => scrollToSection('home')}>Home</button>
        <button onClick={() => scrollToSection('services')}>Services</button>
        <button onClick={() => scrollToSection('about')}>About</button>
      </nav>

      <button className="play-store-btn" onClick={onPlayStoreClick}>
        <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" />
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero-section" id="home" style={{ backgroundImage: 'url(/assets/home.png)' }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-heading">India's leading Blue collar workforce platform</h1>
        <p className="hero-tagline">Connecting elite labor across Construction, Warehouse, and Automotive with precision & trust.</p>
        <p className="hero-subtext">काम भी, कमाई भी, सम्मान भी</p>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { icon: '🏢', title: 'Construction Workers', description: 'Professional construction services for residential and commercial projects.' },
    { icon: '🏭', title: 'Warehouse Workers', description: 'Skilled warehouse workers for efficient storage and logistics management.' },
    { icon: '🏗️', title: 'Factory Workers', description: 'Experienced factory workers for manufacturing and production operations.' },
    { icon: '📚', title: 'Training to Workers', description: 'Comprehensive training programs to enhance worker skills and efficiency.' },
    { icon: '🔧', title: 'Plumbing', description: 'Expert plumbing solutions for all your water and drainage needs.' },
    { icon: '⚡', title: 'Electrical', description: 'Licensed electrical work for safety and efficiency.' }
  ];

  return (
    <section className="services-section" id="services">
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Ecosystem() {
  const features = [
    {
      number: '01',
      title: 'HIRE WITH PRECISION',
      description: 'Workers define the required skills, set competitive wages, and specify job duration directly within the app.',
      tag: '⚡ INSTANT LISTING'
    },
    {
      number: '02',
      title: 'INSTANT MATCHING',
      description: 'Nearby, verified workers receive instant push notifications and accept requests in real-time based on proximity.',
      tag: '📍 LOCATION-BASED'
    },
    {
      number: '03',
      title: 'GUARANTEED PAYOUTS',
      description: 'Workers begin their shift immediately. Earnings are disbursed instantly or weekly through our secure digital gateway.',
      tag: '💳 SECURE TRANSFER'
    }
  ];

  return (
    <section className="ecosystem-section" id="ecosystem">
      <div className="ecosystem-header">
        <p className="ecosystem-label">THE PLATFORM</p>
        <h2 className="ecosystem-title">Hire Fast. Work Instantly.</h2>
      </div>

      <div className="ecosystem-grid">
        {features.map((feature, index) => (
          <div key={index} className="ecosystem-card">
            <div className="card-number">{feature.number}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <div className="card-tag">{feature.tag}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about-section" id="about">
      <h2 className="section-title">About Us</h2>
      <div className="about-content">
        <div className="about-text">
          <h2>Why Choose IndianWorker?</h2>
          <p>
            IndianWorker connects skilled workers with customers who need reliable construction, industrial, and home services—quickly and efficiently.          </p>
          <p>
            With a network of verified professionals, we ensure quality work, fair pricing, and dependable service every time.          </p>
          <p>
            Our mission is simple: make skilled services easy to access and affordable for everyone, while helping workers find more opportunities and grow their income.          </p>
          <div className="about-benefits">
            <div className="benefit-item">Verified Professionals</div>
            <div className="benefit-item">Transparent Pricing</div>
            <div className="benefit-item">100% Satisfaction Guarantee</div>
            <div className="benefit-item">24/7 Customer Support</div>
          </div>
        </div>
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=500&fit=crop" alt="Professional worker" />
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    phone: '',
    workerRequired: '0-50',
    message: ''
  });
  const [sending, setSending] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === 'phone') {
      newValue = value.replace(/\D/g, '').slice(0, 10);
    }

    setFormData({
      ...formData,
      [name]: newValue
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handlePhoneKeyDown = (e) => {
    const allowedKeys = [
      'Backspace',
      'Delete',
      'ArrowLeft',
      'ArrowRight',
      'Tab',
      'Home',
      'End'
    ];

    if (allowedKeys.includes(e.key)) {
      return;
    }

    if (/\d/.test(e.key) && formData.phone.length >= 10) {
      e.preventDefault();
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setSending(true);

    if (!window.emailjs) {
      alert('Email service is loading. Please wait a moment and try again.');
      setSending(false);
      return;
    }

    const templateParams = {
      title: 'New Contact Form Submission',
      name: formData.companyName,
      email: formData.email,
      phone: formData.phone,
      workerRequired: formData.workerRequired,
      message: 'Work Inquiry: ' + formData.message
    };

    window.emailjs.send('service_lj2lvm9', 'template_6jxj9ql', templateParams)
      .then(() => {
        setShowModal(true);
        setFormData({ companyName: '', email: '', phone: '', workerRequired: '0-50', message: '' });
        setSending(false);
      })
      .catch((error) => {
        alert('Failed to send message. Error: ' + (error.text || error.message));
        console.error('EmailJS error:', error);
        setSending(false);
      });
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <section className="contact-section" id="contact">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Don't Be Shy</h3>
            <p>Feel free to get in touch with us. We are always open to discussing new projects requirements, Bulk Hiring or opportunities to be part of your visions.</p>
            <div>
              <span>✉️</span>
              <div>
                <strong>Mail me</strong>
                <p>indianworker.in@gmail.com</p>
              </div>
            </div>
            <div>
              <span>📱</span>
              <div>
                <strong>Call me</strong>
                <p>9579047919</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="companyName">Company Name</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="e.g. Tata Projects"
                required
              />
              {errors.companyName && <span className="error">{errors.companyName}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter a valid email address"
                required
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="workerRequired">Worker Required</label>
              <select
                id="workerRequired"
                name="workerRequired"
                value={formData.workerRequired}
                onChange={handleInputChange}
                required
              >
                <option value="0-50">0 to 50</option>
                <option value="50-200">50 to 200</option>
                <option value="200-500">200 to 500</option>
                <option value="500+">500+</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                onKeyDown={handlePhoneKeyDown}
                placeholder="Enter your phone number"
                maxLength={10}
                pattern="\d{10}"
                title="Enter exactly 10 digits"
                required
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="message">Work Inquiry</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Enter your message"
                required
              ></textarea>
              {errors.message && <span className="error">{errors.message}</span>}
            </div>
            <button type="submit" className="submit-btn" disabled={sending}>
              {sending ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>
      </section>

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Thank You!</h3>
            <p>Your message has been sent successfully. We'll get back to you soon.</p>
            <button className="modal-close-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

function FloatingActions() {
  const whatsappNumber = '919579047919';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20IndianWorker%2C%20I%20need%20help%20with%20worker%20hiring`;
  const phoneNumber = '+919579047919';

  return (
    <div className="floating-actions">
      <a href={whatsappLink} className="floating-btn whatsapp-btn" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <i className="fab fa-whatsapp" aria-hidden="true"></i>
      </a>
      <a href={`tel:${phoneNumber}`} className="floating-btn call-btn" aria-label="Call">
        <i className="fas fa-phone" aria-hidden="true"></i>
      </a>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <h3>IndianWorker</h3>
      <p>काम भी, कमाई भी, सम्मान भी,</p>

      <div className="footer-links">
        <a href="/privacy-policy.html">Privacy Policy</a>
        <a href="/terms-and-conditions.html">Terms & Conditions</a>
      </div>

      <p>&copy; 2025 IndianWorker. All rights reserved.</p>
    </footer>
  );
}

function App() {
  const [showPlayStoreModal, setShowPlayStoreModal] = useState(false);

  useEffect(() => {
    const loadEmailJS = () => {
      return new Promise((resolve, reject) => {
        if (window.emailjs) {
          window.emailjs.init('FOglBeof19V01eIHg');
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
        script.type = 'text/javascript';
        script.async = true;

        script.onload = () => {
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

  const openPlayStoreModal = () => setShowPlayStoreModal(true);
  const closePlayStoreModal = () => setShowPlayStoreModal(false);

  return (
    <>
      <Navbar onPlayStoreClick={openPlayStoreModal} />
      <Hero />
      <Services />
      <Ecosystem />
      <About />
      <Contact />
      <Footer />
      <FloatingActions />

      {showPlayStoreModal && (
        <div className="modal-overlay" onClick={closePlayStoreModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Download Coming Soon</h3>
            <p>Our app is not yet available on the Play Store. We will notify you once it is live.</p>
            <button className="modal-close-btn" onClick={closePlayStoreModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
