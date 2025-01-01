import React, { useState } from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

interface Post {
  id: string;
  image: string;
  likes: number;
  comments: number;
}

interface PostGridProps {
  posts: Post[];
  loading?: boolean;
}

export default function PostGrid({ posts, loading }: PostGridProps) {
  const [likedPosts, setLikedPosts] = useState<string[]>([]);

  const toggleLike = (postId: string) => {
    setLikedPosts(prev => 
      prev.includes(postId) ? prev.filter(id => id !== postId) : [...prev, postId]
    );
  };

  const handleShare = async (post: Post) => {
    try {
      await navigator.share({
        title: 'Check out this post!',
        text: 'I found this amazing cricket post!',
        url: `https://example.com/post/${post.id}`,
      });
    } catch (error) {
      console.error('Error sharing:', error);
      alert('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="group relative aspect-square bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden"
        >
          <img
            src={post.image}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="flex gap-6 text-white">
              <button
                onClick={() => toggleLike(post.id)}
                className="flex items-center gap-2 hover:text-red-500 transition-colors"
              >
                <Heart className={`w-6 h-6 ${likedPosts.includes(post.id) ? 'fill-red-500 text-red-500' : ''}`} />
                <span className="text-lg font-medium">{likedPosts.includes(post.id) ? post.likes + 1 : post.likes}</span>
              </button>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-6 h-6" />
                <span className="text-lg font-medium">{post.comments}</span>
              </div>
              <button
                onClick={() => handleShare(post)}
                className="flex items-center gap-2 hover:text-blue-500 transition-colors"
              >
                <Share2 className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

