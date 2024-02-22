import Footer from './Components/Global/Footer';
import Navbar from './Components/Global/Navbar';
import Anchor from './Components/Home/Anchor';
import Box from './Components/Home/Box';
import FAQ from './Components/Home/FAQ';
import Featured from './Components/Home/Featured';
import Hero from './Components/Home/Hero';
import PricingTable from './Components/Home/PricingTable';
import Step from './Components/Home/Step';
import Fetch from './Express/Fetch';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <PricingTable />
      <Step />
      <Featured />
      <Anchor />
      <Box />
      <FAQ />
      <Footer />
      <Fetch />
    </div>
  );
}

export default App;