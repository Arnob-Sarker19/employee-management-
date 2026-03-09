import { UserCircle, MoreVertical, Search, CheckCheck } from 'lucide-react';
import { useRef, useEffect } from 'react';

export default function ChatWindow({ currentUser, activeChat, messages, sendMessage, username }) {
  const scrollRef = useRef();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    const text = e.target.elements.message.value.trim();
    if (!text) return;
    sendMessage(text);
    e.target.reset();
  };

  if (!currentUser) return null;

  return (
    <div className="flex-1 flex flex-col bg-slate-900 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] h-full">
      {/* Header */}
      <div className="h-16 bg-slate-800/90 backdrop-blur-md flex items-center justify-between px-6 border-b border-slate-700/50 flex-shrink-0 z-10 shadow-sm">
        <div className="flex items-center gap-4 cursor-pointer hover:bg-slate-700/30 p-2 rounded-xl transition">
          <div className="relative">
            <UserCircle className="w-10 h-10 text-emerald-400" />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-slate-800"></div>
          </div>
          <div>
            <h3 className="font-semibold text-white">Global Area</h3>
            <p className="text-xs text-emerald-400 font-medium">online</p>
          </div>
        </div>
        <div className="flex gap-4 text-slate-400">
          <Search className="w-5 h-5 cursor-pointer hover:text-white transition" />
          <MoreVertical className="w-5 h-5 cursor-pointer hover:text-white transition" />
        </div>
      </div>

      {/* Messages */}
      <div 
        className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth"
        ref={scrollRef}
      >
        <div className="text-center my-4">
          <span className="bg-slate-800/60 backdrop-blur-sm text-slate-400 text-xs px-4 py-1.5 rounded-full border border-slate-700/50 shadow-inner">
            Messages are end-to-end encrypted
          </span>
        </div>
        
        {messages.map((msg, i) => {
          const isMine = msg.sender?.username === username || msg.senderId === currentUser.id;
          return (
            <div key={msg.id || i} className={`flex ${isMine ? 'justify-end' : 'justify-start'} group`}>
              {!isMine && (
                <UserCircle className="w-8 h-8 text-slate-500 mr-2 self-end mb-1 opacity-70 group-hover:opacity-100 transition" />
              )}
              <div
                className={`max-w-[75%] px-5 py-3 rounded-2xl shadow-md relative group-hover:shadow-lg transition ${
                  isMine 
                    ? 'bg-emerald-500 text-white rounded-tr-sm' 
                    : 'bg-slate-800 text-slate-100 rounded-tl-sm border border-slate-700/50'
                }`}
              >
                {!isMine && <p className="text-xs text-emerald-400 font-semibold mb-1">{msg.sender?.username}</p>}
                <p className="text-[15px] leading-relaxed break-words">{msg.text}</p>
                <div className={`flex items-center justify-end gap-1 mt-1 font-medium ${isMine ? 'text-emerald-100' : 'text-slate-500'} text-[10px]`}>
                  {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  {isMine && <CheckCheck className="w-3 h-3 ml-1" />}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Input */}
      <div className="p-4 bg-slate-800/90 backdrop-blur-md border-t border-slate-700/50 flex-shrink-0">
        <form onSubmit={handleSend} className="max-w-4xl mx-auto flex items-center gap-4 bg-slate-900/50 p-2 rounded-full border border-slate-700/50 shadow-inner focus-within:border-emerald-500/50 focus-within:ring-1 focus-within:ring-emerald-500/50 transition-all">
          <input
            type="text"
            name="message"
            placeholder="Type a message..."
            className="flex-1 bg-transparent text-white px-4 py-2 focus:outline-none placeholder-slate-500"
            autoComplete="off"
          />
          <button
            type="submit"
            className="p-3 bg-emerald-500 hover:bg-emerald-400 rounded-full text-white shadow-md shadow-emerald-500/20 transform transition active:scale-95"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-1">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
