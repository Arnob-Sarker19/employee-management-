import { MoreVertical } from 'lucide-react';
import { useState } from 'react';
import AddAccessModal from './AddAccessModal';

export default function AccessSettings() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const users = [
    { id: 1, name: 'John Doe', department: 'Engineering', position: 'Manager', avatar: 'JD' },
    { id: 2, name: 'John Doe', department: 'Engineering', position: 'Manager', avatar: 'JD' },
    { id: 3, name: 'John Doe', department: 'Engineering', position: 'Manager', avatar: 'JD' },
    { id: 4, name: 'John Doe', department: 'Engineering', position: 'Manager', avatar: 'JD' },
    { id: 5, name: 'John Doe', department: 'Engineering', position: 'Manager', avatar: 'JD' },
  ];

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: User List */}
        <div className="lg:col-span-2 space-y-6">
          
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            {/* Header Row */}
            <div className="grid grid-cols-4 gap-4 text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 px-2">
              <div className="col-span-2 md:col-span-1">Name</div>
              <div className="hidden md:block">Department</div>
              <div>Position</div>
              <div className="text-right">Actions</div>
            </div>

            <div className="space-y-4">
              {users.map((user) => (
                <div key={user.id} className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-2xl hover:bg-gray-50 transition-colors shadow-sm">
                  <div className="grid grid-cols-4 gap-4 w-full items-center">
                      
                      {/* Name */}
                      <div className="col-span-2 md:col-span-1 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-[#fae8ff] flex items-center justify-center text-[#d946ef] font-bold text-sm">
                              {user.avatar}
                          </div>
                          <div>
                              <p className="font-bold text-gray-800 text-sm">{user.name}</p>
                          </div>
                      </div>

                      {/* Department */}
                      <div className="hidden md:block">
                          <span className="text-pink-600 font-medium text-sm">{user.department}</span>
                      </div>

                      {/* Position */}
                      <div>
                          <span className="text-gray-600 text-sm">{user.position}</span>
                      </div>

                      {/* Actions */}
                      <div className="flex justify-end">
                          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                              <MoreVertical size={18} />
                          </button>
                      </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* New Access Button */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-[#9d174d] text-white py-4 rounded-2xl font-bold shadow-lg hover:bg-[#831843] transition-colors"
          >
              New Access
          </button>

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

      {isModalOpen && <AddAccessModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}
