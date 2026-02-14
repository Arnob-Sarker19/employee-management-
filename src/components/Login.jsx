

import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 to-purple-600 p-4">
      {/* Container to center the card on the gradient background */}
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        
        {/* Header Section */}
        <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center bg-pink-600 p-3 rounded-lg mb-4">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                 </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Welcome to People Plus</h2>
            <p className="text-gray-500 mt-1">Let's log in your company account</p>
        </div>

        {/* Form Section */}
        <form className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email *</label>
                <input 
                    type="email" 
                    placeholder="admin@company.com" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                />
            </div>
            
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input 
                    type="password" 
                    placeholder="Enter password" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                />
                <div className="flex justify-end mt-1">
                    <Link to="/otp" className="text-sm text-pink-600 font-medium hover:text-pink-700">Forgot password?</Link>
                </div>
            </div>

            <div className="pt-4 flex items-center justify-between space-x-4">
                 <Link 
                    to="/register"
                    className="flex-1 py-2 px-4 border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-50 transition-colors text-center"
                 >
                    Create new account
                 </Link>
                 
                 <button 
                    type="submit" 
                    className="flex-1 py-2 px-4 bg-[#831843] text-white rounded-full font-medium hover:bg-[#9d174d] transition-colors shadow-lg shadow-pink-200"
                 >
                    Sign in
                 </button>
            </div>
        </form>
      </div>
    </div>
  );
}
