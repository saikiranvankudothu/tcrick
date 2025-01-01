import React, { useState } from 'react';
import { MessageSquare, ThumbsUp } from 'lucide-react';

const initialComments = [
  {
    id: 1,
    user: 'Cricket Fan',
    comment: 'What an amazing match! Edge of the seat thriller!',
    likes: 24,
    time: '5m ago',
  },
  {
    id: 2,
    user: 'Sports Enthusiast',
    comment: 'The bowling performance was exceptional today.',
    likes: 18,
    time: '15m ago',
  },
];

export default function FanZone() {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment = {
      id: comments.length + 1,
      user: 'You',
      comment: newComment,
      likes: 0,
      time: 'Just now',
    };

    setComments([comment, ...comments]);
    setNewComment('');
  };

  return (
    <div className="bg-white dark:bg-[#0D1117] rounded-xl shadow-md p-6 mb-8 border border-gray-200 dark:border-[#161B22] hover:shadow-lg dark:hover:border-[#1F2937] hover:ring-2 dark:ring-[#1F6FEB] transition-shadow">
      <h2 className="text-xl font-bold text-gray-900 dark:text-[#C9D1D9] mb-4">Fan Zone</h2>

      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex space-x-4">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Share your thoughts..."
            className="flex-1 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Comment
          </button>
        </div>
      </form>

      <div className="space-y-4">
        {comments.map(comment => (
          <div
            key={comment.id}
            className="border-b border-gray-200 dark:border-gray-700 last:border-0 pb-4 last:pb-0"
          >
            <div className="flex justify-between items-start mb-2">
              <span className="font-medium text-gray-900 dark:text-white">{comment.user}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">{comment.time}</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-2">{comment.comment}</p>
            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <button className="flex items-center space-x-1 hover:text-indigo-600 dark:hover:text-indigo-400">
                <ThumbsUp className="h-4 w-4" />
                <span>{comment.likes}</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-indigo-600 dark:hover:text-indigo-400">
                <MessageSquare className="h-4 w-4" />
                <span>Reply</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}