function About() {
  return (
    <section className="about-section" id="about">
      <h2 className="section-title">About Us</h2>
      <div className="about-content">
        <div className="about-text">
          <h2>Why Choose IndianWorker?</h2>
          <p>
            IndianWorker is India's leading platform connecting skilled workers with customers seeking reliable construction, industrial, and home services.
          </p>
          <p>
            With thousands of verified professionals, we ensure quality workmanship, transparent pricing, and customer satisfaction on every project.
          </p>
          <p>
            Our mission is to make professional services accessible and affordable to everyone, while empowering skilled workers to grow their businesses.
          </p>
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

export default About;
