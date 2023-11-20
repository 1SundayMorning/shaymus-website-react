import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Layout from './components/Layout'
import Home from './components/Home';
// import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/shaymus-website-react" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* {
        <div>
          <Home />
        </div>
      } */}
    </Router>
  )
}

export default App
