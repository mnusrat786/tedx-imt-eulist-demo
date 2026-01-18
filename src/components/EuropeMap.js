import React, { useState, useEffect } from 'react';
import { Users, MapPin, TrendingUp, Globe } from 'lucide-react';
import './EuropeMap.css';

const EuropeMap = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [animatedCounts, setAnimatedCounts] = useState({});

  const countries = [
    {
      id: 'france',
      name: 'France',
      flag: '🇫🇷',
      users: 487,
      schools: ['IMT Atlantique', 'IMT Mines Albi', 'IMT Nord Europe', 'Télécom Paris', 'IMT Mines Saint-Étienne'],
      position: { top: '52%', left: '28%' },
      color: '#e62b1e',
      growth: '+12%'
    },
    {
      id: 'germany',
      name: 'Germany',
      flag: '🇩🇪',
      users: 312,
      schools: ['Leibniz Universität Hannover (LUH)', 'TU Berlin', 'TU Munich', 'RWTH Aachen'],
      position: { top: '42%', left: '48%' },
      color: '#1e3a8a',
      growth: '+8%'
    },
    {
      id: 'spain',
      name: 'Spain',
      flag: '🇪🇸',
      users: 298,
      schools: ['Universidad Rey Juan Carlos (URJC)', 'Universidad Politécnica de Madrid', 'UPC Barcelona'],
      position: { top: '68%', left: '18%' },
      color: '#f59e0b',
      growth: '+15%'
    },
    {
      id: 'finland',
      name: 'Finland',
      flag: '🇫🇮',
      users: 156,
      schools: ['LUT University', 'Aalto University', 'University of Helsinki'],
      position: { top: '22%', left: '58%' },
      color: '#10b981',
      growth: '+6%'
    },
    {
      id: 'austria',
      name: 'Austria',
      flag: '🇦🇹',
      users: 134,
      schools: ['Technische Universität Wien (TU Wien)', 'University of Vienna'],
      position: { top: '48%', left: '52%' },
      color: '#8b5cf6',
      growth: '+9%'
    },
    {
      id: 'slovakia',
      name: 'Slovakia',
      flag: '🇸🇰',
      users: 89,
      schools: ['Slovak University of Technology in Bratislava (STU)'],
      position: { top: '46%', left: '56%' },
      color: '#f97316',
      growth: '+7%'
    },
    {
      id: 'czech-republic',
      name: 'Czech Republic',
      flag: '🇨🇿',
      users: 112,
      schools: ['Brno University of Technology (VUT/BUT)', 'Czech Technical University'],
      position: { top: '44%', left: '50%' },
      color: '#06b6d4',
      growth: '+11%'
    },
    {
      id: 'greece',
      name: 'Greece',
      flag: '🇬🇷',
      users: 78,
      schools: ['National Technical University of Athens (NTUA)', 'Aristotle University'],
      position: { top: '72%', left: '62%' },
      color: '#ec4899',
      growth: '+5%'
    },
    {
      id: 'italy',
      name: 'Italy',
      flag: '🇮🇹',
      users: 145,
      schools: ['University of L\'Aquila (UnivAQ)', 'Politecnico di Milano', 'University of Bologna'],
      position: { top: '58%', left: '45%' },
      color: '#84cc16',
      growth: '+13%'
    },
    {
      id: 'sweden',
      name: 'Sweden',
      flag: '🇸🇪',
      users: 92,
      schools: ['Jönköping University', 'KTH Royal Institute', 'Chalmers University'],
      position: { top: '28%', left: '54%' },
      color: '#f43f5e',
      growth: '+4%'
    }
  ];

  const totalUsers = countries.reduce((sum, country) => sum + country.users, 0);

  // Animate numbers on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      countries.forEach(country => {
        let current = 0;
        const increment = country.users / 50;
        const countUp = setInterval(() => {
          current += increment;
          if (current >= country.users) {
            current = country.users;
            clearInterval(countUp);
          }
          setAnimatedCounts(prev => ({
            ...prev,
            [country.id]: Math.floor(current)
          }));
        }, 30);
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="europe-map-container">
      <div className="map-header">
        <div className="header-content">
          <div className="title-section">
            <Globe className="header-icon" />
            <div>
              <h3>European Community Distribution</h3>
              <p>Real-time participant mapping across EULiST alliance</p>
            </div>
          </div>
          <div className="stats-summary">
            <div className="total-users">
              <Users size={20} />
              <span className="count">{totalUsers}</span>
              <span className="label">participants</span>
            </div>
            <div className="growth-indicator">
              <TrendingUp size={16} />
              <span>+10.2% this month</span>
            </div>
          </div>
        </div>
      </div>

      <div className="map-wrapper">
        {/* Enhanced Europe SVG */}
        <svg 
          viewBox="0 0 800 600" 
          className="europe-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background gradient */}
          <defs>
            <radialGradient id="mapGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(30, 58, 138, 0.1)" />
              <stop offset="100%" stopColor="rgba(230, 43, 30, 0.05)" />
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* More accurate Europe outline */}
          <path
            d="M150 180 L200 160 L280 170 L350 165 L420 175 L480 180 L540 190 L580 210 L600 240 L590 280 L570 320 L540 360 L500 390 L450 410 L400 420 L350 415 L300 410 L250 400 L200 390 L170 370 L150 340 L140 300 L145 260 L150 220 Z"
            fill="url(#mapGradient)"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="2"
            className="europe-outline"
          />
          
          {/* Connection lines between countries */}
          {countries.map((country, index) => 
            countries.slice(index + 1).map((otherCountry) => (
              <line
                key={`${country.id}-${otherCountry.id}`}
                x1={country.position.left.replace('%', '') * 8}
                y1={country.position.top.replace('%', '') * 6}
                x2={otherCountry.position.left.replace('%', '') * 8}
                y2={otherCountry.position.top.replace('%', '') * 6}
                stroke="rgba(230, 43, 30, 0.2)"
                strokeWidth="1"
                strokeDasharray="5,5"
                className="connection-line"
              />
            ))
          )}
          
          {/* Animated pulse circles */}
          {countries.map((country) => (
            <g key={`pulse-${country.id}`}>
              <circle
                cx={country.position.left.replace('%', '') * 8}
                cy={country.position.top.replace('%', '') * 6}
                r="30"
                fill="none"
                stroke={country.color}
                strokeWidth="2"
                opacity="0.3"
                className="pulse-ring"
              />
              <circle
                cx={country.position.left.replace('%', '') * 8}
                cy={country.position.top.replace('%', '') * 6}
                r="20"
                fill="none"
                stroke={country.color}
                strokeWidth="1"
                opacity="0.5"
                className="pulse-ring pulse-delay-1"
              />
            </g>
          ))}
        </svg>

        {/* Enhanced country markers */}
        <div className="country-markers">
          {countries.map((country) => (
            <div
              key={country.id}
              className={`country-pin ${selectedCountry?.id === country.id ? 'active' : ''}`}
              style={{
                top: country.position.top,
                left: country.position.left,
                '--country-color': country.color
              }}
              onClick={() => setSelectedCountry(country)}
            >
              <div className="pin-inner">
                <div className="pin-flag">{country.flag}</div>
                <div className="pin-count">
                  {animatedCounts[country.id] || 0}
                </div>
                <div className="pin-growth">{country.growth}</div>
              </div>
              <div className="pin-pulse"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced country details */}
      {selectedCountry && (
        <div className="country-details">
          <div className="country-header">
            <div className="country-flag-large">{selectedCountry.flag}</div>
            <div className="country-info">
              <h4>{selectedCountry.name}</h4>
              <div className="country-metrics">
                <span className="metric">
                  <Users size={14} />
                  {selectedCountry.users} participants
                </span>
                <span className="metric growth">
                  <TrendingUp size={14} />
                  {selectedCountry.growth} growth
                </span>
              </div>
            </div>
            <button 
              className="close-btn"
              onClick={() => setSelectedCountry(null)}
            >
              ×
            </button>
          </div>
          
          <div className="schools-grid">
            <h5>Partner Institutions ({selectedCountry.schools.length})</h5>
            <div className="schools-list">
              {selectedCountry.schools.map((school, index) => (
                <div key={index} className="school-card">
                  <div className="school-icon">🏛️</div>
                  <span className="school-name">{school}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Enhanced legend */}
      <div className="map-legend">
        <div className="legend-header">
          <h5>Country Distribution</h5>
          <span className="legend-subtitle">Click on any country to explore</span>
        </div>
        <div className="legend-grid">
          {countries.map((country) => (
            <div 
              key={country.id} 
              className={`legend-item ${selectedCountry?.id === country.id ? 'active' : ''}`}
              onClick={() => setSelectedCountry(country)}
            >
              <div 
                className="legend-indicator" 
                style={{ backgroundColor: country.color }}
              >
                <span className="legend-flag">{country.flag}</span>
              </div>
              <div className="legend-info">
                <span className="legend-country">{country.name}</span>
                <span className="legend-count">{country.users} users</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EuropeMap;