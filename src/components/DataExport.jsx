import DashboardLayout from './DashboardLayout';
import { Bell, Settings, Calendar, ChevronDown, CheckCircle, Download, Users, FileText, Building2 } from 'lucide-react';

export default function DataExport() {
  return (
    <DashboardLayout title="Data Export">
      <div className="p-6 space-y-6 min-h-full">

         {/* Category Cards */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             <CategoryCard 
                icon={Users}
                color="bg-[#9d174d]"
                title="Employee Information"
                desc="Export complete employee database including personal details, contact information, and employment status"
                count="1,247 records"
                fields="7 fields"
                selected={false}
             />
             <CategoryCard 
                icon={FileText}
                color="bg-[#9d174d]"
                title="Contact Persons"
                desc="Export emergency contacts and authorized contact persons for all employees"
                count="2,145 records"
                fields="6 fields"
                selected={true}
             />
             <CategoryCard 
                icon={Building2}
                color="bg-[#9d174d]"
                title="Company Admin Data"
                desc="Export company information including admin details, subscription status, and configuration"
                count="156 companies"
                fields="6 fields"
                selected={false}
             />
             <CategoryCard 
                icon={Calendar}
                color="bg-[#9d174d]"
                title="Attendance Records"
                desc="Export attendance data including check-in/check-out times and shift information"
                count="18,542 records"
                fields="7 fields"
                selected={false}
             />
         </div>

         <div className="flex flex-col lg:flex-row gap-6">
             
             {/* Export Configuration Form */}
             <div className="flex-1 bg-white rounded-2xl p-8 shadow-sm">
                 <h2 className="text-xl font-bold text-gray-800 mb-6">Export Configuration</h2>
                 
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                     <div className="space-y-2">
                         <label className="text-sm font-medium text-gray-500">File Format</label>
                         <div className="relative">
                             <select className="w-full p-3 bg-white border border-gray-200 rounded-xl appearance-none outline-none focus:ring-2 focus:ring-pink-500 text-gray-700">
                                 <option>Select</option>
                             </select>
                             <ChevronDown className="absolute right-4 top-4 text-gray-400 pointer-events-none" size={16} />
                         </div>
                     </div>
                     <div className="space-y-2">
                         <label className="text-sm font-medium text-gray-500">Starting date</label>
                         <div className="relative">
                             <input type="text" placeholder="Select" className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 text-gray-700" />
                             <Calendar className="absolute right-4 top-3.5 text-pink-700 pointer-events-none" size={18} />
                         </div>
                     </div>
                     <div className="space-y-2">
                         <label className="text-sm font-medium text-gray-500">Ending date</label>
                         <div className="relative">
                             <input type="text" placeholder="Select" className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 text-gray-700" />
                             <Calendar className="absolute right-4 top-3.5 text-pink-700 pointer-events-none" size={18} />
                         </div>
                     </div>
                 </div>

                 <div className="mb-8">
                    <label className="text-sm font-medium text-gray-500 block mb-3">Select Fields to Export</label>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {['Employee Name', 'Contact Name', 'Position', 'Phone', 'Email', 'Address'].map((field, i) => (
                            <label key={i} className="flex items-center gap-3 p-3 border border-gray-100 rounded-xl cursor-pointer hover:bg-gray-50">
                                <input type="checkbox" className="w-4 h-4 text-pink-600 rounded border-gray-300 focus:ring-pink-500" />
                                <span className="text-sm text-gray-700 font-medium">{field}</span>
                            </label>
                        ))}
                    </div>
                 </div>

                 <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                     <p className="text-sm text-gray-500">Estimated file size: <span className="font-bold text-gray-800">~3.2 MB</span></p>
                     <button className="flex items-center gap-2 px-6 py-3 bg-[#9d174d] text-white rounded-xl font-bold hover:bg-[#831843] transition-colors shadow-lg shadow-pink-200">
                         <Download size={20} />
                         Export Data
                     </button>
                 </div>

             </div>

             {/* Sponsored Banner */}
             <div className="w-full lg:w-32 bg-white rounded-2xl shadow-sm flex items-center justify-center p-4 min-h-[400px]">
                 <p className="text-center text-gray-600 font-bold text-lg -rotate-90 whitespace-nowrap hidden lg:block tracking-widest">Sponsored banner</p>
             </div>

         </div>

      </div>
    </DashboardLayout>
  );
}

function CategoryCard({ icon: Icon, color, title, desc, count, fields, selected }) {
    return (
        <div className={`relative bg-white rounded-2xl p-6 shadow-sm border-2 transition-all cursor-pointer ${selected ? 'border-[#9d174d]' : 'border-transparent hover:border-gray-200'}`}>
            {selected && (
                <div className="absolute top-4 right-4 text-[#9d174d]">
                    <CheckCircle size={24} />
                </div>
            )}
            <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center text-white mb-4`}>
                <Icon size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-xs text-gray-500 leading-relaxed mb-6 h-12 overflow-hidden">{desc}</p>
            
            <div className="flex justify-between items-center text-xs font-bold">
                <span className="text-gray-400">{count}</span>
                <span className="text-[#9d174d]">{fields}</span>
            </div>
        </div>
    );
}
