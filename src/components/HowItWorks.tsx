import React from 'react';
import { UserPlus, Palette, Share2, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Sign Up Free',
    description: 'Create your account in seconds and start building immediately with our intuitive platform.',
    color: 'from-blue-500 to-purple-500',
    step: '01'
  },
  {
    icon: Palette,
    title: 'Choose & Customize',
    description: 'Select from beautiful templates and customize every detail to match your unique style.',
    color: 'from-purple-500 to-pink-500',
    step: '02'
  },
  {
    icon: Share2,
    title: 'Publish & Share',
    description: 'Launch your website with one click and share your story with the world instantly.',
    color: 'from-pink-500 to-red-500',
    step: '03'
  },
  {
    icon: TrendingUp,
    title: 'Grow & Succeed',
    description: 'Track your growth with analytics and connect with your audience like never before.',
    color: 'from-green-500 to-blue-500',
    step: '04'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-800 text-sm font-medium mb-6">
            🚀 How It Works
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            From Idea to
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Live Website</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Building your digital presence has never been easier. Follow these simple steps to create something amazing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="group relative text-center"
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent z-0"></div>
              )}
              
              <div className="relative z-10 bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-transparent">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className={`w-8 h-8 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white text-sm font-bold`}>
                    {step.step}
                  </div>
                </div>
                
                <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-green-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;