import DashboardLayout from './DashboardLayout';
import { Bell, Settings, Plus, QrCode, Smartphone, Wifi, MapPin, Search, ChevronDown } from 'lucide-react';

// Mock Data
const attendanceData = [
  { id: 1, name: 'John Doe', dept: 'Engineering', checkIn: '08:45 AM', checkOut: '05:30 PM', hours: '8h 45m', method: 'Qr', location: 'Office', status: 'Present', type: 'qr' },
  { id: 2, name: 'Jane Smith', dept: 'Marketing', checkIn: '09:00 AM', checkOut: '06:00 PM', hours: '9h 00m', method: 'Nfc', location: 'Office', status: 'Present', type: 'nfc' },
  { id: 3, name: 'Mike Johnson', dept: 'Sales', checkIn: '08:30 AM', checkOut: '05:00 PM', hours: '8h 30m', method: 'Qr', location: 'Remote', status: 'Present', type: 'qr' },
  { id: 4, name: 'Sarah Williams', dept: 'HR', checkIn: '09:15 AM', checkOut: '05:45 PM', hours: '8h 30m', method: 'Geolocation', location: 'Office', status: 'Present', type: 'geo' },
];

export default function Attendance() {
  return (
    <DashboardLayout>
      <div className="p-8 space-y-8 bg-[#831843]/10 min-h-full">
         
         {/* Top Header */}
         <div className="bg-white/50 backdrop-blur-md rounded-2xl p-6 flex justify-between items-center shadow-sm">
            <h1 className="text-2xl font-medium text-gray-800">Attendance Management</h1>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl shadow-sm">
                    <img src="https://ui-avatars.com/api/?name=Company&background=random" className="w-8 h-8 rounded-lg" alt="Logo" />
                    <div>
                        <p className="text-sm font-bold text-gray-900">ABCD Company</p>
                        <p className="text-xs text-gray-500">Tech</p>
                    </div>
                </div>
                <button className="p-3 bg-[#9d174d] text-white rounded-full shadow-md  hover:bg-[#831843] transition-colors">
                    <Bell size={20} />
                </button>
                <button className="p-3 bg-[#9d174d] text-white rounded-full shadow-md hover:bg-[#831843] transition-colors">
                    <Settings size={20} />
                </button>
            </div>
         </div>

         {/* Stats Cards Row */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard label="Present Today" value="8" icon={ScanCard} color="text-pink-600" bg="bg-pink-100" />
            <StatsCard label="On Time" value="48" icon={UserCheck} color="text-pink-600" bg="bg-pink-100" />
            <StatsCard label="Late Arrivals" value="38" icon={UserX} color="text-pink-600" bg="bg-pink-100" />
            <StatsCard label="Absent" value="2" icon={UserMinus} color="text-pink-600" bg="bg-pink-100" />
         </div>

         {/* Controls Row */}
         <div className="flex flex-col md:flex-row justify-between items-center gap-4">
             <div className="w-full md:w-auto"></div> {/* Spacer */}
             <div className="flex gap-4 w-full md:w-auto">
                 <button className="flex items-center gap-2 px-4 py-2 bg-transparent border border-gray-600 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                    <Plus size={18} />
                    Add Manual Attendance
                 </button>
                 <button className="flex items-center gap-2 px-4 py-2 bg-[#9d174d] text-white rounded-lg font-medium hover:bg-[#831843] transition-colors">
                    <Settings size={18} />
                    Check-In Settings
                 </button>
            </div>
         </div>

         {/* Filter Bar */}
         <div className="bg-white rounded-xl p-4 flex flex-col md:flex-row gap-4 items-center justify-between shadow-sm">
             <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
                />
             </div>
             <div className="relative">
                 <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                    All Department
                    <ChevronDown size={16} />
                 </button>
             </div>
         </div>

         {/* Attendance Table */}
         <div className="bg-white rounded-2xl p-6 shadow-sm overflow-hidden">
            <h3 className="text-lg font-medium text-gray-800 mb-6">Today's Attendance Records</h3>
            
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="text-left text-sm text-gray-500 font-medium border-b border-gray-100">
                            <th className="pb-4 pl-4">Employee</th>
                            <th className="pb-4">Department</th>
                            <th className="pb-4">Check-In</th>
                            <th className="pb-4">Check-Out</th>
                            <th className="pb-4">Work Hours</th>
                            <th className="pb-4">Method</th>
                            <th className="pb-4">Location</th>
                            <th className="pb-4 pr-4">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {attendanceData.map((row) => (
                            <tr key={row.id} className="hover:bg-gray-50 transition-colors group">
                                <td className="py-4 pl-4">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium text-sm ${getAvatarColor(row.id)}`}>
                                            {getInitials(row.name)}
                                        </div>
                                        <span className="font-medium text-gray-900">{row.name}</span>
                                    </div>
                                </td>
                                <td className="py-4 text-gray-600">{row.dept}</td>
                                <td className="py-4 text-gray-900 font-medium">
                                    {row.checkIn} <br/> <span className="text-xs text-gray-400 font-normal">AM</span>
                                </td>
                                <td className="py-4 text-gray-900 font-medium">
                                    {row.checkOut} <br/> <span className="text-xs text-gray-400 font-normal">PM</span>
                                </td>
                                <td className="py-4 text-gray-900 font-medium">
                                    {row.hours}
                                </td>
                                <td className="py-4">
                                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                                        {getMethodIcon(row.type)}
                                        <span>{row.method}</span>
                                    </div>
                                </td>
                                <td className="py-4 text-gray-600">{row.location}</td>
                                <td className="py-4 pr-4">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                                        <CheckCircle size={12} className="fill-current" />
                                        {row.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
         </div>

      </div>
    </DashboardLayout>
  );
}

// Helper Components & Functions
import { CheckCircle, Building } from 'lucide-react';

function StatsCard({ label, value, icon: Icon, color, bg }) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm flex items-center gap-4">
            <div className={`${bg} p-3 rounded-xl`}>
                <Icon size={24} className={color} />
            </div>
            <div>
                <p className="text-gray-500 text-sm font-medium">{label}</p>
                <p className="text-2xl font-bold text-gray-800">{value}</p>
            </div>
        </div>
    );
}

const ScanCard = Building; // Placeholder icons
const UserCheck = Building;
const UserX = Building;
const UserMinus = Building;

function getMethodIcon(type) {
    switch(type) {
        case 'qr': return <QrCode size={16} className="text-pink-600" />;
        case 'nfc': return <Smartphone size={16} className="text-pink-600" />;
        case 'geo': return <MapPin size={16} className="text-pink-600" />;
        default: return <Wifi size={16} className="text-pink-600" />;
    }
}

function getInitials(name) {
    return name.split(' ').map(n => n[0]).join('');
}

function getAvatarColor(id) {
    const colors = ['bg-pink-400', 'bg-purple-400', 'bg-indigo-400', 'bg-rose-400'];
    return colors[id % colors.length];
}
