import { useState } from 'react';
import { LogIn } from 'lucide-react';

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;
    
    setLoading(true);
    try {
      const res = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username.trim() })
      });
      const user = await res.json();
      onLogin(user);
    } catch (error) {
      console.error('Login failed', error);
      alert('Failed to connect to the server');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-slate-900 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
      <div className="w-full max-w-md p-8 bg-slate-800/80 backdrop-blur-xl rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-slate-700/50 transform transition-all hover:scale-[1.01]">
        <div className="flex justify-center mb-8">
          <div className="bg-emerald-500/10 p-4 rounded-2xl">
            <LogIn className="w-12 h-12 text-emerald-400" />
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-center text-white mb-2">Welcome Back</h2>
        <p className="text-slate-400 text-center mb-8 text-sm">Enter a username to join the chat</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-5 py-4 rounded-xl bg-slate-900/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-200"
              placeholder="e.g. johndoe"
              autoFocus
            />
          </div>
          <button
            type="submit"
            disabled={loading || !username.trim()}
            className="w-full py-4 px-4 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/30 transition-all duration-200 transform disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? 'Connecting...' : 'Join Chat'}
          </button>
        </form>
      </div>
    </div>
  );
}
