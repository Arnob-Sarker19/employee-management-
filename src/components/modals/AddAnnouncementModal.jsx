import { ChevronDown } from 'lucide-react';

export default function AddAnnouncementModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="p-6 pb-4">
             <h2 className="text-xl font-medium text-gray-800">Add New Announcement</h2>
        </div>

        {/* Form Body */}
        <div className="p-6 pt-0 space-y-5">
            
            <p className="font-bold text-gray-800">Add New Announcement</p>

            {/* Title */}
            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Title</label>
                <input 
                    type="text" 
                    placeholder="e.g., leave title" 
                    className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 text-gray-700" 
                />
            </div>

            {/* Department */}
            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Department *</label>
                <div className="relative">
                    <select className="w-full p-3 bg-white border border-gray-200 rounded-xl appearance-none outline-none focus:ring-2 focus:ring-pink-500 text-gray-700">
                        <option>Select</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-4 text-gray-400 pointer-events-none" size={16} />
                </div>
            </div>

            {/* Shift */}
            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Shift</label>
                <div className="relative">
                    <select className="w-full p-3 bg-white border border-gray-200 rounded-xl appearance-none outline-none focus:ring-2 focus:ring-pink-500 text-gray-700">
                        <option>Select</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-4 text-gray-400 pointer-events-none" size={16} />
                </div>
            </div>

            {/* Text */}
            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Text</label>
                <textarea 
                    rows={4}
                    placeholder="Write here" 
                    className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 text-gray-700 resize-none" 
                />
            </div>

        </div>

        {/* Footer */}
        <div className="p-6 pt-2 flex gap-4">
             <button onClick={onClose} className="flex-1 py-3 border border-gray-200 rounded-xl text-gray-600 font-medium hover:bg-gray-50 transition-colors">
                Cancel
            </button>
            <button className="flex-1 py-3 bg-[#9d174d] text-white rounded-xl font-bold hover:bg-[#831843] transition-colors shadow-lg shadow-pink-200">
                Send
            </button>
        </div>

      </div>
    </div>
  );
}
