import Fetch from './Express/Fetch';

// REACT ROUTER DOM 
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// COMPONENTS 
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import Checkout from './Components/Checkout/Checkout';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/style-quiz' element={<Dashboard />} />
          <Route path='/checkout' element={<Checkout />} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;