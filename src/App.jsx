import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Splash from './components/Splash';
import Login from './components/Login';
import Register from './components/Register';
import Otp from './components/Otp';
import ForgotPassword from './components/ForgotPassword';
import Dashboard from './components/Dashboard';
import Attendance from './components/Attendance';
import Employees from './components/Employees';
import ShiftScheduling from './components/ShiftScheduling';
import LeaveManagement from './components/LeaveManagement';
import NocPayroll from './components/NocPayroll';
import Announcements from './components/Announcements';
import DataExport from './components/DataExport';
import Billing from './components/Billing';
import Settings from './components/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/schedule" element={<ShiftScheduling />} />
        <Route path="/leaves" element={<LeaveManagement />} />
        <Route path="/payroll" element={<NocPayroll />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/export" element={<DataExport />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
