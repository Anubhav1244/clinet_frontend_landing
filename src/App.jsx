import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Brush,
  Camera,
  ChevronRight,
  Globe2,
  Handshake,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  PenTool,
  Phone,
  Printer,
  Rocket,
  Search,
  ShoppingCart,
  Target,
  TrendingUp,
  Users,
  Utensils,
} from 'lucide-react';
import React from 'react';
const services = [
  {
    icon: Globe2,
    title: 'Website Development',
    copy: 'Modern, fast, responsive websites built to present your business clearly on every screen.',
  },
  {
    icon: Search,
    title: 'SEO & Content',
    copy: 'Improve rankings, attract the right audience, and grow organic discovery with smart content.',
  },
  {
    icon: Megaphone,
    title: 'Social Media Marketing',
    copy: 'Campaigns, creative posts, and platform strategy that build brand attention and leads.',
  },
  {
    icon: Users,
    title: 'Social Media Handling',
    copy: 'Account management, planning, posting, engagement tracking, and consistent brand presence.',
  },
  {
    icon: Brush,
    title: 'Branding & Graphic Design',
    copy: 'Logos, brand systems, brochures, banners, and visuals that make your business stand out.',
  },
  {
    icon: Printer,
    title: 'Printing Services',
    copy: 'Visiting cards, flyers, brochures, packaging, banners, and polished print-ready material.',
  },
  {
    icon: Target,
    title: 'Google & Meta Ads',
    copy: 'Targeted ad campaigns focused on quality leads, measurable ROI, and sales growth.',
  },
  {
    icon: Camera,
    title: 'Content Creation',
    copy: 'Photo, video, reels, and campaign assets that tell your brand story with confidence.',
  },
  {
    icon: BarChart3,
    title: 'Business Growth Strategy',
    copy: 'Data-driven planning to improve visibility, conversions, customer trust, and long-term growth.',
  },
];

const industries = [
  { icon: Utensils, title: 'Restaurants', copy: 'Attract more customers with food-first digital campaigns.' },
  { icon: BadgeCheck, title: 'Hotels', copy: 'Boost bookings and visibility with trusted online presence.' },
  { icon: Rocket, title: 'Startups', copy: 'Launch your brand, generate leads, and grow faster.' },
  { icon: ShoppingCart, title: 'E-commerce', copy: 'Increase traffic, improve conversions, and scale online sales.' },
];

const stats = [
  ['50+', 'Happy Clients'],
  ['100+', 'Projects Completed'],
  ['98%', 'Client Satisfaction'],
  ['5+', 'Years of Experience'],
];

function App() {
  return (
    <div className="site-shell">
      <nav className="navbar navbar-expand-lg fixed-top primora-nav">
        <div className="container">
          <a className="navbar-brand brand-lockup" href="#home" aria-label="Primora Marketing home">
            <span className="brand-mark">P</span>
            <span>
              <strong>PRIMORA</strong>
              <small>MARKETING</small>
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <Menu size={24} />
          </button>
          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav mx-auto">
              {['Home', 'Services', 'Industries', 'About', 'Contact'].map((item) => (
                <li className="nav-item" key={item}>
                  <a className="nav-link" href={`#${item.toLowerCase()}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <a className="btn btn-gold nav-cta" href="#contact">
              Let&apos;s Talk <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </nav>

      <main id="home">
        <section className="hero-section">
          <div className="hero-media" aria-hidden="true" />
          <div className="container hero-content">
            <div className="row align-items-center min-vh-100 g-5">
              <div className="col-lg-6">
                <p className="eyebrow">Smart Strategies.</p>
                <h1>
                  Real <span>Results.</span>
                </h1>
                <p className="hero-copy">
                  Primora Marketing helps businesses grow with result-driven digital marketing, web
                  development, branding, social campaigns, ads, printing, and practical growth strategy.
                </p>
                <div className="hero-actions">
                  <a className="btn btn-gold" href="#services">
                    Our Services <ChevronRight size={18} />
                  </a>
                  <a className="btn btn-outline-dark" href="#contact">
                    Request a Quote
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="growth-panel">
                  <div className="chart-card">
                    <TrendingUp size={42} />
                    <span>Growth Overview</span>
                    <strong>+72%</strong>
                  </div>
                  <div className="hero-device">
                    <div className="device-top" />
                    <div className="device-screen">
                      <p>Digital Solutions for Your Business</p>
                      <div className="bars">
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="brand-strip">
          <div className="container">
            <span>Trusted by growing brands</span>
            <strong>The Urban Table</strong>
            <strong>Skyline Hotels</strong>
            <strong>TechNova</strong>
            <strong>StyleHub</strong>
            <strong>Cartify</strong>
          </div>
        </section>

        <section className="section-pad services-section" id="services">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">What We Do</p>
              <h2>
                Solutions That Drive <span>Growth</span>
              </h2>
              <p>
                One team for the essentials your client needs to look credible, reach customers,
                and convert attention into measurable business.
              </p>
            </div>
            <div className="row g-4">
              {services.map(({ icon: Icon, title, copy }) => (
                <div className="col-md-6 col-xl-4" key={title}>
                  <article className="service-card h-100">
                    <div className="icon-ring">
                      <Icon size={28} />
                    </div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="industry-band" id="industries">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-lg-7">
                <p className="eyebrow">Industries We Serve</p>
                <h2>Empowering Businesses Across Industries</h2>
                <div className="industry-grid">
                  {industries.map(({ icon: Icon, title, copy }) => (
                    <div className="industry-item" key={title}>
                      <Icon size={27} />
                      <div>
                        <h3>{title}</h3>
                        <p>{copy}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-5">
                <div className="cta-box">
                  <h2>Let&apos;s Grow Your Business, Together.</h2>
                  <p>Have a project in mind? Share your goal and we&apos;ll shape the right marketing plan.</p>
                  <a className="btn btn-gold" href="#contact">
                    Get in Touch <ArrowRight size={17} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad about-section" id="about">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-5">
                <p className="eyebrow">About Primora Marketing</p>
                <h2>Your Growth Partner</h2>
                <p>
                  We combine strategy, creativity, and technology to deliver marketing work that
                  feels premium and performs in the real world.
                </p>
              </div>
              <div className="col-lg-7">
                <div className="stats-grid">
                  {stats.map(([value, label]) => (
                    <div className="stat-card" key={label}>
                      <strong>{value}</strong>
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <a className="brand-lockup footer-brand" href="#home">
                <span className="brand-mark">P</span>
                <span>
                  <strong>PRIMORA</strong>
                  <small>MARKETING</small>
                </span>
              </a>
              <p>Your success is our commitment.</p>
            </div>
            <div className="col-md-4 col-lg-2">
              <h3>Quick Links</h3>
              <a href="#home">Home</a>
              <a href="#about">About Us</a>
              <a href="#services">Services</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="col-md-4 col-lg-3">
              <h3>Our Services</h3>
              <a href="#services">Digital Marketing</a>
              <a href="#services">Branding & Design</a>
              <a href="#services">SEO & Content</a>
              <a href="#services">Printing Services</a>
            </div>
            <div className="col-md-4 col-lg-3">
              <h3>Get In Touch</h3>
              <p className="contact-line"><Phone size={17} /> 7991306456</p>
              <p className="contact-line"><Mail size={17} /> marketingprimora@gmail.com</p>
              <p className="contact-line"><MapPin size={17} /> India</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
