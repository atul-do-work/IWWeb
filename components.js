// Navbar Component
function Navbar() {
    const [activeSection, setActiveSection] = React.useState('home');

    const scrollToSection = (id) => {
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return React.createElement('header', null,
        React.createElement('div', { className: 'logo' },
            React.createElement('img', { src: 'assets/Indian.png', alt: 'IndianWorker Logo', style: { width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' } }),
            React.createElement('span', null, 'IndianWorker')
        ),
        React.createElement('nav', null,
            React.createElement('button', { onClick: () => scrollToSection('home') }, 'Home'),
            React.createElement('button', { onClick: () => scrollToSection('services') }, 'Services'),
            React.createElement('button', { onClick: () => scrollToSection('about') }, 'About')
        ),
        React.createElement('button', { className: 'play-store-btn', onClick: () => alert('Download from Play Store coming soon!') },
            React.createElement('img', { src: 'https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png', alt: 'Get it on Google Play' })
        )
    );
}

// Hero Component
function Hero() {
    return React.createElement('section', { className: 'hero-section', id: 'home', style: { backgroundImage: 'url(assets/home.png)' } },
        React.createElement('div', { className: 'hero-overlay' }),
        React.createElement('div', { className: 'hero-content' },
            React.createElement('h1', { className: 'hero-heading' }, "India's leading blue collar workforce platform"),
            React.createElement('p', { className: 'hero-tagline' }, 'Connecting elite labor across Construction, Warehouse, and Automotive with precision & trust.'),
            React.createElement('p', { className: 'hero-subtext' }, '\u0915\u093E\u092E \u092D\u0940\u0902, \u0915\u092E\u093E\u0908 \u092D\u0940\u0902, \u0938\u092E\u094D\u092E\u093E\u0928 \u092D\u0940')
        )
    );
}

// Services Component
function Services() {
    const services = [
        { icon: '\u{1F3E2}', title: 'Construction Workers', description: 'Professional construction services for residential and commercial projects.' },
        { icon: '\u{1F3ED}', title: 'Warehouse Workers', description: 'Skilled warehouse workers for efficient storage and logistics management.' },
        { icon: '\u{1F3D7}\uFE0F', title: 'Factory Workers', description: 'Experienced factory workers for manufacturing and production operations.' },
        { icon: '\u{1F4DA}', title: 'Training to Workers', description: 'Comprehensive training programs to enhance worker skills and efficiency.' },
        { icon: '\u{1F527}', title: 'Plumbing', description: 'Expert plumbing solutions for all your water and drainage needs.' },
        { icon: '\u{26A1}', title: 'Electrical', description: 'Licensed electrical work for safety and efficiency.' }
    ];

    return React.createElement('section', { className: 'services-section', id: 'services' },
        React.createElement('h2', { className: 'section-title' }, 'Our Services'),
        React.createElement('div', { className: 'services-grid' },
            services.map((service, index) =>
                React.createElement('div', { key: index, className: 'service-card' },
                    React.createElement('div', { className: 'service-icon' }, service.icon),
                    React.createElement('h3', null, service.title),
                    React.createElement('p', null, service.description)
                )
            )
        )
    );
}

// Ecosystem Component
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

    return React.createElement('section', { className: 'ecosystem-section', id: 'ecosystem' },
        React.createElement('div', { className: 'ecosystem-header' },
            React.createElement('p', { className: 'ecosystem-label' }, 'THE ECOSYSTEM'),
            React.createElement('h2', { className: 'ecosystem-title' }, 'Frictionless Deployment.')
        ),
        React.createElement('div', { className: 'ecosystem-grid' },
            features.map((feature, index) =>
                React.createElement('div', { key: index, className: 'ecosystem-card' },
                    React.createElement('div', { className: 'card-number' }, feature.number),
                    React.createElement('h3', null, feature.title),
                    React.createElement('p', null, feature.description),
                    React.createElement('div', { className: 'card-tag' }, feature.tag)
                )
            )
        )
    );
}

// About Component
function About() {
    return React.createElement('section', { className: 'about-section', id: 'about' },
        React.createElement('h2', { className: 'section-title' }, 'About Us'),
        React.createElement('div', { className: 'about-content' },
            React.createElement('div', { className: 'about-text' },
                React.createElement('h2', null, 'Why Choose IndianWorker?'),
                React.createElement('p', null, "IndianWorker is India's leading platform connecting skilled workers with customers seeking reliable construction, industrial, and home services."),
                React.createElement('p', null, "With thousands of verified professionals, we ensure quality workmanship, transparent pricing, and customer satisfaction on every project."),
                React.createElement('p', null, "Our mission is to make professional services accessible and affordable to everyone, while empowering skilled workers to grow their businesses."),
                React.createElement('div', { className: 'about-benefits' },
                    React.createElement('div', { className: 'benefit-item' }, 'Verified Professionals'),
                    React.createElement('div', { className: 'benefit-item' }, 'Transparent Pricing'),
                    React.createElement('div', { className: 'benefit-item' }, '100% Satisfaction Guarantee'),
                    React.createElement('div', { className: 'benefit-item' }, '24/7 Customer Support')
                )
            ),
            React.createElement('div', { className: 'about-image' },
                React.createElement('img', { src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=500&fit=crop', alt: 'Professional worker' })
            )
        )
    );
}

// Contact Component
function Contact() {
    const [formData, setFormData] = React.useState({
        companyName: '',
        email: '',
        phone: '',
        workerRequired: '0-50',
        message: ''
    });
    const [sending, setSending] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false);
    const [errors, setErrors] = React.useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
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
        } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
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
            .then((response) => {
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

    return React.createElement(React.Fragment, null,
        React.createElement('section', { className: 'contact-section', id: 'contact' },
            React.createElement('h2', { className: 'section-title' }, 'Get In Touch'),
            React.createElement('div', { className: 'contact-content' },
                React.createElement('div', { className: 'contact-info' },
                    React.createElement('h3', null, "Don't Be Shy"),
                    React.createElement('p', null, 'Feel free to get in touch with us. We are always open to discussing new projects requirements, Bulk Hiring or opportunities to be part of your visions.'),
                    React.createElement('div', null,
                        React.createElement('span', null, '\u2709\uFE0F'),
                        React.createElement('div', null,
                            React.createElement('strong', null, 'Mail me'),
                            React.createElement('p', null, 'indianworker.in@gmail.com')
                        )
                    ),
                    React.createElement('div', null,
                        React.createElement('span', null, '\u{1F4F1}'),
                        React.createElement('div', null,
                            React.createElement('strong', null, 'Call me'),
                            React.createElement('p', null, '9579047919')
                        )
                    )
                ),
                React.createElement('form', { className: 'contact-form', onSubmit: handleSubmit },
                    React.createElement('div', { className: 'form-group' },
                        React.createElement('label', { htmlFor: 'companyName' }, 'Company Name'),
                        React.createElement('input', {
                            type: 'text',
                            id: 'companyName',
                            name: 'companyName',
                            value: formData.companyName,
                            onChange: handleInputChange,
                            placeholder: 'e.g. Tata Projects',
                            required: true
                        }),
                        errors.companyName && React.createElement('span', { className: 'error' }, errors.companyName)
                    ),
                    React.createElement('div', { className: 'form-group' },
                        React.createElement('label', { htmlFor: 'email' }, 'Email Address'),
                        React.createElement('input', {
                            type: 'email',
                            id: 'email',
                            name: 'email',
                            value: formData.email,
                            onChange: handleInputChange,
                            placeholder: 'Enter a valid email address',
                            required: true
                        }),
                        errors.email && React.createElement('span', { className: 'error' }, errors.email)
                    ),
                    React.createElement('div', { className: 'form-group' },
                        React.createElement('label', { htmlFor: 'workerRequired' }, 'Worker Required'),
                        React.createElement('select', {
                            id: 'workerRequired',
                            name: 'workerRequired',
                            value: formData.workerRequired,
                            onChange: handleInputChange,
                            required: true
                        },
                            React.createElement('option', { value: '0-50' }, '0 to 50'),
                            React.createElement('option', { value: '50-200' }, '50 to 200'),
                            React.createElement('option', { value: '200-500' }, '200 to 500'),
                            React.createElement('option', { value: '500+' }, '500+')
                        )
                    ),
                    React.createElement('div', { className: 'form-group' },
                        React.createElement('label', { htmlFor: 'phone' }, 'Phone Number'),
                        React.createElement('input', {
                            type: 'tel',
                            id: 'phone',
                            name: 'phone',
                            value: formData.phone,
                            onChange: handleInputChange,
                            placeholder: 'Enter your phone number',
                            required: true
                        }),
                        errors.phone && React.createElement('span', { className: 'error' }, errors.phone)
                    ),
                    React.createElement('div', { className: 'form-group' },
                        React.createElement('label', { htmlFor: 'message' }, 'Work Inquiry'),
                        React.createElement('textarea', {
                            id: 'message',
                            name: 'message',
                            value: formData.message,
                            onChange: handleInputChange,
                            placeholder: 'Enter your message',
                            required: true
                        }),
                        errors.message && React.createElement('span', { className: 'error' }, errors.message)
                    ),
                    React.createElement('button', { type: 'submit', className: 'submit-btn', disabled: sending },
                        sending ? 'Sending...' : 'Submit'
                    )
                )
            )
        ),
        showModal && React.createElement('div', { className: 'modal-overlay', onClick: closeModal },
            React.createElement('div', { className: 'modal-content', onClick: (e) => e.stopPropagation() },
                React.createElement('h3', null, 'Thank You!'),
                React.createElement('p', null, "Your message has been sent successfully. We'll get back to you soon."),
                React.createElement('button', { className: 'modal-close-btn', onClick: closeModal }, 'Close')
            )
        )
    );
}

// Footer Component
function Footer() {
    return React.createElement('footer', null,
        React.createElement('h3', null, 'IndianWorker'),
        React.createElement('p', null, '\u0915\u093E\u092E \u092D\u0940\u0902, \u0915\u092E\u093E\u0908 \u092D\u0940\u0902, \u0938\u092E\u094D\u092E\u093E\u0928 \u092D\u0940'),
        React.createElement('p', null, '\u00A9 2025 IndianWorker. All rights reserved.')
    );
}

// Main App Component
function App() {
    React.useEffect(() => {
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

    return React.createElement(React.Fragment, null,
        React.createElement(Navbar),
        React.createElement(Hero),
        React.createElement(Services),
        React.createElement(Ecosystem),
        React.createElement(About),
        React.createElement(Contact),
        React.createElement(Footer)
    );
}