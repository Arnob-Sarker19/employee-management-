import { Save } from 'lucide-react';

export default function MyProfileSettings() {
  return (
    <div className="flex justify-center">
        <div className="w-full max-w-2xl bg-white rounded-2xl p-6 shadow-sm">
             <h3 className="text-gray-800 font-bold mb-6">Personal Information</h3>
             
             {/* Profile Photo */}
             <div className="flex items-center gap-4 mb-8">
                 <div className="w-20 h-20 bg-pink-200 rounded-full flex items-center justify-center text-pink-600 font-bold text-2xl border-4 border-pink-50">
                    JD
                 </div>
                 <div className="flex gap-2">
                     <button className="px-4 py-2 bg-[#9d174d] text-white rounded-xl text-xs font-bold hover:bg-[#831843]">Change Photo</button>
                     <button className="px-4 py-2 border border-gray-200 rounded-xl text-xs font-bold text-gray-500 hover:bg-gray-50">Remove</button>
                 </div>
             </div>

             {/* Form Fields */}
             <div className="grid grid-cols-2 gap-6 mb-6">
                 <div className="space-y-1">
                     <label className="text-xs font-medium text-gray-500">First Name</label>
                     <input type="text" defaultValue="John" className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 text-sm font-medium text-gray-700" />
                 </div>
                 <div className="space-y-1">
                     <label className="text-xs font-medium text-gray-500">Last Name</label>
                     <input type="text" defaultValue="Doe" className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 text-sm font-medium text-gray-700" />
                 </div>
             </div>

             <div className="grid grid-cols-2 gap-6 mb-6">
                 <div className="space-y-1">
                     <label className="text-xs font-medium text-gray-500">Email Address</label>
                     <input type="email" defaultValue="john.doe@techsolutions.com" className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 text-sm font-medium text-gray-700" />
                 </div>
                 <div className="space-y-1">
                     <label className="text-xs font-medium text-gray-500">Phone Number</label>
                     <input type="text" defaultValue="+1 (555) 123-4567" className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 text-sm font-medium text-gray-700" />
                 </div>
             </div>

             <div className="grid grid-cols-2 gap-6 mb-8">
                 <div className="space-y-1">
                     <label className="text-xs font-medium text-gray-500">Job Title</label>
                     <input type="text" defaultValue="HR Manager" className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 text-sm font-medium text-gray-700" />
                 </div>
                 <div className="space-y-1">
                     <label className="text-xs font-medium text-gray-500">Department</label>
                     <input type="text" defaultValue="Human Resources" className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 text-sm font-medium text-gray-700" />
                 </div>
             </div>

             <button className="flex items-center gap-2 px-6 py-3 bg-[#9d174d] text-white rounded-xl font-bold hover:bg-[#831843] shadow-lg shadow-pink-200 transition-colors">
                 <Save size={18} />
                 Save Changes
             </button>
        </div>
    </div>
  );
}
