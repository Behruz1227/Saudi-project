import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Navbar from './components/navbar';
import Tickets from './components/home/tickets/Tickets';
import Routerr from './components/Route/routerr';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/navbar' element={<Navbar />} />
      <Route path='/routerr' element={<Routerr />} />
      <Route path='/tickets' element={<Tickets />} />
    </Routes>
  );
}

export default App;
