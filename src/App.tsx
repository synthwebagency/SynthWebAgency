import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import WhoWeAre from './pages/WhoWeAre';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Pricing from './pages/Pricing';
import HowItWorks from './pages/HowItWorks';
import Testimonials from './pages/Testimonials';
import FAQ from './pages/FAQ';
import Terms from './pages/Terms';
import SLA from './pages/SLA';
import Privacy from './pages/Privacy';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="who-we-are" element={<WhoWeAre />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="terms" element={<Terms />} />
          <Route path="sla" element={<SLA />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}
