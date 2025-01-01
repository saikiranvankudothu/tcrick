import React, { useState, useEffect } from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileTabs from './ProfileTabs';
import PostGrid from './PostGrid';

const mockUser = {
  name: 'John Smith',
  username: 'johnsmith',
  bio: 'Cricket enthusiast | Professional photographer | Travel lover',
  location: 'Mumbai, India',
  website: 'https://johnsmith.com',
  isFollowing: false,
  stats: {
    matches: 42,
    followers: 1234,
    following: 567,
    posts: 89,
  },
};

const mockPosts = [
  {
    id: 'post_1',
    type: 'post',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80',
    likes: 234,
    comments: 12,
  },
  {
    id: 'post_2',
    type: 'post',
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80',
    likes: 187,
    comments: 8,
  },
  {
    id: 'post_3',
    type: 'post',
    image: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?auto=format&fit=crop&q=80',
    likes: 342,
    comments: 15,
  },
];

const mockArticles = [
  { id: 'article_1', type: 'article', title: 'The Evolution of Cricket Bats', likes: 156, comments: 23 },
  { id: 'article_2', type: 'article', title: 'Top 10 Cricket Stadiums Around the World', likes: 203, comments: 31 },
  { id: 'article_3', type: 'article', title: 'Mastering the Art of Spin Bowling', likes: 178, comments: 19 },
];

export default function Profile() {
  const [activeTab, setActiveTab] = useState('posts');
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState<any[]>([]);

  useEffect(() => {
    setLoading(true);
    // Simulating API call
    setTimeout(() => {
      switch (activeTab) {
        case 'posts':
          setContent(mockPosts);
          break;
        case 'articles':
          setContent(mockArticles);
          break;
        case 'liked':
          // Ensure each item has a unique ID when combining posts and articles
          setContent([...mockPosts, ...mockArticles]);
          break;
        case 'stats':
          setContent([]);
          break;
        default:
          setContent([]);
      }
      setLoading(false);
    }, 1000);
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'posts':
      case 'liked':
        return <PostGrid posts={content} loading={loading} />;
      case 'articles':
        return (
          <div className="space-y-4">
            {content.map((article: any) => (
              <div key={article.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{article.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>{article.likes} likes</span>
                  <span>{article.comments} comments</span>
                </div>
              </div>
            ))}
          </div>
        );
      case 'stats':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Performance Stats</h3>
            <p className="text-gray-600 dark:text-gray-400">Coming soon...</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <ProfileHeader user={mockUser} />
        <ProfileTabs activeTab={activeTab} onTabChange={setActiveTab} />
        {renderContent()}
      </div>
    </div>
  );
}