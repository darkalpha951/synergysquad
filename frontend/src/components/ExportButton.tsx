import React from 'react';
import { Download } from 'lucide-react';
import { Crop } from '../types/crop';

interface ExportButtonProps {
  crops: Crop[];
  filteredCount: number;
  totalCount: number;
}

const ExportButton: React.FC<ExportButtonProps> = ({ crops, filteredCount, totalCount }) => {
  const handleExport = () => {
    // Create CSV data
    const headers = ['Name', 'Type', 'Category', 'Temperature', 'Humidity', 'Shelf Life', 'Storage Method'];
    const csvRows = [headers];
    
    crops.forEach(crop => {
      const row = [
        crop.name,
        crop.type,
        crop.category,
        `${crop.temperature.min}-${crop.temperature.max}°C`,
        `${crop.humidity.min}-${crop.humidity.max}%`,
        crop.shelfLife,
        crop.storageMethod
      ];
      csvRows.push(row);
    });
    
    const csvContent = csvRows.map(row => row.join(',')).join('\n');
    
    // Create blob and download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'crop_data.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <button
      onClick={handleExport}
      className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
      title="Export crop data as CSV"
    >
      <Download size={16} />
      <span>Export Data ({filteredCount}/{totalCount})</span>
    </button>
  );
};

export default ExportButton;