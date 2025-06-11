import React, { useState, useEffect } from 'react';
import { ExternalLink, Heart, Eye } from 'lucide-react';

const showcaseItems = [
  {
    title: 'Creative Portfolio',
    category: 'Designer',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: '12.5K',
    likes: 892,
    gradient: 'from-blue-500 to-purple-500'
  },
  {
    title: 'Photography Studio',
    category: 'Photographer',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: '8.3K',
    likes: 654,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Tech Blog',
    category: 'Developer',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: '15.7K',
    likes: 1200,
    gradient: 'from-green-500 to-blue-500'
  },
  {
    title: 'Food Journey',
    category: 'Chef',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: '9.8K',
    likes: 743,
    gradient: 'from-orange-500 to-red-500'
  },
  {
    title: 'Travel Stories',
    category: 'Traveler',
    image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: '22.1K',
    likes: 1800,
    gradient: 'from-teal-500 to-blue-500'
  },
  {
    title: 'Music Producer',
    category: 'Artist',
    image: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: '11.4K',
    likes: 967,
    gradient: 'from-violet-500 to-purple-500'
  }
];

const additionalItems = [
  {
    title: 'Fashion Blog',
    category: 'Influencer',
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: '18.2K',
    likes: 1456,
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    title: 'Fitness Coach',
    category: 'Trainer',
    image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: '13.7K',
    likes: 1089,
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Architecture Firm',
    category: 'Architect',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: '16.4K',
    likes: 1234,
    gradient: 'from-gray-500 to-slate-500'
  }
];

const Showcase = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [likedItems, setLikedItems] = useState<Set<number>>(new Set());
  const [itemLikes, setItemLikes] = useState<{[key: number]: number}>({});
  
  const texts = ['Creating', 'Building', 'Designing', 'Crafting', 'Developing'];
  
  useEffect(() => {
    // Initialize likes
    const initialLikes: {[key: number]: number} = {};
    [...showcaseItems, ...additionalItems].forEach((item, index) => {
      initialLikes[index] = item.likes;
    });
    setItemLikes(initialLikes);
  }, []);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
      }
      
      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }, isDeleting ? 50 : 100);
    
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, texts]);

  const handleLike = (index: number) => {
    const newLikedItems = new Set(likedItems);
    const newItemLikes = { ...itemLikes };
    
    if (likedItems.has(index)) {
      newLikedItems.delete(index);
      newItemLikes[index] = newItemLikes[index] - 1;
    } else {
      newLikedItems.add(index);
      newItemLikes[index] = newItemLikes[index] + 1;
    }
    
    setLikedItems(newLikedItems);
    setItemLikes(newItemLikes);
  };

  const allItems = showAll ? [...showcaseItems, ...additionalItems] : showcaseItems;

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-800 text-sm font-medium mb-6">
            🎨 Creator Showcase
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            See What Others Are
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block min-h-[1.2em]">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get inspired by amazing websites created by our community of creators from around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allItems.map((item, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors duration-200">
                    <ExternalLink className="h-4 w-4 text-gray-700" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className={`inline-block px-3 py-1 bg-gradient-to-r ${item.gradient} text-white text-xs font-medium rounded-full mb-3`}>
                  {item.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    {item.views}
                  </div>
                  <button 
                    onClick={() => handleLike(index)}
                    className="flex items-center gap-1 hover:text-red-500 transition-colors duration-200 group/like"
                  >
                    <Heart 
                      className={`h-4 w-4 transition-all duration-200 group-hover/like:scale-110 ${
                        likedItems.has(index) ? 'fill-red-500 text-red-500' : ''
                      }`} 
                    />
                    {itemLikes[index]?.toLocaleString() || item.likes.toLocaleString()}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {showAll ? 'Show Less' : 'View All Showcases'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Showcase;