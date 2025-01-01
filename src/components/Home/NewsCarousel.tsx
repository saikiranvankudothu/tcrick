import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const news = [
  {
    id: 1,
    title: 'India Announces Squad for Upcoming Series',
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80',
    category: 'Team News',
    date: '2h ago',
  },
  {
    id: 2,
    title: 'Record-Breaking Partnership in Yesterday\'s Match',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80',
    category: 'Match Report',
    date: '5h ago',
  },
];

export default function NewsCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % news.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + news.length) % news.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
      <div className="relative">
        <div className="relative h-64">
          <img
            src={news[activeSlide].image}
            alt={news[activeSlide].title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-block px-2 py-1 text-xs font-medium text-white bg-indigo-600 rounded-full mb-2">
                {news[activeSlide].category}
              </span>
              <h3 className="text-xl font-bold text-white mb-1">
                {news[activeSlide].title}
              </h3>
              <p className="text-sm text-gray-300">{news[activeSlide].date}</p>
            </div>
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}

