import React, { useState } from 'react';
import { Users, MapPin } from 'lucide-react';
import './EuropeMap.css';

const EuropeMap = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const countries = [
    {
      id: 'france',
      name: 'France',
      flag: '🇫🇷',
      users: 487,
      schools: ['IMT Atlantique', 'IMT Mines Albi', 'IMT Nord Europe'],
      position: { top: '45%', left: '25%' },
      color: '#e62b1e'
    },
    {
      id: 'germany',
      name: 'Germany',
      flag: '🇩🇪',
      users: 312,
      schools: ['TU Berlin', 'TU Munich', 'RWTH Aachen'],
      position: { top: '35%', left: '45%' },
      color: '#1e3a8a'
    },
    {
      id: 'spain',
      name: 'Spain',
      flag: '🇪🇸',
      users: 298,
      schools: ['Universidad Politécnica de Madrid', 'UPC Barcelona'],
      position: { top: '60%', left: '15%' },
      color: '#f59e0b'
    },
    {
      id: 'finland',
      name: 'Finland',
      flag: '🇫🇮',
      users: 156,
      schools: ['Aalto University', 'University of Helsinki'],
      position: { top: '15%', left: '55%' },
      color: '#10b981'
    }
  ];

  const totalUsers = countries.reduce((sum, country) => sum + country.users, 0);

  return (
    <div className="europe-map-container">
      <div className="map-header">
        <h3>European Community Distribution</h3>
        <div className="total-users">
          <Users size={20} />
          <span>{totalUsers} registered participants</span>
        </div>
      </div>

      <div className="map-wrapper">
        <svg 
          viewBox="0 0 800 600" 
          className="europe-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Simplified Europe outline */}
          <path
            d="M100 200 L200 150 L300 180 L400 160 L500 170 L600 200 L650 250 L600 300 L550 350 L500 400 L400 450 L300 420 L200 400 L150 350 L100 300 Z"
            fill="rgba(255,255,255,0.1)"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="2"
          />
          
          {/* Country markers */}
          {countries.map((country) => (
            <g key={country.id}>
              <circle
                cx={country.position.left.replace('%', '') * 8}
                cy={country.position.top.replace('%', '') * 6}
                r={Math.sqrt(country.users) / 3}
                fill={country.color}
                opacity="0.8"
                className="country-marker"
                onClick={() => setSelectedCountry(country)}
                style={{ cursor: 'pointer' }}
              />
              <text
                x={country.position.left.replace('%', '') * 8}
                y={country.position.top.replace('%', '') * 6 + 5}
                textAnchor="middle"
                fill="white"
                fontSize="12"
                fontWeight="bold"
              >
                {country.users}
              </text>
            </g>
          ))}
        </svg>

        {/* Interactive country cards */}
        <div className="country-markers">
          {countries.map((country) => (
            <div
              key={country.id}
              className={`country-pin ${selectedCountry?.id === country.id ? 'active' : ''}`}
              style={{
                top: country.position.top,
                left: country.position.left,
                borderColor: country.color
              }}
              onClick={() => setSelectedCountry(country)}
            >
              <div className="pin-flag">{country.flag}</div>
              <div className="pin-count">{country.users}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Country details panel */}
      {selectedCountry && (
        <div className="country-details">
          <div className="country-header">
            <span className="country-flag">{selectedCountry.flag}</span>
            <h4>{selectedCountry.name}</h4>
            <button 
              className="close-btn"
              onClick={() => setSelectedCountry(null)}
            >
              ×
            </button>
          </div>
          <div className="country-stats">
            <div className="stat">
              <Users size={16} />
              <span>{selectedCountry.users} participants</span>
            </div>
            <div className="stat">
              <MapPin size={16} />
              <span>{selectedCountry.schools.length} partner schools</span>
            </div>
          </div>
          <div className="schools-list">
            <h5>Partner Institutions:</h5>
            {selectedCountry.schools.map((school, index) => (
              <div key={index} className="school-item">
                {school}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="map-legend">
        <h5>Legend</h5>
        <div className="legend-items">
          {countries.map((country) => (
            <div key={country.id} className="legend-item">
              <div 
                className="legend-color" 
                style={{ backgroundColor: country.color }}
              ></div>
              <span>{country.flag} {country.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EuropeMap;