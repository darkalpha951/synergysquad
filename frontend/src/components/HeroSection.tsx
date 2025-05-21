import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-emerald-700/70 mix-blend-multiply"></div>
        <img 
          src="https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Agricultural field" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 pt-16">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-semibold text-sm mb-6">
            Smart Agri Transport
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Smart Transport Solutions for Sustainable Farming
          </h1>
          <p className="text-xl text-emerald-50 mb-8 max-w-2xl">
            Revolutionizing agricultural logistics to empower small and marginal farmers with efficient, eco-friendly transport solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#solution" 
              className="flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-md transition-colors duration-200"
            >
              Explore the Solution
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#problem" 
              className="px-6 py-3 bg-white hover:bg-gray-100 text-emerald-800 font-medium rounded-md transition-colors duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white mb-2 text-sm font-medium">Scroll to Discover</span>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;