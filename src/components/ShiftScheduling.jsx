import DashboardLayout from './DashboardLayout';
import { Bell, Settings, Plus, Calendar, Users, Clock, ChevronRight, Search, ChevronLeft, ChevronDown, MoreHorizontal } from 'lucide-react';
import { useState } from 'react';
import AddShiftModal from './modals/AddShiftModal';
import AddOvertimeModal from './modals/AddOvertimeModal';

export default function ShiftScheduling() {
  const [view, setView] = useState('dashboard'); // 'dashboard' or 'manage'
  const [selectedShift, setSelectedShift] = useState(null);
  const [showAddShiftModal, setShowAddShiftModal] = useState(false);
  const [showOvertimeModal, setShowOvertimeModal] = useState(false);

  const handleManageClick = (shiftName) => {
    setSelectedShift(shiftName);
    setView('manage');
  };

  const handleBackClick = () => {
    setSelectedShift(null);
    setView('dashboard');
  };

  return (
    <DashboardLayout title="Shift Scheduling">
      <div className="p-6 space-y-6 min-h-full">

         {view === 'dashboard' ? (
             <DashboardView 
                onManage={handleManageClick} 
                onAddShift={() => setShowAddShiftModal(true)}
                onAddOvertime={() => setShowOvertimeModal(true)}
             />
         ) : (
             <ManageView shiftName={selectedShift} onBack={handleBackClick} />
         )}

         {/* Modals */}
         <AddShiftModal isOpen={showAddShiftModal} onClose={() => setShowAddShiftModal(false)} />
         <AddOvertimeModal isOpen={showOvertimeModal} onClose={() => setShowOvertimeModal(false)} />

      </div>
    </DashboardLayout>
  );
}

