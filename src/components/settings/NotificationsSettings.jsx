import { useState } from 'react';

export default function NotificationsSettings() {
  const [settings, setSettings] = useState([
    {
      id: 1,
      title: "Leave Requests",
      description: "Get notified when employees request leave",
      enabled: true
    },
    {
      id: 2,
      title: "Shift Changes",
      description: "Receive updates about shift schedule changes",
      enabled: true
    },
    {
      id: 3,
      title: "New Announcements",
      description: "Get notified when new announcements are posted",
      enabled: true
    },
    {
      id: 4,
      title: "Employee Applications",
      description: "Receive alerts for NOC and payroll applications",
      enabled: true
    },
    {
      id: 5,
      title: "System Updates",
      description: "Important updates about the People Plus platform",
      enabled: true
    }
  ]);

  const toggleSetting = (id) => {
    setSettings(settings.map(setting => 
      setting.id === id ? { ...setting, enabled: !setting.enabled } : setting
    ));
  };

  return (
    <div className="flex justify-center">
      <div className="bg-white rounded-3xl p-8 shadow-sm w-full max-w-2xl">
        <h3 className="text-gray-800 font-bold mb-6 text-lg">Notifications Settings</h3>
        
        <div className="space-y-6">
          {settings.map((setting) => (
            <div key={setting.id} className="flex items-center justify-between py-2">
              <div>
                <p className="text-gray-800 font-bold">{setting.title}</p>
                <p className="text-sm text-gray-500 mt-0.5">{setting.description}</p>
              </div>
              
              <button 
                onClick={() => toggleSetting(setting.id)}
                className={`w-12 h-6 rounded-full relative transition-colors duration-200 ${setting.enabled ? 'bg-[#9d174d]' : 'bg-gray-200'}`}
              >
                <div className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-all duration-200 ${setting.enabled ? 'left-7' : 'left-1'}`} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
