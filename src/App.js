import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Tickets from './components/ticekts/Tickets';
import Routerr from './components/Route/routerr';
import Contactus from './components/contact/contactUs';
import QuestionsOne from './components/question/QuestionsOne';
import Navbars from './components/navbar/Navbars';
import Location from './components/location/Location';
import { useEffect } from 'react';
import PrivacyPolicy from './components/footer-pages/privacy-policy';
import TermsAndConditions from './components/footer-pages/terms-and-conditions';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbars />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/plan' element={<Location />} />
        <Route path='/routes' element={<Routerr />} />
        <Route path='/contact' element={<Contactus />} />
        <Route path='/tickets' element={<Tickets />} />
        <Route path='/question' element={<QuestionsOne />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/terms-and-conditions' element={<TermsAndConditions/>}/>
      </Routes>
    </>
  );
}

export default App;
