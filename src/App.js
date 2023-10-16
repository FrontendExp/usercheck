import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Reg from './Components/Registration';
import Log from './Components/Login';
import Home from './Components/Homepage';
import './App.css';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Reg />} />
          <Route path='/Login' element={<Log />} />
          <Route path='/Homepage' element={<Home />} />


        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
