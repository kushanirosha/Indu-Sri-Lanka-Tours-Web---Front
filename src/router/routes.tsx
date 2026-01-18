import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Home from '../pages/Home';
import Tours from '../pages/Tours';
import TourDetails from '../pages/TourDetails';
import Destination from '../pages/Destination';
import Visa from '../pages/Visa';
import Offers from '../pages/Offers';
import About from '../pages/About';
import Members from '../pages/Members';
import Contact from '../pages/Contact';
import Cart from '../pages/Cart';
import Privacy from '../pages/Privacy';
import Terms from '../pages/Terms';
import Notifications from '../pages/Notifications';
import Gallery from '../pages/Gallery';

function AppRoutes() {
  return (
    <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/tour/:id" element={<TourDetails />} />
            <Route path="/destination/:id" element={<Destination />} />
            <Route path="/visa" element={<Visa />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/about" element={<About />} />
            <Route path="/members" element={<Members />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        <Footer />
    </Router>
  );
}

export default AppRoutes;
