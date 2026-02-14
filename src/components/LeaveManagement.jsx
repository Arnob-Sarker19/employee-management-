import DashboardLayout from './DashboardLayout';
import { Bell, Settings, Plus, Search, CheckCircle, XCircle, Clock } from 'lucide-react';
import { useState } from 'react';
import CustomLeaveModal from './modals/CustomLeaveModal';
import LeaveBalanceModal from './modals/LeaveBalanceModal';

// Mock Data
const leaveRequests = [
  { id: 1, name: 'John Doe', type: 'Sick Leave', duration: '2024-12-10 to 2024-12-12', days: 3, balance: '12 days', reason: 'Medical appointment', status: 'Pending' },
  { id: 2, name: 'John Doe', type: 'Sick Leave', duration: '2024-12-10 to 2024-12-12', days: 3, balance: '12 days', reason: 'Medical appointment', status: 'Pending' },
  { id: 3, name: 'John Doe', type: 'Sick Leave', duration: '2024-12-10 to 2024-12-12', days: 3, balance: '12 days', reason: 'Medical appointment', status: 'Pending' },
];

export default function LeaveManagement() {
  const [activeTab, setActiveTab] = useState('All');
  const [showCustomLeaveModal, setShowCustomLeaveModal] = useState(false);
  const [showLeaveBalanceModal, setShowLeaveBalanceModal] = useState(false);

  return (
    <DashboardLayout title="Leave Management">
      <div className="p-6 space-y-6 min-h-full">

         {/* Stats Row */}
         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatsCard label="Pending Requests" value="4" icon={Clock} color="text-pink-600" />
            <StatsCard label="Approved This Month" value="4" icon={CheckCircle} color="text-pink-600" />
            <StatsCard label="Rejected" value="4" icon={XCircle} color="text-pink-600" />
            
            <button 
                onClick={() => setShowCustomLeaveModal(true)}
                className="h-full bg-white rounded-2xl shadow-sm text-[#9d174d] font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
            >
                <Plus size={24} />
                Custom Leave
            </button>
         </div>

         {/* Requests Table */}
         <div className="bg-white rounded-2xl p-6 shadow-sm">
             <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                 <div className="flex items-center gap-4">
                     <h3 className="text-gray-800 font-bold w-32">Leave Requests</h3>
                     <div className="flex p-1 bg-gray-100 rounded-xl">
                         {['All', 'Pending', 'Approved', 'Rejected'].map(tab => (
                             <button 
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${activeTab === tab ? 'bg-white shadow text-pink-700' : 'text-gray-500 hover:text-gray-700'}`}
                             >
                                {tab}
                             </button>
                         ))}
                     </div>
                 </div>
                 <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                    <input 
                        type="text" 
                        placeholder="Search" 
                        className="w-full pl-10 pr-4 py-2 bg-white border border-gray-100 rounded-xl focus:ring-2 focus:ring-pink-500 outline-none text-sm"
                    />
                 </div>
             </div>

             <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="text-left text-xs text-gray-500 font-bold border-b border-gray-100 uppercase tracking-wider">
                            <th className="pb-4 pl-4">Employee</th>
                            <th className="pb-4">Leave Type</th>
                            <th className="pb-4">Duration</th>
                            <th className="pb-4">Days</th>
                            <th className="pb-4">Balance</th>
                            <th className="pb-4">Reason</th>
                            <th className="pb-4">Status</th>
                            <th className="pb-4 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {leaveRequests.map((row) => (
                            <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                                <td className="py-4 pl-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold text-xs">
                                            {row.name.split(' ').map(n=>n[0]).join('')}
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-800 text-sm">{row.name}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-4 text-pink-600 font-medium text-sm">{row.type}</td>
                                <td className="py-4 text-gray-500 text-xs">
                                    {row.duration.split(' to ').map((d, i) => (
                                        <div key={i}>{d}</div>
                                    ))}
                                </td>
                                <td className="py-4 text-gray-800 font-bold text-sm">{row.days}</td>
                                <td className="py-4 text-gray-500 text-sm">{row.balance}</td>
                                <td className="py-4 text-gray-500 text-sm max-w-xs truncate">{row.reason}</td>
                                <td className="py-4">
                                    <div className="flex items-center gap-1 text-orange-500 text-sm font-bold">
                                        <Clock size={16} />
                                        {row.status}
                                    </div>
                                </td>
                                <td className="py-4">
                                    <div className="flex items-center justify-center gap-2">
                                        <button className="p-1.5 hover:bg-green-100 rounded-lg text-green-600 transition-colors">
                                            <CheckCircle size={20} />
                                        </button>
                                        <button className="p-1.5 hover:bg-red-100 rounded-lg text-red-600 transition-colors">
                                            <XCircle size={20} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
             </div>
         </div>

         {/* Policy Cards */}
         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
             {['Sick Leave', 'Casual Leave', 'Sick Leave', 'Sick Leave'].map((type, i) => (
                 <PolicyCard key={i} type={type} days="10 Days" onEdit={() => setShowLeaveBalanceModal(true)} />
             ))}
         </div>

         {/* Modals */}
         <CustomLeaveModal isOpen={showCustomLeaveModal} onClose={() => setShowCustomLeaveModal(false)} />
         <LeaveBalanceModal isOpen={showLeaveBalanceModal} onClose={() => setShowLeaveBalanceModal(false)} />

      </div>
    </DashboardLayout>
  );
}

function StatsCard({ label, value, icon: Icon, color }) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-pink-50 rounded-xl text-pink-600">
                <Icon size={24} />
            </div>
            <div>
                <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">{label}</p>
                <p className="text-2xl font-bold text-gray-800">{value}</p>
            </div>
        </div>
    );
}

function PolicyCard({ type, days, onEdit }) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="p-3 bg-[#831843] rounded-xl text-white">
                    <Clock size={24} />
                </div>
                <div>
                     <p className="font-bold text-gray-800 text-sm">{type}</p>
                     <p className="text-gray-500 text-xs">{days}</p>
                </div>
            </div>
            <div className="flex flex-col items-end gap-2">
                <button onClick={onEdit} className="text-xs font-bold text-gray-400 hover:text-gray-600">Edit</button>
                <span className="text-[10px] text-pink-600 font-medium cursor-pointer hover:underline">Policies</span>
            </div>
        </div>
    );
}
