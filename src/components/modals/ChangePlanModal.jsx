export default function ChangePlanModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="p-6 pb-4">
             <h2 className="text-xl font-medium text-gray-800">Choose a Plan</h2>
        </div>

        {/* Form Body */}
        <div className="p-6 pt-0 space-y-4">
            
            {/* Plan 1 */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white shadow-lg ring-2 ring-blue-500 ring-offset-2">
                 <div className="flex justify-between items-start mb-4">
                     <div>
                         <p className="text-sm font-medium opacity-90">Plan 1</p>
                         <h3 className="text-2xl font-bold">Professional Plan</h3>
                     </div>
                     <button className="bg-white text-purple-600 px-4 py-2 rounded-xl text-sm font-bold shadow-sm hover:bg-gray-50 transition-colors">
                         Update
                     </button>
                 </div>
                 <div className="flex items-baseline gap-1">
                     <span className="text-4xl font-bold">$1</span>
                     <span className="text-sm opacity-90">/month</span>
                 </div>
                 <p className="text-xs opacity-80 mt-1">active users × $1/user</p>
            </div>

            {/* Plan 2 */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white shadow-lg">
                 <div className="flex justify-between items-start mb-4">
                     <div>
                         <p className="text-sm font-medium opacity-90">Plan 2</p>
                         <h3 className="text-2xl font-bold">Professional Plan</h3>
                     </div>
                     <button className="bg-white text-purple-600 px-4 py-2 rounded-xl text-sm font-bold shadow-sm hover:bg-gray-50 transition-colors">
                         Update
                     </button>
                 </div>
                 <div className="flex items-baseline gap-1">
                     <span className="text-4xl font-bold">$12</span>
                     <span className="text-sm opacity-90">/year</span>
                 </div>
                 <p className="text-xs opacity-80 mt-1">active users × $1/user</p>
            </div>

        </div>

      </div>
    </div>
  );
}
