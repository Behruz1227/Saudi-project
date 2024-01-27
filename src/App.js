
import { Route, Router } from 'react-router-dom';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' element={<Home/>} />
      </Router>

      </div>
  );
}

export default App;
