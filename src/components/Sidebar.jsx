import { LayoutDashboard, ClipboardList, Users, Calendar, Briefcase, FileText, Bell, Download, CreditCard, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: ClipboardList, label: 'Attendance', path: '/attendance' },
    { icon: Users, label: 'Employees', path: '/employees' },
    { icon: Calendar, label: 'Shift Scheduling', path: '/schedule' },
    { icon: Briefcase, label: 'Leave Management', path: '/leaves' },
    { icon: FileText, label: 'NOC & Payroll', path: '/payroll' },
    { icon: Bell, label: 'Announcements', path: '/announcements' },
    { icon: Download, label: 'Data Export', path: '/export' },
    { icon: CreditCard, label: 'Billing', path: '/billing' },
];

export default function Sidebar() {
    const location = useLocation();

    return (
        <div className="w-64 h-screen bg-[#fce7f3] border-r border-pink-100 flex flex-col hidden md:flex">
            {/* Logo */}
            <div className="p-8 pb-4">
                 <div className="flex items-center gap-3 mb-8">
                     <div className="bg-pink-600 p-2 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <span className="text-xl font-bold text-gray-800">People Plus</span>
                 </div>
            </div>

            {/* Menu */}
            <nav className="flex-1 overflow-y-auto px-4 space-y-1">
                {menuItems.map((item) => (
                    <Link 
                        key={item.label} 
                        to={item.path}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                            location.pathname === item.path 
                                ? 'bg-white shadow-sm text-pink-600 font-medium' 
                                : 'text-gray-500 hover:bg-pink-100/50 hover:text-gray-700'
                        }`}
                    >
                        <item.icon size={20} />
                        <span>{item.label}</span>
                    </Link>
                ))}
            </nav>

            {/* Bottom Section */}
            <div className="p-4 border-t border-pink-200 bg-pink-100/30">
               <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl p-1 mb-4">
                  <Link to="/employee-portal" className="block text-center py-2 bg-transparent text-white font-medium text-sm">
                        My Employee Portal
                  </Link>
               </div>
               
               <div className="bg-white rounded-xl p-3 flex items-center gap-3 shadow-sm mb-4">
                    <div className="h-10 w-10 bg-gray-200 rounded-full overflow-hidden">
                        <img src="https://ui-avatars.com/api/?name=Mark+Cook&background=random" alt="User" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-gray-900 truncate">Mark Cook</p>
                        <p className="text-xs text-gray-500 truncate">Admin</p>
                    </div>
               </div>

               <Link to="/login" className="flex items-center justify-between px-4 py-2 bg-[#9d174d] text-white rounded-xl hover:bg-[#831843] transition-colors">
                    <span className="font-medium text-sm">Sign out</span>
                    <LogOut size={16} />
               </Link>
            </div>
        </div>
    );
}
