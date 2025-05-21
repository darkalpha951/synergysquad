import React from 'react';
import { Brain, Truck, Thermometer, Bone as Drone, Cloud, Database, Leaf } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, bgColor, iconColor }) => {
  return (
    <div className={`p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${bgColor}`}>
      <div className={`rounded-full w-14 h-14 flex items-center justify-center mb-4 ${iconColor}`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Brain size={28} className="text-white" />,
      title: "AI-Powered Route Optimization",
      description: "Machine learning algorithms that analyze road conditions, traffic patterns, and delivery schedules to create optimal routes.",
      bgColor: "bg-white",
      iconColor: "bg-purple-600"
    },
    {
      icon: <Truck size={28} className="text-white" />,
      title: "Dynamic Load Balancing",
      description: "Automatically match transport vehicles with appropriate capacity to farmer needs, reducing empty miles and costs.",
      bgColor: "bg-white",
      iconColor: "bg-blue-600"
    },
    {
      icon: <Thermometer size={28} className="text-white" />,
      title: "Predictive Spoilage Alerts",
      description: "Sensors that monitor temperature and humidity, alerting drivers and farmers to conditions that may lead to produce spoilage.",
      bgColor: "bg-white",
      iconColor: "bg-amber-600"
    },
    {
      icon: <Drone size={28} className="text-white" />,
      title: "Drone Delivery for Remote Areas",
      description: "Last-mile delivery using drones for hard-to-reach farms, ensuring all farmers have access to transport solutions.",
      bgColor: "bg-white",
      iconColor: "bg-red-600"
    },
    {
      icon: <Database size={28} className="text-white" />,
      title: "Blockchain-Backed Carbon Credits",
      description: "Tracking and rewarding eco-friendly transport choices with verifiable carbon credits on a transparent blockchain.",
      bgColor: "bg-white",
      iconColor: "bg-green-600"
    },
    {
      icon: <Cloud size={28} className="text-white" />,
      title: "Solar-Powered Cold Storage",
      description: "Network of solar-powered cold storage units strategically placed to extend produce shelf life while minimizing energy costs.",
      bgColor: "bg-white",
      iconColor: "bg-cyan-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-emerald-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-800 font-semibold text-sm mb-4">
            Innovation
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Unique Features
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Cutting-edge technologies working together to revolutionize agricultural transport.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              bgColor={feature.bgColor}
              iconColor={feature.iconColor}
            />
          ))}
        </div>

        {/* Additional Feature Highlight */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-semibold text-sm mb-4">
                Sustainability
              </span>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Eco-Friendly Impact
              </h3>
              <p className="text-gray-600 mb-4">
                Our smart logistics system reduces carbon emissions by optimizing routes and reducing empty miles. 
                Solar-powered storage facilities further minimize environmental impact.
              </p>
              <div className="flex items-center">
                <Leaf className="text-emerald-500 mr-2" size={20} />
                <span className="text-emerald-700 font-medium">30% reduction in transport-related emissions</span>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Sustainable Agriculture" 
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;