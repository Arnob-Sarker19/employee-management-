import DashboardLayout from './DashboardLayout';
import { Bell, Settings, Plus, Search, ChevronRight, ChevronLeft, ChevronDown, Clock, Users } from 'lucide-react';
import { useState } from 'react';
import AddAnnouncementModal from './modals/AddAnnouncementModal';

export default function Announcements() {
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <DashboardLayout title="Announcements & Notices">
      <div className="p-6 space-y-6 min-h-full">

         {/* Action Bar */}
         <div className="flex flex-col md:flex-row gap-6">
             <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm flex items-center gap-4">
                 <div className="p-3 bg-pink-100 rounded-xl text-pink-600">
                     <Bell size={24} />
                 </div>
                 <div>
                     <p className="text-gray-500 text-xs font-bold uppercase">Total Announcements</p>
                     <p className="text-2xl font-bold text-pink-600">127</p>
                 </div>
             </div>
             <button 
                onClick={() => setShowAddModal(true)}
                className="flex-[2] bg-white rounded-2xl shadow-sm text-[#9d174d] font-bold text-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
             >
                 <Plus size={28} />
                 Add New Announcement
             </button>
         </div>

         {/* Content Area */}
         <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-6">
             {/* Search & Filter */}
             <div className="bg-white rounded-2xl p-4 shadow-sm mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
                 <input 
                    type="text" 
                    placeholder="Search Announcements..." 
                    className="flex-1 bg-transparent outline-none text-gray-700 px-2"
                 />
                 <div className="flex items-center gap-4">
                     <div className="flex items-center gap-2 text-sm font-bold text-gray-700">
                         <ChevronLeft size={16} className="cursor-pointer" />
                         <span>Dec 2 - Dec 8, 2024</span>
                         <ChevronRight size={16} className="cursor-pointer" />
                     </div>
                     <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-600">
                         Filter <ChevronDown size={14} />
                     </button>
                 </div>
             </div>

             <div className="flex flex-col lg:flex-row gap-6">
                 {/* List */}
                 <div className="flex-1 space-y-4">
                     {[1, 2, 3].map((item, index) => (
                         <AnnouncementCard key={index} />
                     ))}
                 </div>

                 {/* Sponsored Banner */}
                 <div className="w-full lg:w-32 bg-white rounded-2xl shadow-sm flex items-center justify-center p-4 min-h-[400px]">
                     <p className="text-center text-gray-600 font-bold text-lg -rotate-90 whitespace-nowrap hidden lg:block tracking-widest">Sponsored banner</p>
                 </div>
             </div>
         </div>

         {/* Modals */}
         <AddAnnouncementModal isOpen={showAddModal} onClose={() => setShowAddModal(false)} />

      </div>
    </DashboardLayout>
  );
}

function AnnouncementCard() {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                    <h3 className="text-lg font-bold text-gray-800">New Remote Work Policy</h3>
                    <span className="px-3 py-1 bg-red-100 text-red-600 text-[10px] font-bold rounded-full uppercase">High Priority</span>
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-1.5 border border-gray-200 rounded-lg text-xs font-medium text-gray-500 hover:bg-gray-50">Edit</button>
                    <button className="px-4 py-1.5 border border-gray-200 rounded-lg text-xs font-medium text-gray-500 hover:bg-gray-50">Delete</button>
                </div>
            </div>
            
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Starting next month, all employees will have the option to work remotely 2 days per week.
            </p>

            <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-pink-50 px-3 py-2 rounded-lg">
                    <Clock size={16} className="text-[#9d174d]" />
                    <div className="text-[10px] text-[#9d174d] font-bold leading-tight">
                        2024-12-04 at<br/>10:30 AM
                    </div>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
                    <Users size={16} className="text-[#9d174d]" />
                    <span className="text-xs text-[#9d174d] font-bold">All Employees</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
                    <div className="text-xs font-bold">
                        <span className="text-gray-400 block text-[10px]">By</span>
                        <span className="text-[#9d174d]">HR Department</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
