import { Calendar } from 'lucide-react';

export default function AddOvertimeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="p-6 pb-4">
             <h2 className="text-xl font-semibold text-gray-800">Add Over Time</h2>
        </div>

        {/* Form Body */}
        <div className="p-6 pt-0 space-y-6">
            
            {/* Time Row */}
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Start Time</label>
                    <div className="relative">
                        <input type="text" placeholder="Select" className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 text-gray-700" />
                        <Calendar className="absolute right-3 top-3.5 text-pink-700 pointer-events-none" size={18} />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">End Time</label>
                    <div className="relative">
                        <input type="text" placeholder="Select" className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 text-gray-700" />
                        <Calendar className="absolute right-3 top-3.5 text-pink-700 pointer-events-none" size={18} />
                    </div>
                </div>
            </div>

        </div>

        {/* Footer */}
        <div className="p-6 pt-2 flex gap-4">
             <button onClick={onClose} className="flex-1 py-3 border border-gray-200 rounded-xl text-gray-600 font-medium hover:bg-gray-50 transition-colors">
                Cancel
            </button>
            <button className="flex-1 py-3 bg-[#9d174d] text-white rounded-xl font-medium hover:bg-[#831843] transition-colors shadow-lg shadow-pink-200">
                Create Shift
            </button>
        </div>

      </div>
    </div>
  );
}
