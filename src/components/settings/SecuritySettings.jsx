export default function SecuritySettings() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      {/* Left Column: Security Forms */}
      <div className="lg:col-span-2 space-y-8">
        
        {/* Change Password */}
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <h3 className="text-gray-800 font-bold mb-6 text-lg">Change Password</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
              <input 
                type="password" 
                className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
              <input 
                type="password" 
                className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
              <input 
                type="password" 
                className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
              />
            </div>
            
            <div className="pt-2">
              <button className="bg-[#9d174d] text-white px-6 py-2 rounded-xl text-sm font-bold shadow-md hover:bg-[#831843] transition-colors">
                Update Password
              </button>
            </div>
          </div>
        </div>

        {/* Two-Factor Authentication */}
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <h3 className="text-gray-800 font-bold mb-4 text-lg">Two-Factor Authentication</h3>
          <p className="text-sm text-gray-500 mb-6">
            Add an extra layer of security to your account by enabling two-factor authentication.
          </p>
          <button className="bg-[#9d174d] text-white px-6 py-2 rounded-xl text-sm font-bold shadow-md hover:bg-[#831843] transition-colors">
            Enable 2FA
          </button>
        </div>

        {/* Active Sessions */}
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <h3 className="text-gray-800 font-bold mb-6 text-lg">Active Sessions</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <div>
                <p className="text-gray-800 font-bold text-sm">Windows</p>
                <p className="text-xs text-gray-500 mt-0.5">San Francisco, CA • Active now</p>
              </div>
              <button className="text-[#9d174d] text-xs font-bold border border-[#9d174d]/20 px-3 py-1.5 rounded-lg hover:bg-[#9d174d]/5 transition-colors">
                Revoke
              </button>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <div>
                <p className="text-gray-800 font-bold text-sm">MacOS</p>
                <p className="text-xs text-gray-500 mt-0.5">San Francisco, CA • 2 hours ago</p>
              </div>
              <button className="text-[#9d174d] text-xs font-bold border border-[#9d174d]/20 px-3 py-1.5 rounded-lg hover:bg-[#9d174d]/5 transition-colors">
                Revoke
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Right Column: Banner */}
      <div className="hidden lg:block">
        <div className="bg-white rounded-3xl h-full min-h-[500px] shadow-sm flex items-center justify-center p-8 relative overflow-hidden">
             {/* Simple pattern background */}
             <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#9d174d_1px,transparent_1px)] [background-size:16px_16px]"></div>
             <p className="text-gray-400 font-medium transform -rotate-90 text-xl tracking-widest whitespace-nowrap">Sponsored banner</p>
        </div>
      </div>

    </div>
  );
}
