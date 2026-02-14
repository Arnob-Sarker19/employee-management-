import DashboardLayout from './DashboardLayout';
import { Bell, Settings, Search, CheckCircle, XCircle, FileText, Clock, Download, FileCheck } from 'lucide-react';
import { useState } from 'react';

// Mock Data
const payrollRequests = [
  { id: 1, name: 'John Doe', type: 'Employment Verification', date: '2024-12-01', purpose: 'Visa application', status: 'Approved', action: 'Download' },
  { id: 2, name: 'Jane Smith', type: 'No Objection Certificate', date: '2024-12-02', purpose: 'Higher education', status: 'Pending', action: 'Approve' },
  { id: 3, name: 'John Doe', type: 'Salary Certificate', date: '2024-12-01', purpose: 'Bank loan', status: 'Approved', action: 'Download' },
  { id: 4, name: 'John Doe', type: 'Salary Certificate', date: '2024-12-01', purpose: 'Bank loan', status: 'Approved', action: 'Download' },
];

export default function NocPayroll() {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <DashboardLayout title="NOC & Payroll">
      <div className="p-6 space-y-6 min-h-full">

         {/* Stats Row */}
         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatsCard label="Total Requests" value="48" icon={FileText} />
            <StatsCard label="Pending" value="8" icon={Clock} />
            <StatsCard label="Approved" value="38" icon={CheckCircle} />
            <StatsCard label="Rejected" value="2" icon={XCircle} />
         </div>

         {/* Requests Table */}
         <div className="bg-white rounded-2xl p-6 shadow-sm">
             <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                 <div className="flex items-center gap-4">
                     <h3 className="text-gray-800 font-bold w-32">NOC & Payroll</h3>
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
                        className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-pink-500 outline-none text-sm"
                    />
                 </div>
             </div>

             <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="text-left text-xs text-gray-500 font-bold border-b border-gray-100 uppercase tracking-wider">
                            <th className="pb-4 pl-4">Employee</th>
                            <th className="pb-4">Certificate Type</th>
                            <th className="pb-4">Request Date</th>
                            <th className="pb-4">Purpose</th>
                            <th className="pb-4">Status</th>
                            <th className="pb-4 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {payrollRequests.map((row) => (
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
                                <td className="py-4 text-blue-600 font-medium text-sm">
                                    {row.type.split(' ').map((word, i) => (
                                       <span key={i} className="block">{word}</span>
                                    ))}
                                </td>
                                <td className="py-4 text-gray-500 text-sm">
                                    {row.date.split('-')[0]}<br/>
                                    {row.date.split('-').slice(1).join('-')}
                                </td>
                                <td className="py-4 text-gray-800 font-medium text-sm max-w-xs">{row.purpose}</td>
                                <td className="py-4">
                                    <div className={`flex items-center gap-1 text-sm font-bold ${row.status === 'Approved' ? 'text-green-600' : 'text-orange-500'}`}>
                                        {row.status === 'Approved' ? <CheckCircle size={16} /> : <Clock size={16} />}
                                        {row.status}
                                    </div>
                                </td>
                                <td className="py-4">
                                    <div className="flex items-center justify-center gap-2">
                                        {row.action === 'Download' ? (
                                            <button className="flex items-center gap-2 px-3 py-1.5 bg-purple-100 text-purple-700 rounded-lg text-xs font-bold hover:bg-purple-200 transition-colors">
                                                <Download size={14} />
                                                Download
                                            </button>
                                        ) : (
                                            <>
                                                <button className="px-3 py-1.5 bg-green-50 text-green-600 rounded-lg text-xs font-bold hover:bg-green-100">Approve</button>
                                                <button className="px-3 py-1.5 bg-red-50 text-red-600 rounded-lg text-xs font-bold hover:bg-red-100">Reject</button>
                                            </>
                                        )}
                                    </div>
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

function StatsCard({ label, value, icon: Icon }) {
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
