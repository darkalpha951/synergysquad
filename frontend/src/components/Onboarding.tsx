import React from 'react';
import { Phone, ExternalLink, Mic, Users } from 'lucide-react';

const Onboarding: React.FC = () => {
  const supportPhoneNumber1 = "+91 98764 78293";
  const supportPhoneNumber2 = "+91 72919 31320";
//   const governmentPortalUrl = "https://www.india.gov.in/topics/agriculture";
  const governmentPortalUrl = "https://www.india.gov.in/spotlight/pradhan-mantri-krishi-sinchai-yojana";

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-green-200">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 text-center">
            किसान सहायता केंद्र
          </h1>
          <p className="text-lg md:text-xl text-green-600 text-center mt-2">
            Farmer Support Center
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        
        {/* Welcome Message */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-green-200">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              स्वागत है! Welcome to UpajTransit
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              यह प्लेटफॉर्म आपको अपनी फसल बेचने और परिवहन सेवाओं को आसानी से खोजने में मदद करेगा।
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mt-2">
              This platform helps you sell your crops and find transportation services easily.
            </p>
          </div>
        </div>

        {/* Contact Details - High Visibility */}
        <div className="bg-emerald-600 rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <div className="mb-6">
            <Phone className="w-12 h-12 text-white mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              सहायता के लिए कॉल करें
            </h2>
            <p className="text-lg md:text-xl text-emerald-100 mb-6">
              For Help & Support, Call Now
            </p>
          </div>
          
          <a
            href={`tel:${supportPhoneNumber1}`}
            className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-xl text-3xl md:text-4xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
          >
            {supportPhoneNumber1}
          </a>
            <p className="text-lg md:text-xl text-emerald-100 mt-4">
                या | Or
            </p>
            <p></p>
          <a
            href={`tel:${supportPhoneNumber2}`}
            className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-xl text-3xl md:text-4xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
          >
            {supportPhoneNumber2}
          </a>
          
          <div className="mt-6 text-emerald-100">
            <p className="text-lg md:text-xl">
              📞 फ़ोन पर टैप करके कॉल करें | Tap to call on mobile
            </p>
            <p className="text-base md:text-lg mt-2">
              समय: सुबह 8 बजे से रात 8 बजे तक | Timing: 8 AM to 8 PM
            </p>
          </div>
        </div>

        {/* Government Portal Link */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-green-200">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ExternalLink className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              सरकारी योजनाएं देखें
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-6">
              Check Government Schemes & Benefits for Farmers
            </p>
            
            <a
              href={governmentPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl text-xl md:text-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-300"
            >
              <span>Go to Official Government Portal</span>
              <ExternalLink className="w-6 h-6" />
            </a>
            
            <p className="text-base md:text-lg text-gray-500 mt-4">
              नई विंडो में खुलेगा | Opens in new window
            </p>
          </div>
        </div>

        {/* Voice Assistant Instructions */}
        

        {/* Quick Help Examples */}
        

        {/* Footer */}
        <div className="bg-green-600 rounded-2xl shadow-lg p-6 md:p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            हमारी सेवा 24/7 उपलब्ध है
          </h2>
          <p className="text-lg md:text-xl text-green-100 mb-4">
            Our Service is Available 24/7
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-2">
              <Phone className="w-6 h-6 text-white" />
              <span className="text-lg md:text-xl text-white">फ़ोन सपोर्ट | Phone Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mic className="w-6 h-6 text-white" />
              <span className="text-lg md:text-xl text-white">आवाज़ सहायक | Voice Assistant</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Onboarding;