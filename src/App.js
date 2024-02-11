import Footer from './Components/Global/Footer';
import Navbar from './Components/Global/Navbar';
import Anchor from './Components/Home/Anchor';
import Box from './Components/Home/Box';
import FAQ from './Components/Home/FAQ';
import Featured from './Components/Home/Featured';
import Hero from './Components/Home/Hero';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Featured />
      <Anchor />
      <Box />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;