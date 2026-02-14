import { Search, Phone, Mail, Clock } from 'lucide-react';

export default function LeaveBalanceModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200 max-h-[90vh] flex flex-col">
        
        {/* Scrollable Content */}
        <div className="p-6 space-y-6 overflow-y-auto">
            
            {/* Search */}
             <div className="space-y-4">
                 <div className="relative">
                    <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 outline-none text-gray-700"
                    />
                 </div>
                 <button className="w-full py-3 bg-[#9d174d] text-white rounded-xl font-bold hover:bg-[#831843] transition-colors shadow-lg shadow-pink-200">
                    Search
                </button>
             </div>

             {/* User Profile */}
             <div className="flex items-center gap-4 py-2">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold text-lg">
                    JD
                </div>
                <div>
                    <h3 className="font-bold text-gray-800">John Doe</h3>
                    <div className="text-xs text-gray-500 space-y-0.5">
                        <div className="flex items-center gap-1">
                            <Mail size={12} />
                            john.doe@company.com
                        </div>
                        <div className="flex items-center gap-1">
                            <Phone size={12} />
                            +1 (555) 123-4567
                        </div>
                    </div>
                </div>
             </div>

             {/* Department Tag */}
             <div>
                 <span className="bg-pink-100 text-[#9d174d] px-3 py-1 rounded-lg text-xs font-bold">
                     Engineering
                 </span>
             </div>

             {/* Leave Balance Cards */}
             <div className="space-y-4">
                 {[1, 2, 3].map((_, i) => (
                     <div key={i} className="border border-gray-100 rounded-2xl p-4 flex items-center justify-between shadow-sm">
                         <div className="flex items-center gap-3">
                             <div className="p-3 bg-[#9d174d] rounded-full text-white">
                                 <Clock size={20} />
                             </div>
                             <div>
                                 <p className="font-bold text-gray-800 text-sm">Sick Leave</p>
                                 <p className="text-xs text-gray-500">10 Days Remaining</p>
                             </div>
                         </div>
                         <button className="px-4 py-1 border border-gray-200 rounded-xl text-xs font-medium text-gray-600 hover:bg-gray-50">
                             Edit
                         </button>
                     </div>
                 ))}
             </div>

        </div>
        
        {/* Footer (Close button optional since it's a modal, but clicking outside or X usually works. Adding a simple close for better UX) */}
        <div className="p-4 border-t border-gray-100 bg-gray-50">
            <button onClick={onClose} className="w-full py-2 bg-white border border-gray-200 rounded-xl text-gray-600 font-medium hover:bg-gray-100">
                Close
            </button>
        </div>

      </div>
    </div>
  );
}
