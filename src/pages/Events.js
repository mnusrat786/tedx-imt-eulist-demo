import React, { useState } from 'react';
import { Calendar, MapPin, Users, Clock, Play, BookOpen } from 'lucide-react';
import './Events.css';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState('main');

  const mainEvent = {
    id: 'main',
    title: 'TEDx IMT x EULiST 2027',
    subtitle: 'Ce qui nous relie',
    date: 'February 15, 2027',
    time: '9:00 AM - 6:00 PM',
    location: 'IMT Atlantique, Nantes, France',
    capacity: '1,200 participants',
    registered: 847,
    description: 'The main conference featuring inspiring talks from speakers across Europe, exploring what connects us beyond borders.',
    status: 'registration-open'
  };

  const workshops = [
    {
      id: 'workshop1',
      title: 'AI Ethics in Practice',
      date: 'February 14, 2027',
      time: '2:00 PM - 5:00 PM',
      location: 'Room A101',
      capacity: 50,
      registered: 32,
      speaker: 'Dr. Anna Schmidt (TU Berlin)',
      description: 'Hands-on workshop exploring ethical considerations in AI development and deployment.',
      topics: ['AI Ethics', 'Tech for Good', 'Digital Rights']
    },
    {
      id: 'workshop2',
      title: 'Sustainable Innovation Lab',
      date: 'February 14, 2027',
      time: '2:00 PM - 5:00 PM',
      location: 'Room B205',
      capacity: 40,
      registered: 28,
      speaker: 'Carlos Rodriguez (UPM Madrid)',
      description: 'Collaborative session on developing sustainable solutions for urban challenges.',
      topics: ['Climate Action', 'Sustainable Development', 'Social Innovation']
    },
    {
      id: 'workshop3',
      title: 'Cultural Bridge Building',
      date: 'February 16, 2027',
      time: '10:00 AM - 1:00 PM',
      location: 'Room C301',
      capacity: 60,
      registered: 45,
      speaker: 'Elina Virtanen (Aalto University)',
      description: 'Interactive workshop on fostering cross-cultural understanding in European contexts.',
      topics: ['European Citizenship', 'Cultural Exchange', 'Art & Science']
    }
  ];

  const talks = [
    {
      id: 'talk1',
      title: 'The Future of European Collaboration',
      speaker: 'Prof. Marie Leclerc',
      time: '10:30 AM',
      duration: '18 min',
      description: 'Exploring how technology can bridge cultural and geographical divides.',
      live: false
    },
    {
      id: 'talk2',
      title: 'Breaking Social Fragmentation',
      speaker: 'Dr. Hans Mueller',
      time: '11:15 AM',
      duration: '15 min',
      description: 'Understanding the roots of social division and paths to unity.',
      live: true
    },
    {
      id: 'talk3',
      title: 'Innovation for Social Good',
      speaker: 'Elena Rossi',
      time: '2:30 PM',
      duration: '12 min',
      description: 'How young entrepreneurs are solving Europe\'s biggest challenges.',
      live: false
    }
  ];

  return (
    <div className="events fade-in">
      <div className="container">
        <div className="events-header">
          <h1>Events & Schedule</h1>
          <p>Join the conversation that's reshaping European collaboration</p>
        </div>

        <div className="event-tabs">
          <button 
            className={`tab ${selectedEvent === 'main' ? 'active' : ''}`}
            onClick={() => setSelectedEvent('main')}
          >
            Main Conference
          </button>
          <button 
            className={`tab ${selectedEvent === 'workshops' ? 'active' : ''}`}
            onClick={() => setSelectedEvent('workshops')}
          >
            Workshops
          </button>
          <button 
            className={`tab ${selectedEvent === 'talks' ? 'active' : ''}`}
            onClick={() => setSelectedEvent('talks')}
          >
            Live Talks
          </button>
        </div>

        {selectedEvent === 'main' && (
          <div className="main-event">
            <div className="event-hero">
              <div className="event-info">
                <h2>{mainEvent.title}</h2>
                <p className="event-subtitle">{mainEvent.subtitle}</p>
                <div className="event-details">
                  <div className="detail-item">
                    <Calendar size={20} />
                    <span>{mainEvent.date}</span>
                  </div>
                  <div className="detail-item">
                    <Clock size={20} />
                    <span>{mainEvent.time}</span>
                  </div>
                  <div className="detail-item">
                    <MapPin size={20} />
                    <span>{mainEvent.location}</span>
                  </div>
                  <div className="detail-item">
                    <Users size={20} />
                    <span>{mainEvent.capacity}</span>
                  </div>
                </div>
                <p className="event-description">{mainEvent.description}</p>
              </div>
              <div className="registration-card">
                <h3>Registration Status</h3>
                <div className="registration-progress">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${(mainEvent.registered / 1200) * 100}%` }}
                    ></div>
                  </div>
                  <div className="progress-text">
                    {mainEvent.registered} / 1,200 registered
                  </div>
                </div>
                <button className="btn btn-primary">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        )}

        {selectedEvent === 'workshops' && (
          <div className="workshops-section">
            <div className="section-header">
              <h2>Satellite Workshops</h2>
              <p>Deep-dive sessions with experts and peers</p>
            </div>
            <div className="workshops-grid">
              {workshops.map((workshop) => (
                <div key={workshop.id} className="workshop-card">
                  <div className="workshop-header">
                    <h3>{workshop.title}</h3>
                    <div className="workshop-meta">
                      <div className="meta-item">
                        <Calendar size={16} />
                        <span>{workshop.date}</span>
                      </div>
                      <div className="meta-item">
                        <Clock size={16} />
                        <span>{workshop.time}</span>
                      </div>
                      <div className="meta-item">
                        <MapPin size={16} />
                        <span>{workshop.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="workshop-speaker">
                    <strong>Led by:</strong> {workshop.speaker}
                  </div>
                  
                  <p className="workshop-description">{workshop.description}</p>
                  
                  <div className="workshop-topics">
                    {workshop.topics.map((topic) => (
                      <span key={topic} className="topic-tag">
                        {topic}
                      </span>
                    ))}
                  </div>
                  
                  <div className="workshop-footer">
                    <div className="capacity-info">
                      <Users size={16} />
                      <span>{workshop.registered}/{workshop.capacity} registered</span>
                    </div>
                    <button className="btn btn-secondary">
                      Register
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedEvent === 'talks' && (
          <div className="talks-section">
            <div className="section-header">
              <h2>Live Talks Schedule</h2>
              <p>Follow along and engage with speakers in real-time</p>
            </div>
            <div className="talks-list">
              {talks.map((talk) => (
                <div key={talk.id} className={`talk-card ${talk.live ? 'live' : ''}`}>
                  <div className="talk-time">
                    <div className="time">{talk.time}</div>
                    <div className="duration">{talk.duration}</div>
                    {talk.live && <div className="live-indicator">LIVE</div>}
                  </div>
                  <div className="talk-content">
                    <h3>{talk.title}</h3>
                    <p className="speaker">by {talk.speaker}</p>
                    <p className="talk-description">{talk.description}</p>
                  </div>
                  <div className="talk-actions">
                    {talk.live ? (
                      <button className="btn btn-primary">
                        <Play size={16} />
                        Watch Live
                      </button>
                    ) : (
                      <button className="btn btn-secondary">
                        <BookOpen size={16} />
                        Learn More
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;