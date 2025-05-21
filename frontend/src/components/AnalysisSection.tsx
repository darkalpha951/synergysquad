import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

const AnalysisSection: React.FC = () => {
  return (
    <section id="analysis" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-semibold text-sm mb-4">
            Insights
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Market & Technical Analysis
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            A data-driven approach to understanding and solving agricultural transport challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Market Analysis */}
          <div className="bg-gray-50 rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Market Opportunity
            </h3>
            
            <div className="mb-8">
              <h4 className="text-lg font-medium text-gray-800 mb-4">Target Segments</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded shadow">
                  <span className="font-semibold text-emerald-700">Small Farmers</span>
                  <p className="text-gray-600 mt-2">65% of agricultural producers with limited access to efficient transport</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <span className="font-semibold text-emerald-700">Local Transporters</span>
                  <p className="text-gray-600 mt-2">120,000+ small transport operators seeking steady business</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <span className="font-semibold text-emerald-700">Agricultural Co-ops</span>
                  <p className="text-gray-600 mt-2">2,500+ organizations that can serve as hubs</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <span className="font-semibold text-emerald-700">Food Processors</span>
                  <p className="text-gray-600 mt-2">1,200+ businesses seeking reliable produce supply</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-gray-800 mb-4">Market Size & Growth</h4>
              <div className="bg-white p-6 rounded shadow">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700">Market Value</span>
                  <span className="font-semibold text-blue-600">$4.2B</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                </div>
                
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700">Annual Growth Rate</span>
                  <span className="font-semibold text-emerald-600">14.3%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                  <div className="bg-emerald-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                </div>
                
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700">Digital Adoption Rate</span>
                  <span className="font-semibold text-amber-600">22.8%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-amber-600 h-2.5 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Technical Analysis */}
          <div className="bg-gray-50 rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Technical Foundations
            </h3>
            
            <div className="mb-8">
              <h4 className="text-lg font-medium text-gray-800 mb-4">Core Technologies</h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded shadow">
                  <span className="font-semibold text-purple-700">Voice Recognition API</span>
                  <p className="text-gray-600 mt-2">Multi-language support with 95%+ accuracy in rural dialects</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <span className="font-semibold text-purple-700">Google Maps API Integration</span>
                  <p className="text-gray-600 mt-2">Real-time routing with offline map caching for rural areas</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <span className="font-semibold text-purple-700">IoT Sensors & Monitoring</span>
                  <p className="text-gray-600 mt-2">Low-cost temperature and humidity sensors with 3G/4G connectivity</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <span className="font-semibold text-purple-700">Progressive Web App</span>
                  <p className="text-gray-600 mt-2">Offline-first architecture with ~600KB initial download size</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-gray-800 mb-4">Scalability & Deployment</h4>
              <div className="bg-white p-4 rounded shadow">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-gray-700">Microservices architecture for independent scaling of components</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-gray-700">Edge computing nodes at agricultural hubs for local processing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-gray-700">100% containerized for rapid deployment to new regions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-gray-700">API-first design enabling third-party integrations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Gap Analysis */}
        <div className="mt-16" id="gap-analysis">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Gap Analysis: Current Market vs. Our Solution
          </h3>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Feature
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Traditional Solutions
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Current Digital Platforms
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Our Solution
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      Voice-Based Booking
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      <div className="flex items-center">
                        <XCircle className="text-red-500 mr-2" size={16} />
                        No
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      <div className="flex items-center">
                        <XCircle className="text-red-500 mr-2" size={16} />
                        Limited
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      <div className="flex items-center">
                        <CheckCircle2 className="text-emerald-500 mr-2" size={16} />
                        Full Support
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      Offline Functionality
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      <div className="flex items-center">
                        <CheckCircle2 className="text-emerald-500 mr-2" size={16} />
                        Yes (Manual)
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      <div className="flex items-center">
                        <XCircle className="text-red-500 mr-2" size={16} />
                        No
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      <div className="flex items-center">
                        <CheckCircle2 className="text-emerald-500 mr-2" size={16} />
                        Full PWA + SMS
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      Load Pooling
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      <div className="flex items-center">
                        <XCircle className="text-red-500 mr-2" size={16} />
                        Manual Only
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      <div className="flex items-center">
                        <CheckCircle2 className="text-emerald-500 mr-2" size={16} />
                        Basic
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      <div className="flex items-center">
                        <CheckCircle2 className="text-emerald-500 mr-2" size={16} />
                        AI-Optimized
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      Price Predictions
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      <div className="flex items-center">
                        <XCircle className="text-red-500 mr-2" size={16} />
                        No
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      <div className="flex items-center">
                        <CheckCircle2 className="text-emerald-500 mr-2" size={16} />
                        Limited
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      <div className="flex items-center">
                        <CheckCircle2 className="text-emerald-500 mr-2" size={16} />
                        ML-Based
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      Cold Storage Integration
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      <div className="flex items-center">
                        <XCircle className="text-red-500 mr-2" size={16} />
                        No
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      <div className="flex items-center">
                        <XCircle className="text-red-500 mr-2" size={16} />
                        No
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      <div className="flex items-center">
                        <CheckCircle2 className="text-emerald-500 mr-2" size={16} />
                        End-to-End
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalysisSection;