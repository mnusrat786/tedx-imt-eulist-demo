import React, { useState, useEffect } from 'react';
import { Users, MapPin, Search, Filter } from 'lucide-react';
import './UserDistributionMap.css';

const UserDistributionMap = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [filterCountry, setFilterCountry] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Generate realistic user distribution across Europe
  const generateUsers = () => {
    const users = [];
    const countries = [
      { 
        id: 'france', 
        name: 'France', 
        flag: '🇫🇷', 
        bounds: { minX: 20, maxX: 35, minY: 45, maxY: 60 },
        schools: ['IMT Atlantique', 'IMT Mines Albi', 'IMT Nord Europe', 'Télécom Paris'],
        count: 487
      },
      { 
        id: 'germany', 
        name: 'Germany', 
        flag: '🇩🇪', 
        bounds: { minX: 40, maxX: 55, minY: 35, maxY: 50 },
        schools: ['Leibniz Universität Hannover', 'TU Berlin', 'TU Munich'],
        count: 312
      },
      { 
        id: 'spain', 
        name: 'Spain', 
        flag: '🇪🇸', 
        bounds: { minX: 10, maxX: 25, minY: 60, maxY: 75 },
        schools: ['Universidad Rey Juan Carlos', 'UPM Madrid', 'UPC Barcelona'],
        count: 298
      },
      { 
        id: 'italy', 
        name: 'Italy', 
        flag: '🇮🇹', 
        bounds: { minX: 35, maxX: 50, minY: 55, maxY: 70 },
        schools: ["University of L'Aquila", 'Politecnico di Milano'],
        count: 145
      },
      { 
        id: 'finland', 
        name: 'Finland', 
        flag: '🇫🇮', 
        bounds: { minX: 50, maxX: 65, minY: 15, maxY: 30 },
        schools: ['LUT University', 'Aalto University'],
        count: 156
      },
      { 
        id: 'austria', 
        name: 'Austria', 
        flag: '🇦🇹', 
        bounds: { minX: 45, maxX: 55, minY: 45, maxY: 55 },
        schools: ['TU Wien'],
        count: 134
      },
      { 
        id: 'czech-republic', 
        name: 'Czech Republic', 
        flag: '🇨🇿', 
        bounds: { minX: 42, maxX: 52, minY: 40, maxY: 50 },
        schools: ['Brno University of Technology'],
        count: 112
      },
      { 
        id: 'greece', 
        name: 'Greece', 
        flag: '🇬🇷', 
        bounds: { minX: 55, maxX: 70, minY: 65, maxY: 80 },
        schools: ['NTUA Athens'],
        count: 78
      }
    ];

    const names = [
      'Marie', 'Pierre', 'Sophie', 'Jean', 'Anna', 'Hans', 'Klaus', 'Ingrid',
      'Carlos', 'Maria', 'Pablo', 'Elena', 'Marco', 'Giulia', 'Andrea', 'Francesca',
      'Elina', 'Mikko', 'Aino', 'Jukka', 'Andreas', 'Petra', 'Stefan', 'Katrin',
      'Pavel', 'Jana', 'Tomáš', 'Eva', 'Dimitris', 'Sofia', 'Nikos', 'Christina'
    ];

    const interests = [
      'AI Ethics', 'Climate Action', 'Tech for Good', 'Digital Rights',
      'European Citizenship', 'Social Innovation', 'Sustainable Development',
      'Art & Science', 'Future of Work', 'Cultural Exchange'
    ];

    const avatars = ['👨‍💻', '👩‍💻', '👨‍🎓', '👩‍🎓', '👨‍🔬', '👩‍🔬', '👨‍🎨', '👩‍🎨'];

    let userId = 1;
    countries.forEach(country => {
      // Generate users for each country based on their count
      const usersToGenerate = Math.min(country.count, 50); // Limit for performance
      for (let i = 0; i < usersToGenerate; i++) {
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomSchool = country.schools[Math.floor(Math.random() * country.schools.length)];
        const randomInterests = interests.sort(() => 0.5 - Math.random()).slice(0, 2);
        const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];
        
        users.push({
          id: userId++,
          name: `${randomName} ${String.fromCharCode(65 + Math.floor(Math.random() * 26))}.`,
          country: country.name,
          countryId: country.id,
          flag: country.flag,
          school: randomSchool,
          interests: randomInterests,
          avatar: randomAvatar,
          position: {
            x: Math.random() * (country.bounds.maxX - country.bounds.minX) + country.bounds.minX,
            y: Math.random() * (country.bounds.maxY - country.bounds.minY) + country.bounds.minY
          },
          online: Math.random() > 0.3, // 70% online
          lastSeen: Math.floor(Math.random() * 60) + 1 // 1-60 minutes ago
        });
      }
    });

    return users;
  };

  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(generateUsers());
  }, []);

  const filteredUsers = users.filter(user => {
    const matchesCountry = filterCountry === 'all' || user.countryId === filterCountry;
    const matchesSearch = searchTerm === '' || 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.school.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.interests.some(interest => interest.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCountry && matchesSearch;
  });

  const countries = [
    { id: 'all', name: 'All Countries', flag: '🌍' },
    { id: 'france', name: 'France', flag: '🇫🇷' },
    { id: 'germany', name: 'Germany', flag: '🇩🇪' },
    { id: 'spain', name: 'Spain', flag: '🇪🇸' },
    { id: 'italy', name: 'Italy', flag: '🇮🇹' },
    { id: 'finland', name: 'Finland', flag: '🇫🇮' },
    { id: 'austria', name: 'Austria', flag: '🇦🇹' },
    { id: 'czech-republic', name: 'Czech Republic', flag: '🇨🇿' },
    { id: 'greece', name: 'Greece', flag: '🇬🇷' }
  ];

  return (
    <div className="user-distribution-container">
      <div className="map-controls">
        <div className="controls-header">
          <h3>Live User Distribution</h3>
          <div className="user-count">
            <Users size={16} />
            <span>{filteredUsers.length} participants visible</span>
          </div>
        </div>
        
        <div className="controls-row">
          <div className="search-control">
            <Search size={16} />
            <input
              type="text"
              placeholder="Search by name, school, or interest..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="filter-control">
            <Filter size={16} />
            <select 
              value={filterCountry} 
              onChange={(e) => setFilterCountry(e.target.value)}
            >
              {countries.map(country => (
                <option key={country.id} value={country.id}>
                  {country.flag} {country.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="interactive-map">
        <svg 
          viewBox="0 0 100 100" 
          className="europe-map-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Europe background */}
          <defs>
            <radialGradient id="mapBg" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="rgba(30, 58, 138, 0.1)" />
              <stop offset="100%" stopColor="rgba(230, 43, 30, 0.05)" />
            </radialGradient>
          </defs>
          
          <rect width="100" height="100" fill="url(#mapBg)" />
          
          {/* Country boundaries (simplified) */}
          <path
            d="M15 50 L25 45 L35 48 L45 46 L55 48 L65 50 L70 55 L65 65 L60 70 L50 72 L40 70 L30 68 L20 65 L15 60 Z"
            fill="rgba(255,255,255,0.05)"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="0.2"
          />
          
          {/* User avatars */}
          {filteredUsers.map((user) => (
            <g key={user.id}>
              <circle
                cx={user.position.x}
                cy={user.position.y}
                r="1.2"
                fill={user.online ? '#10b981' : '#6b7280'}
                opacity="0.8"
                className="user-dot"
                onClick={() => setSelectedUser(user)}
              />
              <text
                x={user.position.x}
                y={user.position.y + 0.3}
                textAnchor="middle"
                fontSize="1.5"
                className="user-avatar"
                onClick={() => setSelectedUser(user)}
              >
                {user.avatar}
              </text>
              {user.online && (
                <circle
                  cx={user.position.x + 0.8}
                  cy={user.position.y - 0.8}
                  r="0.3"
                  fill="#10b981"
                  className="online-indicator"
                />
              )}
            </g>
          ))}
        </svg>
      </div>

      {/* User details popup */}
      {selectedUser && (
        <div className="user-popup">
          <div className="popup-header">
            <div className="user-avatar-large">{selectedUser.avatar}</div>
            <div className="user-info">
              <h4>{selectedUser.name}</h4>
              <div className="user-location">
                <MapPin size={14} />
                <span>{selectedUser.flag} {selectedUser.school}</span>
              </div>
              <div className="user-status">
                <div className={`status-dot ${selectedUser.online ? 'online' : 'offline'}`}></div>
                <span>
                  {selectedUser.online ? 'Online now' : `Last seen ${selectedUser.lastSeen}m ago`}
                </span>
              </div>
            </div>
            <button 
              className="close-popup"
              onClick={() => setSelectedUser(null)}
            >
              ×
            </button>
          </div>
          
          <div className="user-interests">
            <h5>Interests</h5>
            <div className="interests-tags">
              {selectedUser.interests.map((interest, index) => (
                <span key={index} className="interest-tag">
                  {interest}
                </span>
              ))}
            </div>
          </div>
          
          <div className="user-actions">
            <button className="btn-connect">Connect</button>
            <button className="btn-message">Message</button>
          </div>
        </div>
      )}

      <div className="map-legend">
        <div className="legend-items">
          <div className="legend-item">
            <div className="status-dot online"></div>
            <span>Online now</span>
          </div>
          <div className="legend-item">
            <div className="status-dot offline"></div>
            <span>Recently active</span>
          </div>
        </div>
        <div className="legend-note">
          Click on any avatar to see participant details
        </div>
      </div>
    </div>
  );
};

export default UserDistributionMap;