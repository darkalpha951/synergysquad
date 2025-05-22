import React, { useState, useEffect } from 'react';
import { 
  Truck, Bell, Map, DollarSign, Settings, LogOut, Users, CheckCircle, Clock
} from 'lucide-react';
import { toast, Toaster } from 'sonner';
import { format } from 'date-fns';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';

// Mock data for market prices
const marketData = [
  { date: '2024-02-01', price: 2500 },
  { date: '2024-02-02', price: 2600 },
  { date: '2024-02-03', price: 2400 },
  { date: '2024-02-04', price: 2700 },
  { date: '2024-02-05', price: 2800 },
].map(item => ({
  ...item,
  date: format(new Date(item.date), 'MMM dd'),
}));

// Mock data for transport requests
const transportRequests = [
  {
    id: 1,
    cropType: 'Wheat',
    quantity: '2 tonnes',
    pickup: 'Farmer Market A',
    dropoff: 'City Storage B',
    status: 'pending',
    date: '2024-02-20',
  },
  {
    id: 2,
    cropType: 'Rice',
    quantity: '1.5 tonnes',
    pickup: 'Village C',
    dropoff: 'Wholesale Market D',
    status: 'accepted',
    date: '2024-02-21',
  },
];


interface SidebarProps {
  role: 'farmer' | 'transporter';
  onRoleSwitch: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ role }) => {
    const navigate = useNavigate()
  const farmerLinks = [
    {
        icon: <Users size={20} />,
        label: 'Government Schemes',
        url: 'https://www.india.gov.in/spotlight/pradhan-mantri-krishi-sinchai-yojana',
    },
  ];

  const transporterLinks = [
  { icon: <Map size={20} />, label: 'Available Loads', url: undefined },
  { icon: <Truck size={20} />, label: 'Current Jobs', url: undefined },
  { icon: <DollarSign size={20} />, label: 'Income Summary', url: undefined },
  { icon: <Settings size={20} />, label: 'Vehicle Info', url: undefined },
];

  const links = role === 'farmer' ? farmerLinks : transporterLinks;

  const handleLogout = () => {
    localStorage.removeItem('token');
    toast.success('Logged out successfully');
    navigate("/")
  }

  return (
    <div className="w-64 bg-white h-screen shadow-md flex flex-col">
      <div className="p-4 border-b">
        <div className="flex items-center space-x-2">
          <Truck className="text-emerald-600" size={24} />
          <span className="font-semibold text-lg">Synergy Squad</span>
        </div>
      </div>
      
      <div className="flex-1 p-4">
        <div className="mb-8">
          <div className="text-sm font-medium text-gray-400 mb-4">MENU</div>
          {links.map((link, index) => (
                <button
                    key={index}
                    onClick={() => {
                    if (link.url) {
                        window.open(link.url, '_blank');
                    } else {
                        toast(`Clicked on ${link.label}`); // Replace with internal logic if needed
                    }
                    }}
                    className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 p-2 rounded-lg w-full mb-2 transition-colors"
                >
                    {link.icon}
                    <span>{link.label}</span>
                </button>
            ))}

        </div>
      </div>

      <div className="p-4 border-t">
        {/* <button
          onClick={onRoleSwitch}
          className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 p-2 w-full"
        >
          <Users size={20} />
          <span>Switch to {role === 'farmer' ? 'Transporter' : 'Farmer'}</span>
        </button> */}
        <button className="cursor-pointer flex items-center space-x-2 text-gray-600 hover:text-red-600 p-2 w-full" onClick={handleLogout}>
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

interface StatusBadgeProps {
  status: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const statusStyles = {
    pending: 'bg-amber-100 text-amber-800',
    accepted: 'bg-emerald-100 text-emerald-800',
    'in-transit': 'bg-blue-100 text-blue-800',
  };

  const statusIcons = {
    pending: <Clock size={14} />,
    accepted: <CheckCircle size={14} />,
    'in-transit': <Truck size={14} />,
  };

  return (
    <span className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${statusStyles[status as keyof typeof statusStyles]}`}>
      {statusIcons[status as keyof typeof statusIcons]}
      <span>{status.charAt(0).toUpperCase() + status.slice(1)}</span>
    </span>
  );
};

interface DashboardContentProps {
  role: 'farmer' | 'transporter';
}

const DashboardContent: React.FC<DashboardContentProps> = ({ role }) => {
  const [isAvailable, setIsAvailable] = useState(true);

  const toggleAvailability = () => {
    setIsAvailable(!isAvailable);
    toast.success(`You are now ${isAvailable ? 'offline' : 'online'}`);
  };

  return (
    <div className="flex-1 bg-gray-50 p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Welcome back, {role === 'farmer' ? 'John Farmer' : 'Mike Transporter'}
          </h1>
          <p className="text-gray-600">Here's what's happening with your {role === 'farmer' ? 'crops' : 'deliveries'}</p>
        </div>
        
        <div className="flex items-center space-x-4">
          {role === 'transporter' && (
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Availability</span>
              <button
                onClick={toggleAvailability}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isAvailable ? 'bg-emerald-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isAvailable ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          )}
          <button className="p-2 text-gray-600 hover:text-emerald-600 relative">
            <Bell size={20} />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">
              {role === 'farmer' ? 'Active Requests' : 'Available Jobs'}
            </h3>
            <span className="text-2xl font-bold text-emerald-600">12</span>
          </div>
          <p className="text-gray-600 text-sm">
            {role === 'farmer' 
              ? '3 pending approvals' 
              : '5 in your area'}
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">
              {role === 'farmer' ? 'Total Shipments' : 'Completed Deliveries'}
            </h3>
            <span className="text-2xl font-bold text-emerald-600">48</span>
          </div>
          <p className="text-gray-600 text-sm">Last 30 days</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">
              {role === 'farmer' ? 'Average Cost' : 'Total Earnings'}
            </h3>
            <span className="text-2xl font-bold text-emerald-600">₹15,240</span>
          </div>
          <p className="text-gray-600 text-sm">
            {role === 'farmer' 
              ? 'Per shipment' 
              : 'This month'}
          </p>
        </div>
      </div>

      {role === 'farmer' && (
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h3 className="font-semibold text-gray-800 mb-4">Market Prices</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={marketData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="price" 
                  stroke="#059669" 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 border-b">
          <h3 className="font-semibold text-gray-800">
            {role === 'farmer' ? 'Recent Transport Requests' : 'Available Loads'}
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Crop Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Pickup
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Dropoff
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {transportRequests.map((request) => (
                <tr key={request.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {request.cropType}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {request.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {request.pickup}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {request.dropoff}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={request.status} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {request.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Toaster position="top-right" />
    </div>
  );
};

const Dashboard: React.FC = () => {
  const [role, setRole] = useState<'farmer' | 'transporter'>('farmer');
  const navigate = useNavigate()
    useEffect(() => {
            if  (!localStorage.getItem('token')) {
                navigate("/login")
            }
        // eslint-disable-next-line
    }, [])

  const handleRoleSwitch = () => {
    setRole(role === 'farmer' ? 'transporter' : 'farmer');
    toast.success(`Switched to ${role === 'farmer' ? 'Transporter' : 'Farmer'} view`);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar role={role} onRoleSwitch={handleRoleSwitch} />
      <DashboardContent role={role} />
    </div>
  );
};

export default Dashboard;