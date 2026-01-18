import React, { useState } from 'react';
import { Users, MapPin, BookOpen, MessageCircle, Heart } from 'lucide-react';
import EuropeMap from '../components/EuropeMap';
import './Matching.css';

const Matching = ({ user }) => {
  const [matches, setMatches] = useState([
    {
      id: 1,
      name: 'Anna Schmidt',
      school: 'Leibniz Universität Hannover',
      country: 'Germany',
      interests: ['AI Ethics', 'Tech for Good', 'Digital Rights'],
      matchScore: 95,
      bio: 'PhD student researching ethical AI applications in healthcare.',
      avatar: '🇩🇪'
    },
    {
      id: 2,
      name: 'Carlos Rodriguez',
      school: 'Universidad Rey Juan Carlos',
      country: 'Spain',
      interests: ['Climate Action', 'Sustainable Development', 'Social Innovation'],
      matchScore: 88,
      bio: 'Environmental engineer passionate about sustainable urban planning.',
      avatar: '🇪🇸'
    },
    {
      id: 3,
      name: 'Elina Virtanen',
      school: 'LUT University',
      country: 'Finland',
      interests: ['European Citizenship', 'Cultural Exchange', 'Art & Science'],
      matchScore: 82,
      bio: 'Design student exploring the intersection of technology and culture.',
      avatar: '🇫🇮'
    },
    {
      id: 4,
      name: 'Thomas Dubois',
      school: 'IMT Nord Europe',
      country: 'France',
      interests: ['Future of Work', 'Tech for Good', 'Social Innovation'],
      matchScore: 79,
      bio: 'MBA student researching the impact of automation on society.',
      avatar: '🇫🇷'
    },
    {
      id: 5,
      name: 'Maria Novák',
      school: 'Brno University of Technology',
      country: 'Czech Republic',
      interests: ['AI Ethics', 'Digital Rights', 'European Citizenship'],
      matchScore: 91,
      bio: 'Computer science researcher focusing on privacy-preserving AI.',
      avatar: '🇨🇿'
    },
    {
      id: 6,
      name: 'Andreas Weber',
      school: 'Technische Universität Wien',
      country: 'Austria',
      interests: ['Climate Action', 'Future of Work', 'Tech for Good'],
      matchScore: 85,
      bio: 'Engineering student developing smart city solutions.',
      avatar: '🇦🇹'
    },
    {
      id: 7,
      name: 'Giulia Rossi',
      school: "University of L'Aquila",
      country: 'Italy',
      interests: ['Art & Science', 'Cultural Exchange', 'Social Innovation'],
      matchScore: 77,
      bio: 'Architecture student interested in sustainable design.',
      avatar: '🇮🇹'
    },
    {
      id: 8,
      name: 'Dimitris Papadopoulos',
      school: 'National Technical University of Athens',
      country: 'Greece',
      interests: ['Sustainable Development', 'Climate Action', 'Tech for Good'],
      matchScore: 83,
      bio: 'Renewable energy researcher and environmental activist.',
      avatar: '🇬🇷'
    }
  ]);

  const [connectedUsers, setConnectedUsers] = useState([]);

  const handleConnect = (matchId) => {
    const match = matches.find(m => m.id === matchId);
    setConnectedUsers([...connectedUsers, match]);
    setMatches(matches.filter(m => m.id !== matchId));
  };

  const getCommonInterests = (userInterests, matchInterests) => {
    return userInterests.filter(interest => matchInterests.includes(interest));
  };

  return (
    <div className="matching fade-in">
      <div className="container">
        <div className="matching-header">
          <h1>Smart Matching</h1>
          <p>Discover participants who share your intellectual curiosity</p>
        </div>

        <div className="matching-stats">
          <div className="stat-item">
            <Users size={24} />
            <div>
              <div className="stat-number">{matches.length}</div>
              <div className="stat-label">Potential Matches</div>
            </div>
          </div>
          <div className="stat-item">
            <Heart size={24} />
            <div>
              <div className="stat-number">{connectedUsers.length}</div>
              <div className="stat-label">Connections Made</div>
            </div>
          </div>
        </div>

        {connectedUsers.length > 0 && (
          <div className="connections-section">
            <h2>Your Connections</h2>
            <div className="connections-grid">
              {connectedUsers.map((connection) => (
                <div key={connection.id} className="connection-card">
                  <div className="connection-header">
                    <span className="connection-avatar">{connection.avatar}</span>
                    <div>
                      <h3>{connection.name}</h3>
                      <p>{connection.school}</p>
                    </div>
                    <button className="btn btn-primary btn-sm">
                      <MessageCircle size={16} />
                      Message
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="european-overview">
          <h2>European Participant Overview</h2>
          <EuropeMap />
        </div>

        <div className="matches-section">
          <h2>Recommended Matches</h2>
          <div className="matches-grid">
            {matches.map((match) => {
              const commonInterests = getCommonInterests(user.interests, match.interests);
              
              return (
                <div key={match.id} className="match-card">
                  <div className="match-header">
                    <div className="match-avatar">{match.avatar}</div>
                    <div className="match-info">
                      <h3>{match.name}</h3>
                      <div className="match-location">
                        <MapPin size={16} />
                        <span>{match.school}, {match.country}</span>
                      </div>
                    </div>
                    <div className="match-score">
                      {match.matchScore}%
                    </div>
                  </div>

                  <div className="match-bio">
                    <p>{match.bio}</p>
                  </div>

                  <div className="match-interests">
                    <div className="interests-header">
                      <BookOpen size={16} />
                      <span>Common Interests ({commonInterests.length})</span>
                    </div>
                    <div className="interests-list">
                      {commonInterests.map((interest) => (
                        <span key={interest} className="interest-badge common">
                          {interest}
                        </span>
                      ))}
                      {match.interests
                        .filter(interest => !commonInterests.includes(interest))
                        .slice(0, 2)
                        .map((interest) => (
                          <span key={interest} className="interest-badge">
                            {interest}
                          </span>
                        ))}
                    </div>
                  </div>

                  <div className="match-actions">
                    <button 
                      className="btn btn-primary"
                      onClick={() => handleConnect(match.id)}
                    >
                      Connect
                    </button>
                    <button className="btn btn-secondary">
                      View Profile
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {matches.length === 0 && (
          <div className="no-matches">
            <Users size={64} />
            <h3>Great job connecting!</h3>
            <p>You've connected with all your current matches. Check back later for more recommendations.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Matching;