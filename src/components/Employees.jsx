import DashboardLayout from './DashboardLayout';
import { Bell, Settings, Search, Upload, Plus, Mail, Phone, MoreVertical, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import ImportEmployeeModal from './modals/ImportEmployeeModal';
import EmployeeFormModal from './modals/EmployeeFormModal';

// Mock Data
const employeesData = [
  { id: 1, name: 'John Doe', email: 'john.doe@company.com', phone: '+1 (555) 123-4567', dept: 'Engineering', position: 'Manager', joinDate: '2024-01-15', status: 'Active' },
  { id: 2, name: 'John Doe', email: 'john.doe@company.com', phone: '+1 (555) 123-4567', dept: 'Engineering', position: 'Manager', joinDate: '2024-01-15', status: 'Active' },
  { id: 3, name: 'John Doe', email: 'john.doe@company.com', phone: '+1 (555) 123-4567', dept: 'Engineering', position: 'Manager', joinDate: '2024-01-15', status: 'Active' },
  { id: 4, name: 'John Doe', email: 'john.doe@company.com', phone: '+1 (555) 123-4567', dept: 'Engineering', position: 'Manager', joinDate: '2024-01-15', status: 'Active' },
  { id: 5, name: 'John Doe', email: 'john.doe@company.com', phone: '+1 (555) 123-4567', dept: 'Engineering', position: 'Manager', joinDate: '2024-01-15', status: 'Active' },
];

export default function Employees() {
  const [showImportModal, setShowImportModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  return (
    <DashboardLayout title="Employee Management">
      <div className="p-6 space-y-6 min-h-full">

         {/* Stats Cards Row */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard label="Total Employees" value="1,247" subtext="+12% this month" />
            <StatsCard label="Active Employees" value="1,247" subtext="95.3% of total" />
            <StatsCard label="New This Month" value="47" subtext="9% of total" />
            <StatsCard label="Remote Workers" value="892" subtext="71.5% remote" />
         </div>

         {/* Controls Bar */}
         <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between border-t-4 border-blue-400">
             <div className="relative w-full md:flex-1 max-w-lg">
                <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
                <input 
                    type="text" 
                    placeholder="Search employees..." 
                    className="w-full pl-10 pr-4 py-2 border-b border-gray-200 focus:border-pink-500 outline-none bg-transparent"
                />
             </div>
             <div className="flex gap-4 w-full md:w-auto">
                 <button 
                    onClick={() => setShowImportModal(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-transparent border border-gray-200 rounded-lg text-gray-600 font-medium hover:bg-gray-50 transition-colors"
                 >
                    <Upload size={18} />
                    Upload CSV
                 </button>
                 <button 
                    onClick={() => setShowAddModal(true)}
                    className="flex items-center gap-2 px-6 py-2 bg-[#9d174d] text-white rounded-lg font-medium hover:bg-[#831843] transition-colors shadow-md"
                 >
                    <Plus size={18} />
                    Add Employee
                 </button>
            </div>
         </div>

         {/* Employees Table */}
         <div className="bg-white rounded-2xl p-6 shadow-sm overflow-hidden">
             <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="text-left text-sm text-gray-600 font-bold border-b border-gray-100">
                            <th className="pb-4 pl-4">Name</th>
                            <th className="pb-4">Contact</th>
                            <th className="pb-4">Department</th>
                            <th className="pb-4">Position</th>
                            <th className="pb-4">Join Date</th>
                            <th className="pb-4">Status</th>
                            <th className="pb-4 pr-4 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {employeesData.map((row) => (
                            <tr key={row.id} className="hover:bg-gray-50 transition-colors group">
                                <td className="py-4 pl-4">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-medium text-sm ${getAvatarColor(row.id)}`}>
                                            {getInitials(row.name)}
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900">{row.name.split(' ')[0]}</p>
                                            <p className="font-bold text-gray-900">{row.name.split(' ')[1]}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-4">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <Mail size={14} />
                                            {row.email}
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <Phone size={14} />
                                            {row.phone}
                                        </div>
                                    </div>
                                </td>
                                <td className="py-4">
                                    <span className="px-3 py-1 rounded-lg text-xs font-medium bg-pink-50 text-pink-700">
                                        {row.dept}
                                    </span>
                                </td>
                                <td className="py-4 text-gray-600 text-sm font-medium">{row.position}</td>
                                <td className="py-4 text-gray-500 text-sm">
                                    {row.joinDate.split('-')[0]}<br/>
                                    {row.joinDate.split('-').slice(1).join('-')}
                                </td>
                                <td className="py-4">
                                    <div className="flex items-center gap-1 text-green-600 text-sm font-bold">
                                        <CheckCircle size={16} />
                                        {row.status}
                                    </div>
                                </td>
                                <td className="py-4 pr-4">
                                    <button 
                                        onClick={() => setShowEditModal(true)}
                                        className="p-2 hover:bg-gray-100 rounded-full text-gray-400 transition-colors mx-auto block"
                                    >
                                        <MoreVertical size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
         </div>

      </div>
      
      {/* Modals */}
      <ImportEmployeeModal isOpen={showImportModal} onClose={() => setShowImportModal(false)} />
      <EmployeeFormModal isOpen={showAddModal} type="add" onClose={() => setShowAddModal(false)} />
      <EmployeeFormModal isOpen={showEditModal} type="edit" onClose={() => setShowEditModal(false)} />

    </DashboardLayout>
  );
}

function StatsCard({ label, value, subtext }) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-gray-500 text-sm font-medium mb-2">{label}</p>
            <p className="text-3xl font-bold text-[#9d174d] mb-1">{value}</p>
            <p className="text-xs font-bold text-green-500">{subtext}</p>
        </div>
    );
}

function getInitials(name) {
    return name.split(' ').map(n => n[0]).join('');
}

function getAvatarColor(id) {
    const colors = ['bg-pink-400', 'bg-purple-400', 'bg-indigo-400', 'bg-rose-400'];
    return colors[id % colors.length];
}
