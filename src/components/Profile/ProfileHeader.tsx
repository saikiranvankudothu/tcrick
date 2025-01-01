import React, { useState } from 'react';
import { Settings, MapPin, LinkIcon, LogOut, Share2, Edit, Check } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface ProfileHeaderProps {
  user: {
    name: string;
    username: string;
    bio: string;
    location: string;
    website: string;
    isFollowing: boolean;
    stats: {
      matches: number;
      followers: number;
      following: number;
      posts: number;
    };
  };
}

export default function ProfileHeader({ user }: ProfileHeaderProps) {
  const { logout } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);
  const [isFollowing, setIsFollowing] = useState(user.isFollowing);

  const handleShare = async () => {
    try {
      await navigator.share({
        title: `${user.name}'s Profile`,
        text: user.bio,
        url: window.location.href,
      });
    } catch (error) {
      navigator.clipboard.writeText(window.location.href);
      alert('Profile link copied to clipboard!');
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically update the user data on the server
    console.log('Saving user data:', editedUser);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedUser(prev => ({ ...prev, [name]: value }));
  };

  const toggleFollow = () => {
    setIsFollowing(prev => !prev);
    // Here you would typically update the follow status on the server
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-6">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="relative w-32 h-32 rounded-full border-4 border-gray-200 dark:border-gray-700 overflow-hidden flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80"
            alt={editedUser.name}
            className="w-full h-full object-cover"
          />
          {isEditing && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <Edit className="w-8 h-8 text-white" />
            </div>
          )}
        </div>

        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={editedUser.name}
                onChange={handleInputChange}
                className="text-2xl font-bold text-gray-900 dark:text-white bg-transparent border-b border-gray-300 dark:border-gray-600 focus:outline-none focus:border-indigo-500"
              />
            ) : (
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{editedUser.name}</h1>
            )}
            <div className="flex flex-wrap gap-3">
              {!isEditing && (
                <>
                  <button 
                    onClick={toggleFollow}
                    className={`px-6 py-2 rounded-lg transition-colors ${
                      isFollowing
                        ? 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600'
                        : 'bg-indigo-600 text-white hover:bg-indigo-700'
                    }`}
                  >
                    {isFollowing ? 'Following' : 'Follow'}
                  </button>
                  <button 
                    onClick={handleShare}
                    className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
                  >
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                </>
              )}
              {isEditing ? (
                <button
                  onClick={handleSave}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  Save
                </button>
              ) : (
                <button
                  onClick={handleEdit}
                  className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <Settings className="w-5 h-5 text-gray-600 dark:text-white" />
                </button>
              )}
              <button
                onClick={logout}
                className="hidden md:block p-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-red-50 hover:border-red-300 hover:text-red-600 dark:hover:bg-red-900/50 dark:hover:border-red-700 transition-colors"
                aria-label="Logout"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex gap-6 mb-4">
            {['matches', 'followers', 'following', 'posts'].map((stat) => (
              <div key={stat} className="text-center">
                <div className="text-xl font-bold text-gray-900 dark:text-white">{editedUser.stats[stat]}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 capitalize">{stat}</div>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            {isEditing ? (
              <textarea
                name="bio"
                value={editedUser.bio}
                onChange={handleInputChange}
                className="w-full text-gray-600 dark:text-white bg-transparent border border-gray-300 dark:border-gray-600 rounded-md p-2 focus:outline-none focus:border-indigo-500"
                rows={3}
              />
            ) : (
              <p className="text-gray-600 dark:text-white">{editedUser.bio}</p>
            )}
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <MapPin className="w-4 h-4" />
              {isEditing ? (
                <input
                  type="text"
                  name="location"
                  value={editedUser.location}
                  onChange={handleInputChange}
                  className="bg-transparent border-b border-gray-300 dark:border-gray-600 focus:outline-none focus:border-indigo-500"
                />
              ) : (
                <span>{editedUser.location}</span>
              )}
            </div>
            <div className="flex items-center gap-2 text-sm">
              <LinkIcon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              {isEditing ? (
                <input
                  type="text"
                  name="website"
                  value={editedUser.website}
                  onChange={handleInputChange}
                  className="bg-transparent border-b border-gray-300 dark:border-gray-600 focus:outline-none focus:border-indigo-500 text-indigo-600"
                />
              ) : (
                <a href={editedUser.website} className="text-indigo-600 hover:text-indigo-500">{editedUser.website}</a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

