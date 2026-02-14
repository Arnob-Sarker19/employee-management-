import { X, Upload } from 'lucide-react';

export default function ImportEmployeeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h2 className="text-lg font-semibold text-gray-800">Employee Import</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-8">
            <div className="border-2 border-dashed border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group">
                <div className="p-4 bg-white rounded-full shadow-sm mb-4 group-hover:scale-110 transition-transform">
                    <Upload size={32} className="text-pink-600" />
                </div>
                <h3 className="text-gray-800 font-medium mb-1">Upload Employee Email List</h3>
                <p className="text-sm text-gray-500 mb-6">Upload a CSV file with employee email addresses</p>
                
                <button className="px-6 py-2 bg-[#9d174d] text-white rounded-lg font-medium hover:bg-[#831843] transition-colors shadow-md">
                    Choose CSV File
                </button>
                <div className="mt-4">
                  <span className="text-xs text-pink-600 font-medium hover:underline cursor-pointer">Download CSV Template</span>
                </div>
            </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100 flex justify-between items-center">
            <button onClick={onClose} className="px-6 py-2 border border-gray-200 rounded-lg text-gray-600 font-medium hover:bg-gray-50 transition-colors">
                Previous
            </button>
            <button className="px-6 py-2 bg-[#9d174d] text-white rounded-lg font-medium hover:bg-[#831843] transition-colors shadow-md">
                Next
            </button>
        </div>

      </div>
    </div>
  );
}
