import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';

const SOCKET_URL = 'http://localhost:3001';
const API_URL = 'http://localhost:3001';

function App() {
  const [socket, setSocket] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!currentUser) return;

    // Connect to WebSockets
    const newSocket = io(SOCKET_URL);
    setSocket(newSocket);

    // Fetch initial data
    const fetchInitialData = async () => {
      try {
        const [usersRes, msgsRes] = await Promise.all([
          fetch(`${API_URL}/users`),
          fetch(`${API_URL}/messages`)
        ]);
        const usersData = await usersRes.json();
        const msgsData = await msgsRes.json();
        
        setUsers(usersData.filter(u => u.id !== currentUser.id));
        setMessages(msgsData);
      } catch (error) {
        console.error("Error fetching initial data", error);
      }
    };

    fetchInitialData();

    // Socket Event Listeners
    newSocket.on('receive_message', (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => newSocket.close();
  }, [currentUser]);

  const handleLogin = (user) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    if (socket) socket.close();
    setCurrentUser(null);
    setSocket(null);
  };

  const sendMessage = (text) => {
    if (socket && text.trim() && currentUser) {
      socket.emit('send_message', {
        text,
        senderId: currentUser.id
      });
    }
  };

  if (!currentUser) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="flex h-screen bg-slate-900 overflow-hidden font-sans">
      <div className="flex w-full h-full max-w-[1600px] mx-auto bg-slate-800 shadow-2xl relative">
        <Sidebar 
          users={users} 
          currentUser={currentUser} 
          onLogout={handleLogout} 
        />
        <ChatWindow 
          currentUser={currentUser}
          username={currentUser.username}
          messages={messages}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
}

export default App;
