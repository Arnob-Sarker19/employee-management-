import { X, Globe, Save } from 'lucide-react';

export default function AttendanceOptionsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="p-6 pb-2">
             <h2 className="text-xl font-semibold text-gray-800">Attendance Options</h2>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
            <p className="text-gray-600 font-medium">Select</p>
            
            <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-pink-500 hover:bg-pink-50 transition-all group">
                    <span className="font-medium text-gray-700 group-hover:text-pink-700">Using IP</span>
                    <Globe size={20} className="text-pink-500" />
                </button>

                <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-pink-500 hover:bg-pink-50 transition-all group">
                    <span className="font-medium text-gray-700 group-hover:text-pink-700">Using Location</span>
                    <Globe size={20} className="text-pink-500" />
                </button>
            </div>
        </div>

        {/* Footer */}
        <div className="p-6 pt-2">
            <button onClick={onClose} className="w-full py-3 bg-[#9d174d] text-white rounded-xl font-medium hover:bg-[#831843] transition-colors shadow-lg shadow-pink-200 flex items-center justify-center gap-2">
                <Save size={18} />
                Save
            </button>
        </div>

      </div>
    </div>
  );
}
