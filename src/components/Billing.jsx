import DashboardLayout from './DashboardLayout';
import { Bell, Settings, Calendar, CreditCard, ChevronDown, Download, Users, DollarSign, Plus, Filter, Edit2 } from 'lucide-react';
import { useState } from 'react';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import ChangePlanModal from './modals/ChangePlanModal';

// Mock Data
const userGrowthData = [
  { name: 'Jul', users: 100 },
  { name: 'Aug', users: 105 },
  { name: 'Sep', users: 115 },
  { name: 'Oct', users: 120 },
  { name: 'Nov', users: 135 },
  { name: 'Dec', users: 145 },
];

const invoices = [
  { id: 'INV-2024-12', date: '2024-12-01', period: 'December 2024', users: 145, amount: '$145.00', status: 'Paid' },
  { id: 'INV-2024-11', date: '2024-11-01', period: 'November 2024', users: 135, amount: '$135.00', status: 'Paid' },
  { id: 'INV-2024-10', date: '2024-10-01', period: 'October 2024', users: 120, amount: '$120.00', status: 'Paid' },
  { id: 'INV-2024-09', date: '2024-09-01', period: 'September 2024', users: 115, amount: '$115.00', status: 'Paid' },
  { id: 'INV-2024-08', date: '2024-08-01', period: 'August 2024', users: 105, amount: '$105.00', status: 'Paid' },
];

