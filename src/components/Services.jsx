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

export default Services;
