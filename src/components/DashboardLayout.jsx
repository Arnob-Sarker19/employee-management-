import Sidebar from './Sidebar';

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-[#fdf2f8]">
        <Sidebar />
        <main className="flex-1 overflow-y-auto w-full">
            {children}
        </main>
    </div>
  );
}
