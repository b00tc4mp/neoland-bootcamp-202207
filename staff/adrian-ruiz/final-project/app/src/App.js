import Dashboard from './pages/Dashboard'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage';

function App() {


  return (
    <Routes>
       <Route path='/*' element={<Dashboard />} />
       <Route path='/login' element={<LoginPage />} />
    </Routes>
    
  );
}

export default App;
