import Sidebar from './Sidebar';
import { Bell, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function DashboardLayout({ children, title }) {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-[#fce7f3] overflow-hidden">
        <Sidebar />
        
        {/* Right Side Column */}
        <div className="flex-1 flex flex-col h-screen overflow-hidden relative bg-[#c05c86]">
            
            {/* Fixed Header */}
            {title && (
              <div className="px-6 pt-6 pb-0 z-10 w-full">
                <div className="bg-gradient-to-r from-pink-100 to-pink-200 rounded-[20px] px-8 py-5 flex justify-between items-center shadow-lg">
                    <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
                    <div className="flex items-center gap-6">
                        {/* Company Info */}
                        <div className="flex items-center gap-4 bg-white px-5 py-2.5 rounded-2xl shadow-sm">
                            <img src="https://ui-avatars.com/api/?name=Company&background=random" className="w-10 h-10 rounded-full" alt="Logo" />
                            <div>
                                <p className="text-sm font-bold text-gray-900">ABCD Company</p>
                                <p className="text-xs text-gray-500 font-medium">Tech</p>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-4">
                            <button className="p-3 bg-[#9d174d] text-white rounded-full shadow-md hover:bg-[#831843] transition-all transform hover:scale-105">
                                <Bell size={20} />
                            </button>
                            <button 
                                onClick={() => navigate('/settings')}
                                className="p-3 bg-[#9d174d] text-white rounded-full shadow-md hover:bg-[#831843] transition-all transform hover:scale-105"
                            >
                                <Settings size={20} />
                            </button>
                        </div>
                    </div>
                </div>
              </div>
            )}

            {/* Scrollable Content Area */}
            <main className="flex-1 overflow-y-auto w-full relative">
                {children}
            </main>
        </div>
    </div>
  );
}
