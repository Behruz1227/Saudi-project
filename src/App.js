import logo from './logo.svg';
import './App.css';
import { Route, Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' />
      </Router>

      </div>
  );
}

export default App;
