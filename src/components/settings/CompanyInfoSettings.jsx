import { Plus, Clock, Save, MapPin } from 'lucide-react';

export default function CompanyInfoSettings() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column: Company Info */}
        <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-gray-800 font-bold mb-6">Company Information</h3>
                
                {/* Logo Upload */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-[#9d174d] rounded-xl flex items-center justify-center text-white font-bold text-xs p-2 text-center">
                        People Plus
                    </div>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 bg-[#9d174d] text-white rounded-xl text-xs font-bold hover:bg-[#831843]">Change Logo</button>
                        <button className="px-4 py-2 border border-gray-200 rounded-xl text-xs font-bold text-gray-500 hover:bg-gray-50">Remove</button>
                    </div>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="space-y-1">
                        <label className="text-xs font-medium text-gray-500">Company Name</label>
                        <input type="text" defaultValue="Tech Solutions Inc." className="w-full p-2.5 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 text-sm font-medium text-gray-700" />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-medium text-gray-500">Industry</label>
                        <input type="text" placeholder="Select" className="w-full p-2.5 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 text-sm font-medium text-gray-700" />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                     <div className="space-y-1">
                        <label className="text-xs font-medium text-gray-500">Geo-fencing Radius</label>
                        <input type="text" className="w-full p-2.5 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 text-sm font-medium text-gray-700" />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-medium text-gray-500">Phone Number</label>
                        <input type="text" defaultValue="+1 (555) 123-4567" className="w-full p-2.5 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 text-sm font-medium text-gray-700" />
                    </div>
                </div>

                <div className="space-y-1 mb-4">
                     <label className="text-xs font-medium text-gray-500">Address</label>
                     <div className="relative">
                        <input type="text" defaultValue="123 Business St, San Francisco, CA 94102" className="w-full p-2.5 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 text-sm font-medium text-gray-700 pr-10" />
                        <MapPin className="absolute right-3 top-2.5 text-pink-500" size={16} />
                     </div>
                </div>
                 <div className="space-y-1 mb-6">
                     <div className="relative">
                        <input type="text" defaultValue="123 Business St, San Francisco, CA 94102" className="w-full p-2.5 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 text-sm font-medium text-gray-700 pr-10" />
                        <MapPin className="absolute right-3 top-2.5 text-pink-500" size={16} />
                     </div>
                </div>

                 <div className="space-y-1 mb-6">
                     <label className="text-xs font-medium text-gray-500">Website</label>
                     <input type="text" defaultValue="https://techsolutions.com" className="w-full p-2.5 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 text-sm font-medium text-gray-700" />
                </div>

                <button className="flex items-center gap-2 px-6 py-2.5 bg-[#9d174d] text-white rounded-xl font-bold hover:bg-[#831843] shadow-lg shadow-pink-200 transition-colors">
                    <Save size={18} />
                    Save Changes
                </button>
            </div>
        </div>

        {/* Right Column: Office Location & Schedule */}
        <div className="space-y-6">
            
            {/* Office Locations */}
            <div className="flex gap-4">
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center text-center gap-2 min-h-[140px] cursor-pointer hover:bg-gray-50 border-2 border-dashed border-pink-200 group">
                    <div className="p-3 bg-pink-50 rounded-full text-pink-600 group-hover:bg-pink-100 transition-colors">
                        <Plus size={24} />
                    </div>
                    <p className="text-[#9d174d] font-bold text-sm">Add Multiple<br/>Office Locations</p>
                </div>
                 <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center text-center gap-2 min-h-[140px] cursor-pointer hover:bg-gray-50 border border-gray-100">
                    <div className="p-2 text-pink-600">
                        <Plus size={20} />
                    </div>
                </div>
            </div>

            {/* Default Schedule Setup */}
             <div className="bg-white rounded-2xl p-9 shadow-sm">
                <h3 className="text-gray-800 font-bold mb-6">Default Schedule Setup</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="space-y-1">
                        <label className="text-xs font-medium text-gray-500">Default Shift Start Time</label>
                         <select className="w-full p-2.5 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 text-sm font-medium text-gray-700">
                             <option>Select</option>
                         </select>
                    </div>
                    <div className="space-y-1">
                         <label className="text-xs font-medium text-gray-500">Default Shift End Time</label>
                         <select className="w-full p-2.5 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 text-sm font-medium text-gray-700">
                             <option>Select</option>
                         </select>
                    </div>
                </div>

                <div className="mb-6">
                    <label className="text-xs font-medium text-gray-500 block mb-2">Working Days</label>
                    <div className="grid grid-cols-4 gap-2">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                            <button key={day} className={`py-2 rounded-xl text-xs font-bold border transition-all ${['Mon','Tue','Wed','Thu','Fri'].includes(day) ? 'border-pink-500 text-pink-600 bg-pink-50' : 'border-gray-200 text-gray-400 hover:border-gray-300'}`}>
                                {day}
                            </button>
                        ))}
                    </div>
                </div>

                 <div className="space-y-1 mb-6">
                     <label className="text-xs font-medium text-gray-500">Time Zone</label>
                     <select className="w-full p-2.5 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 text-sm font-medium text-gray-700">
                         <option>Select</option>
                     </select>
                </div>

                <button className="flex items-center gap-2 px-6 py-2.5 bg-[#9d174d] text-white rounded-xl font-bold hover:bg-[#831843] shadow-lg shadow-pink-200 transition-colors">
                    <Save size={18} />
                    Save Changes
                </button>

             </div>

        </div>
    </div>
  );
}
