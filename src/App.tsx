import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Curriculum from './pages/Curriculum';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Contacts from './pages/Contacts';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="chi-siamo" element={<About />} />
          <Route path="servizi" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="curriculum" element={<Curriculum />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="contatti" element={<Contacts />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
