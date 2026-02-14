import { X } from 'lucide-react';

export default function AddAccessModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl w-full max-w-md p-8 relative animate-fade-in">
        
        <h2 className="text-xl font-bold text-gray-800 mb-6">New Access</h2>
        
        <div className="space-y-6">
            {/* Department */}
            <div className="space-y-1.5">
                <label className="text-gray-700 font-medium">Department *</label>
                <div className="relative">
                    <select className="w-full px-4 py-3 border border-gray-200 rounded-xl appearance-none bg-white focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all text-gray-500">
                        <option>Select</option>
                        <option>Engineering</option>
                        <option>HR</option>
                        <option>Sales</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </div>
            </div>

            {/* Shift */}
            <div className="space-y-1.5">
                <label className="text-gray-700 font-medium">Shift</label>
                <div className="relative">
                    <select className="w-full px-4 py-3 border border-gray-200 rounded-xl appearance-none bg-white focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all text-gray-500">
                        <option>Select</option>
                        <option>Morning</option>
                        <option>Night</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </div>
            </div>

            {/* Employee */}
            <div className="space-y-1.5">
                <label className="text-gray-700 font-medium">Employee</label>
                <div className="relative">
                    <select className="w-full px-4 py-3 border border-gray-200 rounded-xl appearance-none bg-white focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all text-gray-500">
                        <option>Select</option>
                        <option>John Doe</option>
                        <option>Jane Smith</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </div>
            </div>

             {/* Feature Access */}
            <div className="space-y-1.5">
                <label className="text-gray-700 font-medium">Feature Access</label>
                <div className="relative">
                    <select className="w-full px-4 py-3 border border-gray-200 rounded-xl appearance-none bg-white focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all text-gray-500">
                        <option>Select</option>
                        <option>Full Access</option>
                        <option>View Only</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </div>
            </div>

            <div className="flex gap-4 pt-4">
                <button 
                    onClick={onClose}
                    className="flex-1 py-3 border border-gray-200 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                >
                    Cancel
                </button>
                <button className="flex-1 py-3 bg-[#9d174d] text-white rounded-xl font-bold hover:bg-[#831843] transition-colors shadow-md">
                    Add
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}
