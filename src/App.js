
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Tickets from './components/home/tickets/Tickets';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/tickets' element={<Tickets/>}/>
      </Routes>

      </div>
  );
}

export default App;
