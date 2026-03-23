import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [sending, setSending] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    // Check if emailjs is loaded
    if (!window.emailjs) {
      alert('Email service is loading. Please wait a moment and try again.');
      setSending(false);
      return;
    }

    const templateParams = {
      title: 'New Contact Form Submission',
      name: formData.name,
      email: formData.email,
      message: formData.message + '\n\nPhone: ' + formData.phone
    };

    window.emailjs.send('service_lj2lvm9', 'template_6jxj9ql', templateParams)
      .then((response) => {
        alert('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setSending(false);
      })
      .catch((error) => {
        alert('Failed to send message. Error: ' + (error.text || error.message));
        console.error('EmailJS error:', error);
        setSending(false);
      });
  };

  return (
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
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your Name"
              required
            />
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
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn" disabled={sending}>
            {sending ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