export default function Billing() {
  const [showChangePlanModal, setShowChangePlanModal] = useState(false);

  return (
    <DashboardLayout title="Subscription & Billing">
      <div className="p-6 space-y-6 min-h-full">

         {/* Stats Row */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatsCard icon={Users} label="Active Users" value="145" color="text-pink-600" bg="bg-pink-50" />
            <StatsCard icon={DollarSign} label="Total Spent" value="$710.00" color="text-pink-600" bg="bg-pink-50" />
            <StatsCard icon={Calendar} label="Account Age" value="8 months" color="text-pink-600" bg="bg-pink-50" />
         </div>

         <div className="flex flex-col lg:flex-row gap-6">
             <div className="flex-1 space-y-6">
                 
                 {/* Current Plan Card */}
                 <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white shadow-lg relative overflow-hidden">
                     <div className="flex justify-between items-start mb-6">
                         <div>
                             <p className="text-sm font-medium opacity-90 mb-1">Current Plan</p>
                             <h2 className="text-3xl font-bold">Professional Plan</h2>
                         </div>
                         <button 
                            onClick={() => setShowChangePlanModal(true)}
                            className="bg-white text-purple-600 px-5 py-2.5 rounded-xl text-sm font-bold shadow-sm hover:bg-gray-50 transition-colors"
                        >
                             Change Plan
                         </button>
                     </div>
                     
                     <div className="mb-6">
                         <div className="flex items-baseline gap-1">
                             <span className="text-5xl font-bold">$145</span>
                             <span className="text-lg opacity-90">/month</span>
                         </div>
                         <p className="text-sm opacity-80 mt-1">Based on 145 active users × $1/user</p>
                     </div>

                     <div className="grid grid-cols-3 gap-8 pt-6 border-t border-white/20">
                         <div>
                             <p className="text-xs font-medium opacity-80 uppercase tracking-wider">Active Users</p>
                             <p className="text-xl font-bold mt-1">145</p>
                         </div>
                         <div>
                             <p className="text-xs font-medium opacity-80 uppercase tracking-wider">Next Billing Date</p>
                             <p className="text-xl font-bold mt-1">Jan 1</p>
                         </div>
                         <div>
                             <p className="text-xs font-medium opacity-80 uppercase tracking-wider">Billing Cycle</p>
                             <p className="text-xl font-bold mt-1">Monthly</p>
                         </div>
                     </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     
                     {/* User Growth Chart */}
                     <div className="bg-white rounded-2xl p-6 shadow-sm">
                         <p className="text-gray-800 font-bold mb-4">User Growth</p>
                         <div className="h-48">
                             <ResponsiveContainer width="100%" height="100%">
                                 <LineChart data={userGrowthData}>
                                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                     <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9ca3af'}} dy={10} />
                                     <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9ca3af'}} />
                                     <Tooltip 
                                        contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} 
                                        cursor={{stroke: '#ec4899', strokeWidth: 1, strokeDasharray: '4 4'}}
                                     />
                                     <Line type="monotone" dataKey="users" stroke="#a855f7" strokeWidth={3} dot={{r: 4, fill: '#a855f7', strokeWidth: 2, stroke: '#fff'}} activeDot={{r: 6}} />
                                 </LineChart>
                             </ResponsiveContainer>
                         </div>
                     </div>

                     {/* Payment Method */}
                     <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                         <div className="flex justify-between items-start mb-4">
                            <p className="text-gray-800 font-bold">Payment Method</p>
                            <Edit2 size={16} className="text-gray-400 cursor-pointer hover:text-gray-600" />
                         </div>
                         
                         <div className="bg-slate-800 rounded-xl p-5 text-white mb-4 relative overflow-hidden">
                             <div className="flex items-center gap-2 mb-6">
                                 <CreditCard size={20} />
                                 <span className="font-medium">Visa</span>
                             </div>
                             <div className="text-xl font-mono tracking-widest mb-4">•••• •••• •••• 4242</div>
                             <div className="flex justify-between text-xs opacity-70">
                                 <div>
                                     <p className="uppercase tracking-wider text-[10px]">Card Holder</p>
                                     <p className="font-medium text-sm mt-0.5">John Doe</p>
                                 </div>
                                 <div className="text-right">
                                     <p className="uppercase tracking-wider text-[10px]">Expires</p>
                                     <p className="font-medium text-sm mt-0.5">12/25</p>
                                 </div>
                             </div>
                         </div>

                         <button className="w-full py-2.5 border border-gray-200 rounded-xl text-gray-600 text-sm font-medium hover:bg-gray-50 flex items-center justify-center gap-2">
                             <Plus size={16} />
                             Add Payment Method
                         </button>
                     </div>

                 </div>

                 {/* Invoice History */}
                 <div className="bg-white rounded-2xl p-6 shadow-sm">
                     <div className="flex justify-between items-center mb-6">
                         <h3 className="text-gray-800 font-bold">Invoice History</h3>
                         <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-lg text-xs font-bold text-gray-600 hover:bg-gray-200">
                             Filter <ChevronDown size={14} />
                         </button>
                     </div>
                     
                     <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-left text-xs text-gray-500 font-bold border-b border-gray-100 uppercase tracking-wider">
                                    <th className="pb-4 pl-4">Invoice ID</th>
                                    <th className="pb-4">Date</th>
                                    <th className="pb-4">Billing Period</th>
                                    <th className="pb-4">Active Users</th>
                                    <th className="pb-4">Amount</th>
                                    <th className="pb-4">Status</th>
                                    <th className="pb-4 text-right pr-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {invoices.map((inv, i) => (
                                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                                        <td className="py-4 pl-4">
                                            <span className="text-purple-600 font-medium text-xs bg-purple-50 px-2 py-1 rounded-md">{inv.id}</span>
                                        </td>
                                        <td className="py-4 text-gray-800 text-xs font-bold">{inv.date}</td>
                                        <td className="py-4 text-gray-600 text-xs">{inv.period}</td>
                                        <td className="py-4 text-gray-800 text-sm font-bold">{inv.users}</td>
                                        <td className="py-4 text-gray-800 text-sm font-bold">{inv.amount}</td>
                                        <td className="py-4">
                                            <span className="flex items-center gap-1 text-green-600 text-[10px] font-bold bg-green-50 px-2 py-1 rounded-full w-fit">
                                                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                                {inv.status}
                                            </span>
                                        </td>
                                        <td className="py-4 text-right pr-4">
                                            <button className="inline-flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-bold text-gray-600 hover:bg-gray-50">
                                                <Download size={14} />
                                                Download
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                     </div>
                 </div>

             </div>

             {/* Sponsored Banner */}
             <div className="w-full lg:w-32 bg-white rounded-2xl shadow-sm flex items-center justify-center p-4 min-h-[400px]">
                 <p className="text-center text-gray-600 font-bold text-lg -rotate-90 whitespace-nowrap hidden lg:block tracking-widest">Sponsored banner</p>
             </div>
         </div>

         {/* Modals */}
         <ChangePlanModal isOpen={showChangePlanModal} onClose={() => setShowChangePlanModal(false)} />

      </div>
    </DashboardLayout>
  );
}

function StatsCard({ icon: Icon, label, value, color, bg }) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm flex items-center gap-4">
            <div className={`p-4 ${bg} ${color} rounded-2xl`}>
                <Icon size={24} />
            </div>
            <div>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-wide">{label}</p>
                <p className={`text-2xl font-bold ${color === 'text-white' ? 'text-white' : 'text-gray-800'} mt-1`}>{value}</p>
            </div>
        </div>
    );
}
