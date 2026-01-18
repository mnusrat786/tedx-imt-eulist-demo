import React, { useState } from 'react';
import { Building2, Users, Lightbulb, Globe, ExternalLink, Heart } from 'lucide-react';
import './Partners.css';

const Partners = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const partners = [
    {
      id: 1,
      name: 'Schneider Electric',
      category: 'sustainability',
      logo: '⚡',
      description: 'Leading the digital transformation of energy management and automation',
      contribution: 'Sustainability & Energy Innovation',
      vision: 'Empowering students to create sustainable solutions for tomorrow\'s energy challenges.',
      impact: 'Funding mobility for 50 EULiST students',
      mentors: [
        { name: 'Dr. Sophie Martin', role: 'Sustainability Director', expertise: 'Green Tech' },
        { name: 'Jean-Luc Dubois', role: 'Innovation Manager', expertise: 'Smart Cities' }
      ],
      workshops: ['Smart Grid Innovation', 'Sustainable Automation']
    },
    {
      id: 2,
      name: 'Orange',
      category: 'digital',
      logo: '🍊',
      description: 'Connecting people and transforming digital experiences across Europe',
      contribution: 'Digital Inclusion & Connectivity',
      vision: 'Bridging digital divides to ensure technology serves all European communities.',
      impact: 'Supporting digital infrastructure for remote participation',
      mentors: [
        { name: 'Maria Garcia', role: 'Digital Ethics Lead', expertise: 'AI Ethics' },
        { name: 'Thomas Weber', role: 'Innovation Director', expertise: 'Digital Rights' }
      ],
      workshops: ['Digital Ethics Workshop', '5G for Social Good']
    },
    {
      id: 3,
      name: 'Airbus',
      category: 'innovation',
      logo: '✈️',
      description: 'Pioneering sustainable aerospace solutions for a connected world',
      contribution: 'Aerospace Innovation & Mobility',
      vision: 'Inspiring the next generation of engineers to reimagine sustainable mobility.',
      impact: 'Providing technical expertise and innovation challenges',
      mentors: [
        { name: 'Dr. Elena Rossi', role: 'Future Mobility Lead', expertise: 'Sustainable Aviation' },
        { name: 'Hans Mueller', role: 'Innovation Engineer', expertise: 'Aerospace Tech' }
      ],
      workshops: ['Future of Mobility', 'Sustainable Aviation']
    },
    {
      id: 4,
      name: 'European Commission',
      category: 'institutional',
      logo: '🇪🇺',
      description: 'Supporting European integration through education and innovation',
      contribution: 'European Citizenship & Policy',
      vision: 'Fostering a sense of European identity and shared values among young leaders.',
      impact: 'Policy insights and European integration perspectives',
      mentors: [
        { name: 'Dr. Anna Kowalski', role: 'Education Policy Expert', expertise: 'EU Integration' },
        { name: 'Pierre Lefebvre', role: 'Youth Programs Director', expertise: 'European Citizenship' }
      ],
      workshops: ['European Policy Making', 'Youth Leadership in EU']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Partners', icon: <Building2 size={20} /> },
    { id: 'sustainability', name: 'Sustainability', icon: <Globe size={20} /> },
    { id: 'digital', name: 'Digital Innovation', icon: <Lightbulb size={20} /> },
    { id: 'innovation', name: 'Tech Innovation', icon: <Users size={20} /> },
    { id: 'institutional', name: 'Institutional', icon: <Heart size={20} /> }
  ];

  const filteredPartners = selectedCategory === 'all' 
    ? partners 
    : partners.filter(partner => partner.category === selectedCategory);

  return (
    <div className="partners fade-in">
      <div className="container">
        <div className="partners-header">
          <h1>Partners of Reflection</h1>
          <p>Organizations supporting our mission to connect ideas and build European community</p>
          <div className="wimbledon-rule">
            <strong>"The Wimbledon Rule":</strong> Our partners enable the event without interrupting it commercially
          </div>
        </div>

        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

        <div className="partners-grid">
          {filteredPartners.map((partner) => (
            <div key={partner.id} className="partner-card">
              <div className="partner-header">
                <div className="partner-logo">{partner.logo}</div>
                <div className="partner-info">
                  <h3>{partner.name}</h3>
                  <p className="partner-description">{partner.description}</p>
                </div>
              </div>

              <div className="partner-contribution">
                <h4>Contribution Focus</h4>
                <div className="contribution-badge">{partner.contribution}</div>
              </div>

              <div className="partner-vision">
                <h4>Vision Statement</h4>
                <p>"{partner.vision}"</p>
              </div>

              <div className="partner-impact">
                <h4>Event Impact</h4>
                <div className="impact-item">
                  <Heart size={16} />
                  <span>{partner.impact}</span>
                </div>
              </div>

              <div className="partner-mentors">
                <h4>Expert Mentors</h4>
                <div className="mentors-list">
                  {partner.mentors.map((mentor, index) => (
                    <div key={index} className="mentor-item">
                      <div className="mentor-name">{mentor.name}</div>
                      <div className="mentor-role">{mentor.role}</div>
                      <div className="mentor-expertise">{mentor.expertise}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="partner-workshops">
                <h4>Sponsored Workshops</h4>
                <div className="workshops-list">
                  {partner.workshops.map((workshop, index) => (
                    <span key={index} className="workshop-tag">
                      {workshop}
                    </span>
                  ))}
                </div>
              </div>

              <div className="partner-actions">
                <button className="btn btn-secondary">
                  <ExternalLink size={16} />
                  Learn More
                </button>
                <button className="btn btn-primary">
                  Connect with Mentors
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="partnership-philosophy">
          <div className="philosophy-content">
            <h2>Our Partnership Philosophy</h2>
            <div className="philosophy-grid">
              <div className="philosophy-item">
                <div className="philosophy-icon">
                  <Lightbulb size={32} />
                </div>
                <h3>Intellectual Investment</h3>
                <p>Partners invest in ideas and reflection, not advertising space. Their visibility comes from meaningful contribution to the conversation.</p>
              </div>
              <div className="philosophy-item">
                <div className="philosophy-icon">
                  <Users size={32} />
                </div>
                <h3>Community Building</h3>
                <p>Rather than recruiting, partners participate in building a lasting European academic community focused on shared challenges.</p>
              </div>
              <div className="philosophy-item">
                <div className="philosophy-icon">
                  <Heart size={32} />
                </div>
                <h3>Social Impact</h3>
                <p>Every partnership directly supports student mobility, accessibility, and the fight against social fragmentation across Europe.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="become-partner">
          <div className="become-partner-content">
            <h2>Become a Partner of Reflection</h2>
            <p>Join organizations committed to fostering intellectual connections and European unity through meaningful engagement, not commercial promotion.</p>
            <button className="btn btn-primary">
              Partnership Inquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;