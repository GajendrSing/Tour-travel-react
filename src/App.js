import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './routes/About'
import Contact from './routes/Contact'
import Service from './routes/Service'
import Home from './routes/Home';
import Hero from './Components/Hero';


function App() {
  return (
    <div className="App">

      <Router>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/service' element={<Service />} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;
