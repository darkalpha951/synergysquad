import React from 'react';
import { X } from 'lucide-react';
import { Crop } from '../types/crop';

interface CropDetailsProps {
  crop: Crop;
  isOpen: boolean;
  onClose: () => void;
}

const CropDetails: React.FC<CropDetailsProps> = ({ crop, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div 
        className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <div className="h-64 overflow-hidden">
            <img 
              src={crop.image} 
              alt={crop.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white bg-opacity-75 p-2 rounded-full hover:bg-opacity-100 transition-colors duration-200"
          >
            <X size={24} className="text-gray-800" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <h2 className="text-3xl font-bold text-gray-800">{crop.name}</h2>
            <span className="px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-800">
              {crop.type}
            </span>
            <span className="px-3 py-1 text-sm font-medium rounded-full bg-amber-100 text-amber-800">
              {crop.category}
            </span>
          </div>

          <p className="text-gray-600 text-lg mb-6">{crop.summary}</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Storage Conditions</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-gray-700">Temperature:</p>
                  <div className="flex items-center mt-1">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-red-500 h-2.5 rounded-full" 
                        style={{ width: `${(crop.temperature.max / 30) * 100}%` }}
                      ></div>
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      {crop.temperature.min}°-{crop.temperature.max}°C
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{crop.temperature.description}</p>
                </div>

                <div>
                  <p className="font-medium text-gray-700">Humidity:</p>
                  <div className="flex items-center mt-1">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-blue-500 h-2.5 rounded-full" 
                        style={{ width: `${crop.humidity.max}%` }}
                      ></div>
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      {crop.humidity.min}-{crop.humidity.max}%
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{crop.humidity.description}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Storage Information</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-gray-700">Shelf Life:</p>
                    <p className="text-gray-600">{crop.shelfLife}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Storage Method:</p>
                    <p className="text-gray-600">{crop.storageMethod}</p>
                  </div>
                  {crop.pests && (
                    <div>
                      <p className="font-medium text-gray-700">Pest Risks:</p>
                      <p className="text-gray-600">{crop.pests}</p>
                    </div>
                  )}
                </div>
              </div>

              {(crop.specialNotes || crop.ethyleneSensitive || crop.precoolingNeeded) && (
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-800 mb-3">Special Notes</h3>
                  <ul className="space-y-2 list-disc list-inside text-gray-600">
                    {crop.specialNotes && <li>{crop.specialNotes}</li>}
                    {crop.ethyleneSensitive && <li>Sensitive to ethylene - keep away from ethylene-producing fruits</li>}
                    {crop.precoolingNeeded && <li>Pre-cooling needed before storage</li>}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button 
              onClick={onClose}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropDetails;