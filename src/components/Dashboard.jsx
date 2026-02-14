import DashboardLayout from './DashboardLayout';
import { Bell, Settings, FileText, CheckCircle, Clock } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';

// Mock Data
const attendanceData = [
  { name: 'Jan', value: 92 },
  { name: 'Feb', value: 88 },
  { name: 'Mar', value: 96 },
  { name: 'Apr', value: 91 },
  { name: 'May', value: 95 },
  { name: 'Jun', value: 94 },
];

const leaveData = [
  { name: 'Approved', value: 45, color: '#10b981' }, // Green
  { name: 'Pending', value: 12, color: '#f59e0b' }, // Yellow/Orange
  { name: 'Rejected', value: 3, color: '#ef4444' }, // Red
];

const growthData = [
    { name: 'Jan', employees: 95 },
    { name: 'Feb', employees: 105 },
    { name: 'Mar', employees: 112 },
    { name: 'Apr', employees: 118 },
    { name: 'May', employees: 132 },
    { name: 'Jun', employees: 148 },
];

const recentActivity = [
    { id: 1, user: 'John Doe', action: 'requested sick leave', time: '5 min ago', icon: FileText },
    { id: 2, user: 'John Doe', action: 'requested sick leave', time: '5 min ago', icon: FileText },
    { id: 3, user: 'John Doe', action: 'requested sick leave', time: '5 min ago', icon: FileText },
    { id: 4, user: 'John Doe', action: 'requested sick leave', time: '5 min ago', icon: FileText },
    { id: 5, user: 'John Doe', action: 'requested sick leave', time: '5 min ago', icon: FileText },
    { id: 6, user: 'John Doe', action: 'requested sick leave', time: '5 min ago', icon: FileText },
];

export default function Dashboard() {
  return (
    <DashboardLayout title="Dashboard">
      <div className="p-6 space-y-6 min-h-full">

         {/* Stats Cards */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard label="Total Employees" value="48" icon={Settings} color="text-pink-600" bg="bg-pink-100" />
            <StatsCard label="Present Today" value="8" icon={Settings} color="text-pink-600" bg="bg-pink-100" />
            <StatsCard label="On Leave" value="38" icon={Settings} color="text-pink-600" bg="bg-pink-100" />
            <StatsCard label="Pending Requests" value="2" icon={Settings} color="text-pink-600" bg="bg-pink-100" />
         </div>

         {/* Charts Row */}
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Attendance Trend (Line Chart) */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-gray-700 font-medium mb-4">Attendance Trend (%)</h3>
                <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={attendanceData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                            <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                            <Tooltip />
                            <Line type="monotone" dataKey="value" stroke="#10b981" strokeWidth={3} dot={{r: 4, strokeWidth: 2}} activeDot={{r: 6}} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Leave Requests (Donut Chart) */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-gray-700 font-medium mb-4">Leave Requests</h3>
                <div className="h-48 flex justify-center">
                     <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={leaveData}
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={2}
                            dataKey="value"
                            startAngle={90}
                            endAngle={-270}
                          >
                            {leaveData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="space-y-3 mt-4">
                    {leaveData.map((item) => (
                        <div key={item.name} className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full" style={{backgroundColor: item.color}}></span>
                                <span className="text-gray-600">{item.name}</span>
                            </div>
                            <span className="font-bold text-gray-800">{item.value}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Employee Growth (Bar Chart) */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-gray-700 font-medium mb-4">Employee Growth</h3>
                <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                         <BarChart data={growthData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                            <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                            <Tooltip cursor={{fill: 'transparent'}} />
                            <Bar dataKey="employees" fill="#8b5cf6" radius={[4, 4, 0, 0]} barSize={30} />
                         </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
         </div>

         {/* Recent Activity */}
         <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium text-gray-800">Recent Activity</h3>
                <button className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-lg">Filter</button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {recentActivity.map((item) => (
                    <div key={item.id} className="flex gap-4 p-3 hover:bg-gray-50 rounded-xl transition-colors">
                        <div className="bg-pink-100 p-2 rounded-lg h-fit">
                             <item.icon size={18} className="text-pink-600" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-800">
                                <span className="font-semibold">{item.user}</span> {item.action}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">{item.time}</p>
                        </div>
                    </div>
                ))}
            </div>
         </div>

      </div>
    </DashboardLayout>
  );
}

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