function DashboardView({ onManage, onAddShift, onAddOvertime }) {
    return (
        <>
            {/* Stats Row */}
            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-2xl p-6 shadow-sm flex items-center gap-4">
                        <div className="p-3 bg-pink-100 rounded-xl text-pink-600">
                            <Calendar size={24} />
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm font-medium">Active Shifts</p>
                            <p className="text-2xl font-bold text-gray-800">3</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-sm flex items-center gap-4">
                        <div className="p-3 bg-pink-100 rounded-xl text-pink-600">
                            <Users size={24} />
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm font-medium">Total Shifts</p>
                            <p className="text-2xl font-bold text-gray-800">4</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-sm flex items-center gap-4">
                        <div className="p-3 bg-pink-100 rounded-xl text-pink-600">
                            <Clock size={24} />
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm font-medium">Avg Working</p>
                            <p className="text-2xl font-bold text-gray-800">08 H</p>
                        </div>
                    </div>
                </div>
                <button 
                    onClick={onAddShift}
                    className="bg-white px-8 rounded-2xl shadow-sm text-[#9d174d] font-bold flex items-center gap-2 hover:bg-gray-50 transition-colors whitespace-nowrap"
                >
                    <Plus size={24} />
                    Add New Shift
                </button>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
                
                {/* Main Content Column */}
                <div className="flex-1 space-y-6">
                    
                    {/* Shift Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <ShiftCard 
                            title="Morning Shift" 
                            time="06:00 - 14:00" 
                            supervisor="John Doe" 
                            count="45" 
                            color="bg-blue-500"
                            onManage={() => onManage('Morning')}
                        />
                        <ShiftCard 
                            title="Day Shift" 
                            time="09:00 - 17:00" 
                            supervisor="Jane Smith" 
                            count="123" 
                            color="bg-green-500"
                            onManage={() => onManage('Day')}
                        />
                        <ShiftCard 
                            title="Night Shift" 
                            time="22:00 - 06:00" 
                            supervisor="Sarah Williams" 
                            count="22" 
                            color="bg-purple-500"
                            onManage={() => onManage('Night')}
                        />
                    </div>

                    {/* Weekly Schedule */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-bold text-gray-800">Weekly Schedule</h3>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                                    <ChevronLeft size={16} className="cursor-pointer hover:text-[#9d174d]" />
                                    <span>Week of Dec 2 - Dec 8, 2024</span>
                                    <ChevronRight size={16} className="cursor-pointer hover:text-[#9d174d]" />
                                </div>
                                <button 
                                    onClick={onAddOvertime}
                                    className="px-3 py-1 border border-gray-200 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-50"
                                >
                                    Overtime Rules
                                </button>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[600px]">
                                <thead>
                                    <tr className="text-center text-xs text-gray-500 font-medium">
                                        <th className="pb-4 w-24">Shift</th>
                                        <th className="pb-4">Mon</th>
                                        <th className="pb-4">Tue</th>
                                        <th className="pb-4">Wed</th>
                                        <th className="pb-4">Thu</th>
                                        <th className="pb-4">Fri</th>
                                        <th className="pb-4">Sat</th>
                                        <th className="pb-4">Sun</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-center">
                                        <td className="py-2">
                                            <div className="text-xs font-bold text-gray-800">Morning Shift</div>
                                            <div className="text-[10px] text-gray-400">06:00 - 14:00</div>
                                        </td>
                                        {[...Array(7)].map((_, i) => (
                                            <td key={i} className="p-1">
                                                <div className="bg-blue-50 border border-blue-100 rounded-lg p-2 text-center">
                                                    <div className="text-xs font-bold text-blue-700">6</div>
                                                    <div className="text-[10px] text-blue-500">employees</div>
                                                </div>
                                            </td>
                                        ))}
                                    </tr>
                                    <tr className="text-center">
                                        <td className="py-2">
                                            <div className="text-xs font-bold text-gray-800">Morning Shift</div>
                                            <div className="text-[10px] text-gray-400">06:00 - 14:00</div>
                                        </td>
                                        {[...Array(7)].map((_, i) => (
                                            <td key={i} className="p-1">
                                                <div className="bg-gray-50 border border-gray-100 rounded-lg p-2 text-center">
                                                    <div className="text-xs font-bold text-gray-700">6</div>
                                                    <div className="text-[10px] text-gray-500">employees</div>
                                                </div>
                                            </td>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>

                {/* Right Banner Placeholder */}
                <div className="w-full lg:w-24 bg-white rounded-2xl shadow-sm flex items-center justify-center p-4">
                    <p className="text-center text-gray-400 font-medium -rotate-90 whitespace-nowrap hidden lg:block">Sponsored banner</p>
                </div>

            </div>
        </>
    );
}

function ManageView({ shiftName, onBack }) {
    return (
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden animate-in fade-in slide-in-from-right-4 duration-300">
            {/* Header */}
            <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-4">
                    <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500">
                        <ChevronLeft size={24} />
                    </button>
                    <h2 className="text-xl font-bold text-gray-800">Manage {shiftName} Employees</h2>
                </div>
                <div className="flex items-center gap-4 w-full md:w-auto">
                     <div className="relative flex-1 md:w-64">
                        <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 outline-none"
                        />
                     </div>
                     <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-100">
                        All Department
                        <ChevronDown size={16} />
                     </button>
                </div>
            </div>

            {/* Form */}
            <div className="p-8 max-w-4xl mx-auto space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <SelectField label="GM" />
                    <SelectField label="AGM" />
                    <SelectField label="Manager" />
                    <SelectField label="Assistant Manager" />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Employees</label>
                    <div className="relative">
                        <select className="w-full p-4 bg-white border border-gray-200 rounded-xl appearance-none outline-none focus:ring-2 focus:ring-pink-500 text-gray-700 shadow-sm">
                            <option>Select Multiple</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-4.5 text-gray-400 pointer-events-none" size={18} />
                    </div>
                </div>

                <div className="flex justify-center pt-8">
                    <button className="px-12 py-3 bg-[#9d174d] text-white rounded-xl font-bold hover:bg-[#831843] transition-colors shadow-lg shadow-pink-200">
                        Save
                    </button>
                </div>

            </div>
        </div>
    );
}

function ShiftCard({ title, time, supervisor, count, color, onManage }) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                    <div className={`p-3 ${color.replace('bg-', 'bg-').replace('500', '100')} rounded-full text-${color.split('-')[1]}-600`}>
                        <Clock size={20} className={color.replace('bg-', 'text-')} />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-800">{title}</h3>
                        <p className="text-xs text-gray-500">{time}</p>
                    </div>
                </div>
                <button className="px-3 py-1 bg-gray-50 text-xs font-medium text-gray-600 rounded-lg hover:bg-gray-100">
                    Edit
                </button>
            </div>
            
            <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Supervisor</span>
                    <span className="font-medium text-gray-800">{supervisor}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Assigned Employees</span>
                    <span className="font-medium text-gray-800">{count}</span>
                </div>
            </div>

            <button 
                onClick={onManage}
                className="w-full py-2 bg-pink-50 text-[#9d174d] rounded-xl font-medium text-sm hover:bg-pink-100 transition-colors"
            >
                Manage Employees
            </button>
        </div>
    );
}

function SelectField({ label }) {
    return (
        <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">{label}</label>
            <div className="relative">
                <select className="w-full p-3 bg-white border border-gray-200 rounded-xl appearance-none outline-none focus:ring-2 focus:ring-pink-500 text-gray-700 shadow-sm">
                    <option>Select</option>
                </select>
                <ChevronDown className="absolute right-4 top-4 text-gray-400 pointer-events-none" size={16} />
            </div>
        </div>
    );
}
