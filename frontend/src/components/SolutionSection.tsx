import React from 'react';
import { Volume2, Map, BarChart2, WifiOff, Snowflake } from 'lucide-react';

interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ icon, title, description, color }) => {
  return (
    <div className={`p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 ${color}`}>
      <div className="flex items-center mb-4">
        <div className="mr-4">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const SolutionSection: React.FC = () => {
  const solutions = [
    {
      icon: <Volume2 size={24} className="text-blue-500" />,
      title: "VoiceLink Booking",
      description: "Voice-enabled booking system in local languages for farmers with limited literacy, making technology accessible to all.",
      color: "border-blue-500"
    },
    {
      icon: <Map size={24} className="text-emerald-500" />,
      title: "Smart Load Pooling",
      description: "AI-powered load pooling using Google Maps API to optimize routes and reduce per-farmer transportation costs.",
      color: "border-emerald-500"
    },
    {
      icon: <BarChart2 size={24} className="text-purple-500" />,
      title: "Market Linkage Tool",
      description: "Real-time market price updates and predictions to help farmers make informed decisions about when and where to sell.",
      color: "border-purple-500"
    },
    {
      icon: <WifiOff size={24} className="text-amber-500" />,
      title: "Offline-First App",
      description: "App works offline with SMS fallback, ensuring farmers stay connected even in areas with poor internet connectivity.",
      color: "border-amber-500"
    },
    {
      icon: <Snowflake size={24} className="text-cyan-500" />,
      title: "Integrated Cold Storage",
      description: "Coordinated cold storage scheduling to reduce spoilage and extend the shelf life of perishable agricultural produce.",
      color: "border-cyan-500"
    }
  ];

  return (
    <section id="solution" className="py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-semibold text-sm mb-4">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Smart Transport Solutions
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Our integrated platform connects farmers, transporters, and markets through innovative technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
              color={solution.color}
            />
          ))}
        </div>

        {/* Solution Overview */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-emerald-100 rounded-full opacity-50"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-emerald-100 rounded-full opacity-50"></div>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center relative z-10">
            How It All Works Together
          </h3>
          
          <div className="relative z-10">
            <img 
              src="https://images.pexels.com/photos/7948048/pexels-photo-7948048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Smart Agri Transport Solution" 
              className="rounded-lg shadow-md w-full h-64 object-cover mb-6"
            />
            
            <p className="text-gray-600 text-center max-w-3xl mx-auto">
              Our solution brings together voice technology, AI, market data, and smart logistics 
              to create a seamless experience for farmers. From booking transport to getting the 
              best market prices, we handle the entire journey of agricultural produce from farm to market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;