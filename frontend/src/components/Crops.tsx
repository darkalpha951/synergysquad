import React, { useState, useEffect, useMemo } from 'react';
import { ScalingIcon as SeedlingIcon } from 'lucide-react';
import CropCard from './CropCard';
import CropDetails from './CropDetails';
// import FilterDropdown from './FilterDropdown';
// import ExportButton from './ExportButton';
import { crops } from '../data/cropData';
import { Crop } from '../types/crop';

const Crops: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCropType, setSelectedCropType] = useState('All');
  const [selectedTemperature, setSelectedTemperature] = useState('All');
  const [selectedHumidity, setSelectedHumidity] = useState('All');
  const [selectedCrop, setSelectedCrop] = useState<Crop | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter crops based on search and filters
  const filteredCrops = useMemo(() => {
    return crops.filter(crop => {
      // Filter by search query
      const matchesSearch = crop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            crop.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            crop.type.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Filter by crop type
      const matchesType = selectedCropType === 'All' || crop.type === selectedCropType;
      
      // Filter by temperature range
      let matchesTemperature = true;
      if (selectedTemperature !== 'All') {
        const avgTemp = (crop.temperature.min + crop.temperature.max) / 2;
        if (selectedTemperature === 'Cold (0-5°C)') {
          matchesTemperature = avgTemp <= 5;
        } else if (selectedTemperature === 'Cool (6-12°C)') {
          matchesTemperature = avgTemp > 5 && avgTemp <= 12;
        } else if (selectedTemperature === 'Moderate (13-18°C)') {
          matchesTemperature = avgTemp > 12 && avgTemp <= 18;
        } else if (selectedTemperature === 'Warm (>18°C)') {
          matchesTemperature = avgTemp > 18;
        }
      }
      
      // Filter by humidity level
      let matchesHumidity = true;
      if (selectedHumidity !== 'All') {
        const avgHumidity = (crop.humidity.min + crop.humidity.max) / 2;
        if (selectedHumidity === 'Low (<30%)') {
          matchesHumidity = avgHumidity < 30;
        } else if (selectedHumidity === 'Medium (30-70%)') {
          matchesHumidity = avgHumidity >= 30 && avgHumidity < 70;
        } else if (selectedHumidity === 'High (70-90%)') {
          matchesHumidity = avgHumidity >= 70 && avgHumidity < 90;
        } else if (selectedHumidity === 'Very High (>90%)') {
          matchesHumidity = avgHumidity >= 90;
        }
      }
      
      return matchesSearch && matchesType && matchesTemperature && matchesHumidity;
    });
  }, [searchQuery, selectedCropType, selectedTemperature, selectedHumidity]);

  const handleCropClick = (crop: Crop) => {
    setSelectedCrop(crop);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Update document title
  useEffect(() => {
    document.title = 'Crop Storage & Handling | Agricultural Logistics';
    return () => {
      document.title = 'Vite + React + TS';
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-700 to-green-900 text-white py-6 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <SeedlingIcon size={32} />
              <h1 className="text-2xl md:text-3xl font-bold">Crop Storage Management</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Search and Filters */}
      {/* <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            <div className="lg:col-span-2">
              <SearchBar 
                searchQuery={searchQuery} 
                onSearchChange={setSearchQuery} 
              />
            </div>
            <div>
              <FilterDropdown 
                label="Crop Type" 
                options={getCropTypes()} 
                selectedOption={selectedCropType} 
                onChange={setSelectedCropType} 
              />
            </div>
            <div>
              <FilterDropdown 
                label="Temperature" 
                options={getTemperatureRanges()} 
                selectedOption={selectedTemperature} 
                onChange={setSelectedTemperature} 
              />
            </div>
            <div>
              <FilterDropdown 
                label="Humidity" 
                options={getHumidityLevels()} 
                selectedOption={selectedHumidity} 
                onChange={setSelectedHumidity} 
              />
            </div>
          </div>

          <div className="flex items-center justify-between mt-6">
            <p className="text-gray-600">
              Showing <span className="font-semibold">{filteredCrops.length}</span> of <span className="font-semibold">{crops.length}</span> crops
            </p>
            <ExportButton crops={filteredCrops} filteredCount={filteredCrops.length} totalCount={crops.length} />
          </div>
        </div> */}

        {/* Crop Grid */}
        {filteredCrops.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCrops.map((crop) => (
              <CropCard 
                key={crop.id} 
                crop={crop} 
                onClick={() => handleCropClick(crop)} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
              <SeedlingIcon size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No crops found</h3>
              <p className="text-gray-600 mb-4">
                No crops match your current filters. Try adjusting your search criteria.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCropType('All');
                  setSelectedTemperature('All');
                  setSelectedHumidity('All');
                }}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                Reset All Filters
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Crop Details Modal */}
      {selectedCrop && (
        <CropDetails
          crop={selectedCrop}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">© 2025 Agricultural Logistics. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Crops;