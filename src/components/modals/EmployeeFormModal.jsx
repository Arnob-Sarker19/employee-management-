import { X, Calendar, ChevronDown } from 'lucide-react';

export default function EmployeeFormModal({ isOpen, onClose, type = 'add', initialData }) {
  if (!isOpen) return null;

  const isEdit = type === 'edit';
  const title = isEdit ? 'Edit Employee' : 'Add New Employee';
  const buttonText = isEdit ? 'Update' : 'Add Employee';

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20 bg-black/50 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200 mb-20">
        
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 space-y-4">
            
            {/* Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">First Name *</label>
                    <input type="text" defaultValue={isEdit ? 'John' : ''} placeholder="John" className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 text-gray-700" />
                </div>
                <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">Last Name *</label>
                    <input type="text" defaultValue={isEdit ? 'Doe' : ''} placeholder="Doe" className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 text-gray-700" />
                </div>
            </div>

            {/* Email */}
            <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Email Address *</label>
                <input type="email" defaultValue={isEdit ? 'john.doe@company.com' : ''} placeholder="john.doe@company.com" className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 text-gray-700" />
            </div>

            {/* Phone */}
            <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Phone Number *</label>
                <input type="tel" defaultValue={isEdit ? '+1 (555) 123 4567' : ''} placeholder="+1 (555) 123 4567" className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 text-gray-700" />
            </div>

            {/* Dept & Position Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">Department *</label>
                    <div className="relative">
                        <select className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl appearance-none outline-none focus:ring-2 focus:ring-pink-500 text-gray-700">
                            <option>Select</option>
                            <option>Engineering</option>
                            <option>Marketing</option>
                        </select>
                         <ChevronDown className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" size={16} />
                    </div>
                </div>
                 <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">Position *</label>
                     <div className="relative">
                        <select className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl appearance-none outline-none focus:ring-2 focus:ring-pink-500 text-gray-700">
                            <option>Select</option>
                            <option>Manager</option>
                            <option>Developer</option>
                        </select>
                         <ChevronDown className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" size={16} />
                    </div>
                </div>
            </div>

            {/* Join Date */}
            <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Join Date *</label>
                <div className="relative">
                    <input type="text" placeholder="Select" className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 text-gray-700" />
                    <Calendar className="absolute right-3 top-3 text-pink-600 pointer-events-none" size={18} />
                </div>
            </div>

            {/* Shift */}
            <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Shift</label>
                 <div className="relative">
                    <select className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl appearance-none outline-none focus:ring-2 focus:ring-pink-500 text-gray-700">
                        <option>Select</option>
                        <option>Morning (9-5)</option>
                        <option>Evening (2-10)</option>
                    </select>
                     <ChevronDown className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" size={16} />
                </div>
            </div>

             {/* Separator OR */}
             {!isEdit && (
                <div className="relative flex items-center py-2">
                    <div className="flex-grow border-t border-gray-200"></div>
                    <span className="flex-shrink-0 mx-4 text-gray-400 text-sm">Or</span>
                    <div className="flex-grow border-t border-gray-200"></div>
                </div>
             )}

        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100 flex justify-between items-center bg-gray-50/50 gap-4">
             <button onClick={onClose} className="flex-1 py-3 border border-gray-200 rounded-xl text-gray-600 font-medium hover:bg-gray-50 transition-colors">
                Cancel
            </button>
            <button className="flex-1 py-3 bg-[#9d174d] text-white rounded-xl font-medium hover:bg-[#831843] transition-colors shadow-lg shadow-pink-200">
                {buttonText}
            </button>
        </div>

      </div>
    </div>
  );
}
