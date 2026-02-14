import { X, Calendar, Clock, ChevronDown } from 'lucide-react';

export default function ManualAttendanceModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h2 className="text-xl font-semibold text-gray-800">Manual Attendance</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          
          {/* Employee Select */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-600">Select Employee</label>
            <div className="relative">
                <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl appearance-none outline-none focus:ring-2 focus:ring-pink-500 text-gray-700">
                    <option>Select</option>
                    <option>John Doe</option>
                    <option>Jane Smith</option>
                </select>
                <ChevronDown className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" size={18} />
            </div>
          </div>

          {/* Date Select */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-600">Select Date</label>
            <div className="relative">
                <input type="text" placeholder="Select" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 text-gray-700" />
                <Calendar className="absolute right-3 top-3.5 text-pink-600 pointer-events-none" size={18} />
            </div>
          </div>

          {/* In Time */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-600">In time</label>
            <div className="relative">
                <input type="text" placeholder="Select" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 text-gray-700" />
                <Clock className="absolute right-3 top-3.5 text-pink-600 pointer-events-none" size={18} />
            </div>
          </div>

          {/* Out Time */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-600">Out time</label>
            <div className="relative">
                <input type="text" placeholder="Select" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 text-gray-700" />
                <Clock className="absolute right-3 top-3.5 text-pink-600 pointer-events-none" size={18} />
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-6 pt-2">
            <button className="w-full py-3 bg-[#9d174d] text-white rounded-xl font-medium hover:bg-[#831843] transition-colors shadow-lg shadow-pink-200">
                Confirm
            </button>
        </div>

      </div>
    </div>
  );
}
