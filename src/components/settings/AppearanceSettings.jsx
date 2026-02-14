import { Save } from 'lucide-react';

export default function AppearanceSettings() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      {/* Left Column: Form */}
      <div className="lg:col-span-2 space-y-6">
        
        <div className="bg-white rounded-3xl p-8 shadow-sm h-full">
          <h3 className="text-gray-800 font-bold mb-6 text-lg">Language & Region</h3>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Language</label>
              <div className="relative">
                <select className="w-full px-4 py-3 border border-gray-200 rounded-xl appearance-none bg-white focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all text-gray-600">
                  <option>English (United States)</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Time Zone</label>
              <div className="relative">
                <select className="w-full px-4 py-3 border border-gray-200 rounded-xl appearance-none bg-white focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all text-gray-600">
                  <option>(GMT-08:00) Pacific Time (US & Canada)</option>
                  <option>(GMT-05:00) Eastern Time (US & Canada)</option>
                  <option>(GMT+00:00) UTC</option>
                </select>
                 <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date Format</label>
               <div className="relative">
                <select className="w-full px-4 py-3 border border-gray-200 rounded-xl appearance-none bg-white focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all text-gray-600">
                  <option>MM/DD/YYYY</option>
                  <option>DD/MM/YYYY</option>
                  <option>YYYY-MM-DD</option>
                </select>
                 <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button className="bg-[#9d174d] text-white px-6 py-3 rounded-xl text-sm font-bold shadow-md hover:bg-[#831843] transition-colors flex items-center gap-2">
                <Save size={18} />
                Save Preferences
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Right Column: Banner */}
      <div className="hidden lg:block h-full">
        <div className="bg-white rounded-3xl h-full min-h-[500px] shadow-sm flex items-center justify-center p-8 relative overflow-hidden">
             {/* Simple pattern background */}
             <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#9d174d_1px,transparent_1px)] [background-size:16px_16px]"></div>
             <p className="text-gray-400 font-medium transform -rotate-90 text-xl tracking-widest whitespace-nowrap">Sponsored banner</p>
        </div>
      </div>

    </div>
  );
}
