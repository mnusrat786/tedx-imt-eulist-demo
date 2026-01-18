import React, { useState } from 'react';
import { User, MapPin, BookOpen, Edit3, Save } from 'lucide-react';
import './Profile.css';

const Profile = ({ user, setUser }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  const interests = [
    'Tech for Good', 'Climate Action', 'European Citizenship', 'AI Ethics',
    'Social Innovation', 'Sustainable Development', 'Digital Rights',
    'Art & Science', 'Cultural Exchange', 'Future of Work'
  ];

  const schools = [
    // France - IMT Schools
    'IMT Atlantique (France)', 
    'IMT Mines Albi (France)', 
    'IMT Nord Europe (France)',
    'Télécom Paris (France)',
    'IMT Mines Saint-Étienne (France)',
    
    // Germany
    'Leibniz Universität Hannover - LUH (Germany)',
    'TU Berlin (Germany)',
    'TU Munich (Germany)',
    'RWTH Aachen (Germany)',
    
    // Spain
    'Universidad Rey Juan Carlos - URJC (Spain)',
    'Universidad Politécnica de Madrid (Spain)',
    'UPC Barcelona (Spain)',
    
    // Finland
    'LUT University (Finland)',
    'Aalto University (Finland)',
    'University of Helsinki (Finland)',
    
    // Austria
    'Technische Universität Wien - TU Wien (Austria)',
    'University of Vienna (Austria)',
    
    // Slovakia
    'Slovak University of Technology in Bratislava - STU (Slovakia)',
    
    // Czech Republic
    'Brno University of Technology - VUT/BUT (Czech Republic)',
    'Czech Technical University (Czech Republic)',
    
    // Greece
    'National Technical University of Athens - NTUA (Greece)',
    'Aristotle University (Greece)',
    
    // Italy
    'University of L\'Aquila - UnivAQ (Italy)',
    'Politecnico di Milano (Italy)',
    'University of Bologna (Italy)',
    
    // Sweden
    'Jönköping University (Sweden)',
    'KTH Royal Institute (Sweden)',
    'Chalmers University (Sweden)'
  ];

  const handleSave = () => {
    setUser(editedUser);
    setIsEditing(false);
  };

  const toggleInterest = (interest) => {
    const newInterests = editedUser.interests.includes(interest)
      ? editedUser.interests.filter(i => i !== interest)
      : [...editedUser.interests, interest];
    
    setEditedUser({ ...editedUser, interests: newInterests });
  };

  return (
    <div className="profile fade-in">
      <div className="container">
        <div className="profile-header">
          <div className="profile-avatar">
            <User size={64} />
          </div>
          <div className="profile-info">
            <h1>{user.name}</h1>
            <div className="profile-meta">
              <span><MapPin size={16} /> {user.school}, {user.country}</span>
            </div>
          </div>
          <button 
            className="btn btn-secondary"
            onClick={() => isEditing ? handleSave() : setIsEditing(true)}
          >
            {isEditing ? <Save size={16} /> : <Edit3 size={16} />}
            {isEditing ? 'Save' : 'Edit Profile'}
          </button>
        </div>

        <div className="profile-content">
          <div className="profile-section">
            <h2><BookOpen size={24} /> Centers of Curiosity</h2>
            <p className="section-description">
              Select the topics that spark your intellectual curiosity. This helps us connect you with like-minded participants.
            </p>
            
            {isEditing ? (
              <div className="interests-edit">
                <div className="interests-grid">
                  {interests.map((interest) => (
                    <button
                      key={interest}
                      className={`interest-tag ${editedUser.interests.includes(interest) ? 'selected' : ''}`}
                      onClick={() => toggleInterest(interest)}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="interests-display">
                {user.interests.map((interest) => (
                  <span key={interest} className="interest-badge">
                    {interest}
                  </span>
                ))}
              </div>
            )}
          </div>

          {isEditing && (
            <div className="profile-section">
              <h2>School Information</h2>
              <select 
                value={`${editedUser.school}, ${editedUser.country}`}
                onChange={(e) => {
                  const [school, country] = e.target.value.split(', ');
                  setEditedUser({ ...editedUser, school, country });
                }}
                className="school-select"
              >
                {schools.map((school) => (
                  <option key={school} value={school}>
                    {school}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="profile-section">
            <h2>Your TEDx Journey</h2>
            <div className="journey-stats">
              <div className="stat-card">
                <div className="stat-number">0</div>
                <div className="stat-label">Connections Made</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">0</div>
                <div className="stat-label">Talks Watched</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">0</div>
                <div className="stat-label">Discussions Joined</div>
              </div>
            </div>
          </div>

          <div className="profile-section">
            <h2>Event Registration</h2>
            <div className="registration-status">
              <div className="status-item">
                <span className="status-label">Main Conference:</span>
                <span className="status-value pending">Pending</span>
              </div>
              <div className="status-item">
                <span className="status-label">Workshop Selection:</span>
                <span className="status-value pending">Not Selected</span>
              </div>
            </div>
            <button className="btn btn-primary mt-4">
              Complete Registration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;