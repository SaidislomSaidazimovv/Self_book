import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Star, Users, Globe } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = ['Digital Story', 'Online Presence', 'Creative Portfolio', 'Personal Brand', 'Dream Website'];
  
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

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-6 animate-bounce-subtle">
              <Star className="h-4 w-4 mr-2" />
              Trusted by 50,000+ creators worldwide
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Create Your
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient block min-h-[1.2em]">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Build beautiful personal websites, portfolios, and digital books that showcase your unique journey and connect with your audience in ways never before possible.
            </p>
          </div>

          <div className="animate-fade-in-up animation-delay-200 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center gap-2">
              Start Building Free
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="group flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors duration-300 px-6 py-4">
              <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <Play className="h-5 w-5 ml-1 text-blue-600" />
              </div>
              Watch Demo (2 min)
            </button>
          </div>

          <div className="animate-fade-in-up animation-delay-300 grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50K+</div>
              <div className="text-gray-600">Active Creators</div>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">2M+</div>
              <div className="text-gray-600">Websites Created</div>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <Star className="h-8 w-8 text-pink-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
              <div className="text-gray-600">User Rating</div>
            </div>
          </div>

          <div className="animate-fade-in-up animation-delay-400">
            <div className="relative max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl shadow-2xl p-4 transform hover:scale-105 transition-all duration-500 hover:shadow-3xl">
                <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-xl p-8 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse animation-delay-200"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse animation-delay-400"></div>
                      <div className="ml-4 text-sm text-gray-400">selfbook.com/your-story</div>
                    </div>
                    <div className="space-y-4">
                      <div className="h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded w-3/4 animate-shimmer"></div>
                      <div className="h-4 bg-gray-600 rounded w-1/2"></div>
                      <div className="h-4 bg-gray-600 rounded w-2/3"></div>
                      <div className="grid grid-cols-3 gap-4 mt-8">
                        <div className="h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg transform hover:scale-105 transition-transform duration-300"></div>
                        <div className="h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg transform hover:scale-105 transition-transform duration-300"></div>
                        <div className="h-24 bg-gradient-to-br from-pink-500 to-red-500 rounded-lg transform hover:scale-105 transition-transform duration-300"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;