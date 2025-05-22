import React from 'react';
import { Crop } from '../types/crop';

interface CropCardProps {
  crop: Crop;
  onClick: () => void;
}

const CropCard: React.FC<CropCardProps> = ({ crop, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={crop.image} 
          alt={crop.name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-gray-800">{crop.name}</h3>
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
            {crop.type}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-3">{crop.summary}</p>
        <div className="flex flex-wrap gap-2">
          <div className="flex items-center text-xs text-gray-500">
            <span className="mr-1">🌡️</span>
            <span>{crop.temperature.min}°-{crop.temperature.max}°C</span>
          </div>
          <div className="flex items-center text-xs text-gray-500">
            <span className="mr-1">💧</span>
            <span>{crop.humidity.min}-{crop.humidity.max}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropCard;