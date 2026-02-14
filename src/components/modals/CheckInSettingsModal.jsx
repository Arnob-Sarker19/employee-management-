import { X, QrCode, Wifi, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export default function CheckInSettingsModal({ isOpen, onClose }) {
  const [settings, setSettings] = useState({
      qr: true,
      nfc: true,
      geo: true,
      autoCheckout: true
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="p-6 pb-4">
           <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold text-gray-800">Check-In Settings</h2>
                <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
                    <X size={20} />
                </button>
           </div>
           <p className="text-sm text-gray-500">
             Configure the check-in methods available for your employees. Enable or disable specific methods based on your organization's needs.
           </p>
        </div>

        {/* Options */}
        <div className="p-6 pt-0 space-y-4">
            
            <SettingItem 
                icon={QrCode} 
                title="QR Code Check-In" 
                desc="Employees scan QR code to check in/out" 
                enabled={settings.qr}
                onToggle={() => setSettings({...settings, qr: !settings.qr})}
            />

            <SettingItem 
                icon={Wifi} 
                title="NFC Card Check-In" 
                desc="Tap NFC cards on readers for attendance" 
                enabled={settings.nfc}
                onToggle={() => setSettings({...settings, nfc: !settings.nfc})}
            />

            <SettingItem 
                icon={MapPin} 
                title="Geolocation Check-In" 
                desc="Location-based check-in via mobile app" 
                enabled={settings.geo}
                onToggle={() => setSettings({...settings, geo: !settings.geo})}
            />

            <div className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-pink-100 rounded-xl text-pink-600">
                        <Clock size={24} />
                    </div>
                    <div>
                        <h3 className="font-medium text-gray-800">Auto check-out</h3>
                        <p className="text-sm text-gray-500">Auto check-out after</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1 text-sm font-medium text-gray-700 flex items-center gap-2">
                        8:00 PM
                        <Clock size={14} className="text-pink-600" />
                    </div>
                    <Switch enabled={settings.autoCheckout} onToggle={() => setSettings({...settings, autoCheckout: !settings.autoCheckout})} />
                </div>
            </div>

        </div>

      </div>
    </div>
  );
}

function SettingItem({ icon: Icon, title, desc, enabled, onToggle }) {
    return (
        <div className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-4">
                <div className="p-3 bg-pink-100 rounded-xl text-pink-600">
                    <Icon size={24} />
                </div>
                <div>
                    <h3 className="font-medium text-gray-800">{title}</h3>
                    <p className="text-sm text-gray-500">{desc}</p>
                </div>
            </div>
            <Switch enabled={enabled} onToggle={onToggle} />
        </div>
    );
}

function Switch({ enabled, onToggle }) {
    return (
        <button 
            onClick={onToggle}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 ${enabled ? 'bg-[#9d174d]' : 'bg-gray-200'}`}
        >
            <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${enabled ? 'translate-x-6' : 'translate-x-1'}`}
            />
        </button>
    );
}
