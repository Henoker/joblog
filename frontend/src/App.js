import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {Dashboard, Error, Landing, Register, Login} from './pages';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/landing" element={<Landing/>}/>
      <Route path="*" element={<Error/>}/>
    
    </Routes>
    </BrowserRouter>
      
    
  );
}

export default App;
