import DashboardLayout from './DashboardLayout';
import { useState } from 'react';
import { Bell, Settings as SettingsIcon, Building, User, Shield, Palette, Lock } from 'lucide-react';
import CompanyInfoSettings from './settings/CompanyInfoSettings';
import MyProfileSettings from './settings/MyProfileSettings';
import NotificationsSettings from './settings/NotificationsSettings';
import SecuritySettings from './settings/SecuritySettings';
import AppearanceSettings from './settings/AppearanceSettings';
import AccessSettings from './settings/AccessSettings';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('Company Info');

  const tabs = [
      { name: 'Company Info', icon: Building, component: <CompanyInfoSettings /> },
      { name: 'My Profile', icon: User, component: <MyProfileSettings /> },
      { name: 'Notifications', icon: Bell, component: <NotificationsSettings /> },
      { name: 'Security', icon: Shield, component: <SecuritySettings /> },
      { name: 'Appearance', icon: Palette, component: <AppearanceSettings /> },
      { name: 'Access', icon: Lock, component: <AccessSettings /> },
  ];

  return (
    <DashboardLayout title="Settings">
      <div className="p-6 space-y-8 min-h-full">

         {/* Tab Navigation */}
         <div className="flex justify-center mb-6">
             <div className="flex flex-wrap justify-center gap-2">
                 {tabs.map((tab) => {
                     const Icon = tab.icon;
                     return (
                        <button 
                            key={tab.name}
                            onClick={() => setActiveTab(tab.name)}
                            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                                activeTab === tab.name 
                                    ? 'bg-white text-[#9d174d] shadow-md scale-105' 
                                    : 'text-pink-100 hover:text-white hover:bg-white/10'
                            }`}
                        >
                            <Icon size={16} />
                            {tab.name}
                        </button>
                     );
                 })}
             </div>
         </div>

         {/* Content Area */}
         <div className="animate-fade-in">
             {tabs.find(t => t.name === activeTab)?.component}
         </div>

      </div>
    </DashboardLayout>
  );
}
