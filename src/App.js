import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Navbar from './components/navbar';
import Tickets from './components/ticekts/Tickets';
import Routerr from './components/Route/routerr';
import QuestionsOne from './components/question/QuestionsOne';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/navbar' element={<Navbar />} />
      <Route path='/routerr' element={<Routerr />} />
      <Route path='/tickets' element={<Tickets />} />
      <Route path='/question' element={<QuestionsOne/>}/>
    </Routes>
  );
}

export default App;
