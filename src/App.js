import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
        </Routes>
        <nav>
          <Link to="/">Page 1</Link> | {' '}
          <Link to="/page2">Page 2</Link> | {' '}
          <Link to="/page3">Page 3</Link> | {' '}
          <Link to="/page4">Page 4</Link>
        </nav>
      </div>
    </Router>
  );
}

export default App;