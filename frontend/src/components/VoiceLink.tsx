import React from 'react';
import { Phone, ExternalLink, Mic, MessageCircle, Volume2, Users, Truck, IndianRupee } from 'lucide-react';

const VoiceLink: React.FC = () => {
  const supportPhoneNumber = "+91-1800-123-4567";
  const governmentPortalUrl = "https://www.india.gov.in/topics/agriculture";

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
              स्वागत है! Welcome to AgriConnect
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
            href={`tel:${supportPhoneNumber}`}
            className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-xl text-3xl md:text-4xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
          >
            {supportPhoneNumber}
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
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-green-200">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mic className="w-8 h-8 text-purple-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              आवाज सहायक का उपयोग कैसे करें
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              How to Use the Voice Assistant
            </p>
          </div>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-xl">
              <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                1
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                    माइक बटन दबाएं
                  </h3>
                </div>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  होम पेज पर नीचे दाईं ओर हरे रंग का माइक बटन दबाएं।
                </p>
                <p className="text-base md:text-lg text-gray-500 mt-1">
                  Click the green mic button on the bottom-right of the home page.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                2
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <Mic className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                    अपना सवाल बोलें
                  </h3>
                </div>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-3">
                  अपना सवाल साफ़ आवाज़ में बोलें, जैसे:
                </p>
                <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500 space-y-2">
                  <p className="text-base md:text-lg text-gray-700">
                    • "50 किलो टमाटर नासिक से पुणे भेजना है"
                  </p>
                  <p className="text-base md:text-lg text-gray-700">
                    • "आज टमाटर का भाव क्या है?"
                  </p>
                  <p className="text-base md:text-lg text-gray-700">
                    • "कानपुर के पास ट्रक दिखाओ"
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-xl">
              <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                3
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <Volume2 className="w-6 h-6 text-purple-600" />
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                    जवाब सुनें या पढ़ें
                  </h3>
                </div>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  आवाज़ सहायक आपको जवाब बोलकर देगा और स्क्रीन पर भी दिखाएगा।
                </p>
                <p className="text-base md:text-lg text-gray-500 mt-1">
                  The voice assistant will speak the answer and show it on screen.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start space-x-4 p-4 bg-yellow-50 rounded-xl">
              <div className="w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                4
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <MessageCircle className="w-6 h-6 text-yellow-600" />
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                    सरल भाषा का उपयोग करें
                  </h3>
                </div>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  बेहतर परिणाम के लिए सरल हिंदी या अंग्रेजी शब्दों का उपयोग करें।
                </p>
                <p className="text-base md:text-lg text-gray-500 mt-1">
                  Use simple Hindi/English phrases for best results.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Help Examples */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-green-200">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
            आप यह पूछ सकते हैं | You Can Ask:
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-xl border border-green-200">
              <div className="flex items-center space-x-3 mb-3">
                <Truck className="w-6 h-6 text-green-600" />
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                  ट्रांसपोर्ट के लिए
                </h3>
              </div>
              <ul className="space-y-2 text-base md:text-lg text-gray-600">
                <li>• "ट्रक कैसे बुक करें?"</li>
                <li>• "दिल्ली से मुंबई ट्रक चाहिए"</li>
                <li>• "मेरा शिपमेंट कहाँ है?"</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <div className="flex items-center space-x-3 mb-3">
                <IndianRupee className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                  मार्केट रेट के लिए
                </h3>
              </div>
              <ul className="space-y-2 text-base md:text-lg text-gray-600">
                <li>• "आज प्याज का भाव क्या है?"</li>
                <li>• "मंडी में सबसे अच्छा रेट कहाँ है?"</li>
                <li>• "टमाटर की कीमत बताओ"</li>
              </ul>
            </div>
          </div>
        </div>

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

export default VoiceLink;