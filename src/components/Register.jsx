import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 to-purple-600 p-4 py-8">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl p-8 relative">
        
        {/* Header - Logo & Title */}
        <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center bg-pink-600 p-3 rounded-lg mb-4">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                 </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Welcome to People Plus</h2>
            <p className="text-gray-500 mt-1">Let's set up your company account</p>
        </div>

        <form className="space-y-6">
            
            {/* Logo Upload Section */}
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center">
                <div className="flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-pink-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                    <span className="text-gray-700 font-medium">Upload Company Logo</span>
                    <span className="text-gray-400 text-sm mb-3">Upload a JPG/PNG file</span>
                    <button type="button" className="px-4 py-2 bg-[#831843] text-white text-sm font-medium rounded-lg hover:bg-[#9d174d] transition-colors">
                        Choose JPG/PNG File
                    </button>
                    <input type="file" className="hidden" accept=".jpg,.png,.jpeg" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Company Information */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
                    <input type="text" placeholder="Enter company name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"/>
                </div>
                
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Industry *</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all bg-white text-gray-500">
                        <option>Select</option>
                        <option>Technology</option>
                        <option>Finance</option>
                        <option>Healthcare</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Size *</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all bg-white text-gray-500">
                         <option>Select</option>
                         <option>1-10</option>
                         <option>11-50</option>
                         <option>50+</option>
                    </select>
                </div>

                <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Contact Phone *</label>
                     <input type="tel" placeholder="+1 (555) 000-0000" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"/>
                </div>
            </div>

            {/* Full Width Inputs */}
            <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
                 <div className="relative">
                    <input type="text" placeholder="Enter company address" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all pr-10"/>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute right-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                 </div>
            </div>

            <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email *</label>
                 <input type="email" placeholder="admin@company.com" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"/>
            </div>

             {/* Company EKY */}
             <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Company EKY *</label>
                 <div className="relative">
                    <input type="text" readOnly placeholder="Upload documents" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all pr-10 cursor-pointer bg-white"/>
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500 absolute right-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                 </div>
            </div>

            {/* Security */}
            <h3 className="font-medium text-gray-700 pt-2">Security</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                     <input type="password" placeholder="Enter password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"/>
                </div>
                <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                     <input type="password" placeholder="Confirm password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"/>
                </div>
            </div>

            {/* Actions */}
            <div className="pt-6 flex items-center justify-between space-x-4">
                 <Link 
                    to="/login"
                    className="flex-1 py-3 px-4 border border-gray-300 rounded-full text-center text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                 >
                    Already have an account
                 </Link>
                 
                 <button 
                    type="submit" 
                    className="flex-1 py-3 px-4 bg-[#831843] text-white rounded-full font-medium hover:bg-[#9d174d] transition-colors shadow-lg shadow-pink-200"
                 >
                    Continue
                 </button>
            </div>

        </form>
      </div>
    </div>
  );
}
