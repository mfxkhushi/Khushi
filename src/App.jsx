import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import First from './pages/FirstPage/First'
import Second from './pages/SecondPage/Second';
import OverView from './pages/OverView/OverView';
import Location from './pages/Location/Location'
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Gallery from './pages/Gallery/Gallery';
import Specs from './pages/Specss/Specs';
// import Outlets from './pages/Outlets/Outlets';
// import Page from './pages/Outlets-Pages/Page'
import Amenities from './pages/Amenities/Amenities';
import Plans from './pages/Plans/Plans'
import WhyGreen from './pages/WhyGreenBuilding/WhyGreen';
import FloorPage from './pages/FloorPage/FloorPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Second />} />
        <Route path="/overview" element={<OverView/>} />
        <Route path="/location" element={<Location/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/specs" element={<Specs/>} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/why-green-building" element={<WhyGreen />} />
        <Route path="/floor-plan/:planType" element={<FloorPage />}/>
        {/* Redirect any unknown route to home */}
        <Route path="*" element={<Second />} />
      </Routes>
    </Router>
  );
}

export default App;
