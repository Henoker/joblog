import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {Error, Landing, Register, Login} from './pages';
import { Stats, AddJob, AllJobs, Profile, SharedLayout } from './pages/dashboard';





function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Stats/>}/>
        <Route path='add-job' element={<AddJob/>}/>
        <Route path='all-jobs' element={<AllJobs/>}/>
        <Route path='profile' element={<Profile/>}/>
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
