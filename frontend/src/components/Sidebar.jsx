import { LogOut, Settings, MessageSquare, UserCircle } from 'lucide-react';

export default function Sidebar({ users, currentUser, onLogout }) {
  return (
    <div className="w-80 bg-slate-800/95 backdrop-blur-xl h-full flex flex-col border-r border-slate-700/50 shadow-xl flex-shrink-0">
      {/* Header */}
      <div className="h-16 px-4 bg-slate-800/50 border-b border-slate-700/50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-tr from-emerald-500 to-emerald-400 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-inner shadow-white/20">
              {currentUser?.username?.[0]?.toUpperCase()}
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 rounded-full border-2 border-slate-800"></div>
          </div>
          <div>
            <h2 className="text-white font-semibold text-sm">{currentUser?.username}</h2>
            <p className="text-emerald-400 text-xs font-medium">Online</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-slate-400">
          <MessageSquare className="w-5 h-5 cursor-pointer hover:text-white transition" />
          <Settings className="w-5 h-5 cursor-pointer hover:text-white transition" />
          <LogOut className="w-5 h-5 cursor-pointer hover:text-red-400 transition" onClick={onLogout} />
        </div>
      </div>

      {/* Search */}
      <div className="p-4 border-b border-slate-700/50">
        <div className="bg-slate-900/50 rounded-xl px-4 py-2 flex items-center border border-slate-700/50 focus-within:border-emerald-500/50 focus-within:ring-1 focus-within:ring-emerald-500/50 transition">
          <svg className="w-4 h-4 text-slate-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          <input 
            type="text" 
            placeholder="Search or start new chat" 
            className="bg-transparent border-none text-sm text-white focus:outline-none w-full placeholder-slate-500"
          />
        </div>
      </div>

      {/* Contacts / Users */}
      <div className="flex-1 overflow-y-auto w-full custom-scrollbar">
        <div className="px-4 py-3">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">All Users</h3>
          <div className="space-y-1">
            {users.map(user => (
              <div 
                key={user.id} 
                className="flex items-center gap-4 p-3 rounded-xl cursor-pointer hover:bg-slate-700/40 transition group"
              >
                <div className="relative">
                  <UserCircle className="w-12 h-12 text-slate-400 group-hover:text-emerald-400 transition" />
                  <div className="absolute bottom-1 right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full border border-slate-800"></div>
                </div>
                <div className="flex-1 border-b border-slate-700/30 pb-3 group-last:border-none">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="text-slate-200 font-medium group-hover:text-white transition">{user.username}</h4>
                    <span className="text-xs text-slate-500 group-hover:text-slate-400">active</span>
                  </div>
                  <p className="text-sm text-slate-400 truncate max-w-[180px]">Available</p>
                </div>
              </div>
            ))}
            {users.length === 0 && (
              <p className="text-slate-500 text-sm text-center py-4">No other users online</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
