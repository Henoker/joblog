import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {Error, Landing, Register, Login} from './pages';
import { Stats, AddJob, AllJobs, Profile, SharedLayout } from './pages/dashboard';
import withAuth from './withAuth';


const checkIfUserIsAuthenticated = () => {
  // Implement your actual authentication logic here
  const isAuthenticated = true; // For demonstration purposes, assuming user is authenticated
  return isAuthenticated;
};

function App() {
  const isAuthenticated = checkIfUserIsAuthenticated();
  const ProtectedStats = withAuth(Stats, isAuthenticated);
  const ProtectedAddJob = withAuth(AddJob, isAuthenticated);
  const ProtectedAllJobs = withAuth(AllJobs, isAuthenticated);
  const ProtectedProfile = withAuth(Profile, isAuthenticated);
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<ProtectedStats />} />
        <Route path="add-job" element={<ProtectedAddJob />} />
        <Route path="all-jobs" element={<ProtectedAllJobs />} />
        <Route path="profile" element={<ProtectedProfile />} />
      </Route>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/landing" element={<Landing/>}/>
      <Route path="*" element={<Error/>}/>
    
    </Routes>
    </BrowserRouter>
      
    
  );
}

export default App;
