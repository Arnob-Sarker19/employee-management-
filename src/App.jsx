import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Splash from './components/Splash';
import Login from './components/Login';
import Register from './components/Register';
import Otp from './components/Otp';
import ForgotPassword from './components/ForgotPassword';
import Dashboard from './components/Dashboard';
import Attendance from './components/Attendance';

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
      </Routes>
    </Router>
  );
}

export default App;
