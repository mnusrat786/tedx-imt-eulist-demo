import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Globe, Calendar, Heart } from 'lucide-react';
import EuropeMap from '../components/EuropeMap';
import './Home.css';

const Home = () => {
  const features = [
    {
      icon: <Users size={48} />,
      title: 'Connect Ideas, Not CVs',
      description: 'Match with participants based on shared intellectual interests and curiosity, not professional networking.'
    },
    {
      icon: <Globe size={48} />,
      title: 'European Community',
      description: 'Connect with students and researchers from Germany, Spain, Finland, and France through the EULiST alliance.'
    },
    {
      icon: <Calendar size={48} />,
      title: 'Before, During & After',
      description: 'Continuous experience from event preparation to lasting community connections.'
    },
    {
      icon: <Heart size={48} />,
      title: 'What Connects Us',
      description: 'Explore the theme "Ce qui nous relie" and discover what brings us together across borders.'
    }
  ];

  const stats = [
    { number: '1,600', label: 'Expected Participants' },
    { number: '4', label: 'European Countries' },
    { number: '1,000+', label: 'Connections Goal' },
    { number: 'Feb 2027', label: 'Event Date' }
  ];

  return (
    <div className="home fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              TEDx IMT x <span className="text-red">EULiST</span>
            </h1>
            <p className="hero-subtitle">
              "Connecter les idées, pas les CV"
            </p>
            <p className="hero-description">
              Join the European community experience that fights social fragmentation 
              and creates lasting intellectual connections across borders.
            </p>
            <div className="hero-actions">
              <Link to="/profile" className="btn btn-primary">
                Create Your Profile
              </Link>
              <Link to="/events" className="btn btn-secondary">
                Explore Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* European Map Section */}
      <section className="map-section">
        <div className="container">
          <h2 className="section-title text-center">
            European <span className="text-red">Community</span> Map
          </h2>
          <p className="section-description text-center">
            Discover where our participants are located across the EULiST alliance
          </p>
          <EuropeMap />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title text-center">
            Experience the <span className="text-red">Difference</span>
          </h2>
          <div className="grid grid-2">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon text-red">
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Ready to Connect?</h2>
            <p>Join the movement that's reshaping how European students and researchers connect.</p>
            <Link to="/matching" className="btn btn-primary">
              Start Matching
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;