export default function CustomLeaveModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="p-6 pb-4">
             <p className="text-gray-500 text-sm font-medium">Add New</p>
        </div>

        {/* Form Body */}
        <div className="p-6 pt-0 space-y-6">
            
            {/* Title */}
            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Title</label>
                <input 
                    type="text" 
                    placeholder="e.g., leave title" 
                    className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 text-gray-700" 
                />
            </div>

            {/* Day */}
            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Day</label>
                <input 
                    type="text" 
                    placeholder="e.g., 10" 
                    className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 text-gray-700" 
                />
            </div>

            {/* Policies */}
            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Policies</label>
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
            <button className="flex-1 py-3 bg-[#9d174d] text-white rounded-xl font-medium hover:bg-[#831843] transition-colors shadow-lg shadow-pink-200">
                Save
            </button>
        </div>

      </div>
    </div>
  );
}
