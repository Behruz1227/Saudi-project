
import { Route, Routes } from 'react-router-dom';
// import Home from './components/home/Home';
import About from './components/about/About';
import Navbar from './components/navbar';
import Tickets from './components/ticekts/Tickets';

function App() {
  return (
    
      <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
        <Route path='/about' element={<About/>}/>
        <Route path='/Navbar' element={<Navbar/>}/>
        <Route path='/tickets' element={<Tickets/>}/>
      </Routes>

      
  );
}

export default App;
