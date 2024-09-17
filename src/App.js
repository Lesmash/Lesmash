import './CSS/App.css';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import Login from './Components/login'
import Register from './Components/register'
import UserDashboard from './Components/UserDashboard'
import AdminPanel from './Components/AdminPanel'
import Profile from './Components/Profile'
import { UserProvider } from './Components/UserContext';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <div className='App'>
          <div className='auth-wrapper'>
            <div className='auth-inner'>
              <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/dashboard' element={<UserDashboard />} />
                <Route path='/admin_panel' element={<AdminPanel />} />
                <Route path='/profile' element={<Profile />} />
              </Routes>
            </div>
          </div>
        </div>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;