import React from 'react';
import { TruckIcon, TimerIcon, BarChart3Icon, WalletIcon } from 'lucide-react';

interface ProblemCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ProblemCard: React.FC<ProblemCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <div className="text-amber-600 mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: <TruckIcon size={28} />,
      title: "Inefficient Transport",
      description: "Small farmers struggle with unreliable transport options, leading to delays and higher costs per trip due to unoptimized loads."
    },
    {
      icon: <TimerIcon size={28} />,
      title: "Produce Spoilage",
      description: "Without proper cold storage and timely transport, up to 30% of harvested produce spoils before reaching the market."
    },
    {
      icon: <BarChart3Icon size={28} />,
      title: "Limited Tech Access",
      description: "Many farmers lack access to modern logistics technology, relying on traditional methods that don't scale with market demands."
    },
    {
      icon: <WalletIcon size={28} />,
      title: "High Operational Costs",
      description: "Individual transportation arrangements result in higher costs that significantly reduce profit margins for small-scale farmers."
    }
  ];

  return (
    <section id="problem" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 font-semibold text-sm mb-4">
            The Challenge
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Problem We're Solving
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Agricultural transport faces critical challenges affecting millions of small and marginal farmers worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <ProblemCard
              key={index}
              icon={problem.icon}
              title={problem.title}
              description={problem.description}
            />
          ))}
        </div>

        {/* Infographic */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Impact on Agricultural Economy
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="text-4xl font-bold text-amber-600 mb-2">30%</div>
              <p className="text-gray-600">Post-harvest loss due to transport issues</p>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-amber-600 mb-2">45%</div>
              <p className="text-gray-600">Higher transport costs for small farmers</p>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-amber-600 mb-2">60%</div>
              <p className="text-gray-600">Reduction in price realization due to middlemen</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;