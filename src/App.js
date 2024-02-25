import Fetch from './Express/Fetch';

// REACT ROUTER DOM 
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// COMPONENTS 
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/Login/Login';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/style-quiz' element={<Dashboard />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/login' element={<Login />} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;