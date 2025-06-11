import React, { useState, useEffect } from 'react';
import { Palette, Zap, Globe, Shield, Users, BarChart, Code, Smartphone } from 'lucide-react';

const features = [
  {
    icon: Palette,
    title: 'Beautiful Templates',
    description: 'Choose from dozens of professionally designed templates that make your content shine and stand out.',
    color: 'from-blue-500 to-purple-500'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Built with modern technology for blazing fast loading speeds and smooth interactions.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Share your story with the world through optimized SEO and social media integration.',
    color: 'from-pink-500 to-red-500'
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Your content is protected with enterprise-grade security and 99.9% uptime guarantee.',
    color: 'from-green-500 to-blue-500'
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Connect with other creators and grow your audience through our vibrant community.',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: BarChart,
    title: 'Analytics Insights',
    description: 'Track your performance with detailed analytics and grow your digital presence.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Code,
    title: 'No Code Required',
    description: 'Build professional websites without writing a single line of code. Drag, drop, and publish.',
    color: 'from-teal-500 to-blue-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile Optimized',
    description: 'Every template is fully responsive and looks perfect on all devices and screen sizes.',
    color: 'from-violet-500 to-purple-500'
  }
];

const Features = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-6">
            ✨ Powerful Features
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Everything You Need to
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Succeed</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Powerful features designed to help you create, share, and grow your digital presence effortlessly. No technical skills required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-transparent relative overflow-hidden ${
                index === currentIndex ? 'ring-2 ring-blue-500 scale-105' : ''
              }`}
              style={{ 
                animationDelay: `${index * 100}ms`,
                transform: index === currentIndex ? 'translateY(-8px) scale(1.05)' : ''
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                index === currentIndex ? 'opacity-100' : ''
              }`}></div>
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg ${
                  index === currentIndex ? 'scale-110 rotate-3' : ''
                }`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className={`text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 ${
                  index === currentIndex ? 'text-blue-600' : ''
                }`}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;