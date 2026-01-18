import React, { useState } from 'react';
import { MessageSquare, Users, BookOpen, TrendingUp, Plus, Search } from 'lucide-react';
import './Community.css';

const Community = () => {
  const [activeTab, setActiveTab] = useState('discussions');
  const [searchTerm, setSearchTerm] = useState('');

  const discussions = [
    {
      id: 1,
      title: 'The Future of AI Ethics in European Universities',
      author: 'Anna Schmidt',
      school: 'TU Berlin',
      country: '🇩🇪',
      replies: 23,
      likes: 45,
      lastActivity: '2 hours ago',
      tags: ['AI Ethics', 'Tech for Good'],
      preview: 'How can we ensure AI development in academic settings prioritizes ethical considerations...'
    },
    {
      id: 2,
      title: 'Sustainable Campus Initiatives Across EULiST',
      author: 'Carlos Rodriguez',
      school: 'UPM Madrid',
      country: '🇪🇸',
      replies: 18,
      likes: 32,
      lastActivity: '5 hours ago',
      tags: ['Climate Action', 'Sustainable Development'],
      preview: 'Sharing successful sustainability projects from our campus and looking for collaboration...'
    },
    {
      id: 3,
      title: 'Cross-Cultural Design Thinking Workshop Ideas',
      author: 'Elina Virtanen',
      school: 'Aalto University',
      country: '🇫🇮',
      replies: 15,
      likes: 28,
      lastActivity: '1 day ago',
      tags: ['Cultural Exchange', 'Art & Science'],
      preview: 'Planning a workshop that combines Finnish design principles with other European approaches...'
    }
  ];

  const groups = [
    {
      id: 1,
      name: 'AI Ethics Collective',
      members: 127,
      description: 'Discussing ethical implications of AI in research and society',
      activity: 'Very Active',
      tags: ['AI Ethics', 'Tech for Good', 'Digital Rights'],
      recentPost: 'New paper on algorithmic bias in hiring - thoughts?'
    },
    {
      id: 2,
      name: 'Climate Action Network',
      members: 89,
      description: 'Coordinating sustainability initiatives across EULiST campuses',
      activity: 'Active',
      tags: ['Climate Action', 'Sustainable Development'],
      recentPost: 'Carbon footprint reduction challenge - who\'s in?'
    },
    {
      id: 3,
      name: 'European Innovation Hub',
      members: 156,
      description: 'Sharing startup ideas and entrepreneurship opportunities',
      activity: 'Moderate',
      tags: ['Social Innovation', 'Future of Work'],
      recentPost: 'Looking for co-founders for EdTech startup'
    }
  ];

  const resources = [
    {
      id: 1,
      title: 'TEDx Talk: "Breaking Social Fragmentation"',
      type: 'Video',
      author: 'Dr. Hans Mueller',
      duration: '15 min',
      views: 1240,
      tags: ['European Citizenship', 'Social Innovation']
    },
    {
      id: 2,
      title: 'Research Paper: AI Ethics Framework',
      type: 'Document',
      author: 'Anna Schmidt',
      pages: '24 pages',
      downloads: 89,
      tags: ['AI Ethics', 'Tech for Good']
    },
    {
      id: 3,
      title: 'Sustainability Toolkit for Universities',
      type: 'Resource Kit',
      author: 'EULiST Sustainability Team',
      items: '12 tools',
      downloads: 156,
      tags: ['Climate Action', 'Sustainable Development']
    }
  ];

  const filteredContent = (content) => {
    if (!searchTerm) return content;
    return content.filter(item => 
      item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };

  return (
    <div className="community fade-in">
      <div className="container">
        <div className="community-header">
          <h1>Community Hub</h1>
          <p>Continue the conversation beyond the event</p>
        </div>

        <div className="community-controls">
          <div className="search-bar">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search discussions, groups, or resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="btn btn-primary">
            <Plus size={16} />
            New Post
          </button>
        </div>

        <div className="community-tabs">
          <button 
            className={`tab ${activeTab === 'discussions' ? 'active' : ''}`}
            onClick={() => setActiveTab('discussions')}
          >
            <MessageSquare size={20} />
            Discussions
          </button>
          <button 
            className={`tab ${activeTab === 'groups' ? 'active' : ''}`}
            onClick={() => setActiveTab('groups')}
          >
            <Users size={20} />
            Groups
          </button>
          <button 
            className={`tab ${activeTab === 'resources' ? 'active' : ''}`}
            onClick={() => setActiveTab('resources')}
          >
            <BookOpen size={20} />
            Resources
          </button>
        </div>

        {activeTab === 'discussions' && (
          <div className="discussions-section">
            <div className="discussions-list">
              {filteredContent(discussions).map((discussion) => (
                <div key={discussion.id} className="discussion-card">
                  <div className="discussion-header">
                    <h3>{discussion.title}</h3>
                    <div className="discussion-meta">
                      <span className="author">
                        {discussion.country} {discussion.author} • {discussion.school}
                      </span>
                      <span className="activity">{discussion.lastActivity}</span>
                    </div>
                  </div>
                  
                  <p className="discussion-preview">{discussion.preview}</p>
                  
                  <div className="discussion-tags">
                    {discussion.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="discussion-stats">
                    <div className="stat">
                      <MessageSquare size={16} />
                      <span>{discussion.replies} replies</span>
                    </div>
                    <div className="stat">
                      <TrendingUp size={16} />
                      <span>{discussion.likes} likes</span>
                    </div>
                    <button className="btn btn-secondary btn-sm">
                      Join Discussion
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'groups' && (
          <div className="groups-section">
            <div className="groups-grid">
              {filteredContent(groups).map((group) => (
                <div key={group.id} className="group-card">
                  <div className="group-header">
                    <h3>{group.name}</h3>
                    <div className="group-meta">
                      <span className="members">
                        <Users size={16} />
                        {group.members} members
                      </span>
                      <span className={`activity ${group.activity.toLowerCase().replace(' ', '-')}`}>
                        {group.activity}
                      </span>
                    </div>
                  </div>
                  
                  <p className="group-description">{group.description}</p>
                  
                  <div className="group-tags">
                    {group.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="recent-activity">
                    <strong>Recent:</strong> {group.recentPost}
                  </div>
                  
                  <button className="btn btn-primary">
                    Join Group
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'resources' && (
          <div className="resources-section">
            <div className="resources-list">
              {filteredContent(resources).map((resource) => (
                <div key={resource.id} className="resource-card">
                  <div className="resource-header">
                    <div className="resource-type">{resource.type}</div>
                    <h3>{resource.title}</h3>
                    <div className="resource-author">by {resource.author}</div>
                  </div>
                  
                  <div className="resource-meta">
                    <span>
                      {resource.duration || resource.pages || resource.items}
                    </span>
                    <span>
                      {resource.views ? `${resource.views} views` : `${resource.downloads} downloads`}
                    </span>
                  </div>
                  
                  <div className="resource-tags">
                    {resource.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="resource-actions">
                    <button className="btn btn-primary">
                      {resource.type === 'Video' ? 'Watch' : 'Download'}
                    </button>
                    <button className="btn btn-secondary">
                      Share
                    </button>
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

export default Community;