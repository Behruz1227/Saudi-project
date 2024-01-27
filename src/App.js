
import { Route, Routes } from 'react-router-dom';
// import Home from './components/home/Home';
import About from './components/about/About';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="container">
      <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
        <Route path='/about' element={<About/>}/>
        <Route path='/Navbar' element={<Navbar/>}/>
      </Routes>

      </div>
  );
}

export default App;
