import React from 'react';
import {useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import Intro from './pages/Intro';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import './App.css';

function AppContent() {
  const location = useLocation(); // внутри Router
  const navigate = useNavigate();

  // const isIntroPage = location.pathname === '/'; // Проверка текущего маршрута
  
  // Показывать Intro при загрузке приложения
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    if (showIntro) {
      // Здесь можно заменить на реальное завершение Intro
      const timer = setTimeout(() => {
        setShowIntro(false);
        // По желанию можно автоматически перейти на нужную страницу
        // navigate('/page1', { replace: true });
      }, 2000); // длительность Intro в миллисекундах
      return () => clearTimeout(timer);
    }
  }, [showIntro, navigate]);

  // Пока показывается Intro — рендерим только Intro
  if (showIntro) {
    return (
      <div className="App">
        <Intro />
      </div>
    );
  }

  // После Intro — обычная навигация
  const isIntroPage = location.pathname === '/';

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
      </Routes>
      {!isIntroPage && (
        <nav>
          <Link to="/">Intro</Link> | {' '}
          <Link to="/page1">Page 1</Link> | {' '}
          <Link to="/page2">Page 2</Link> | {' '}
          <Link to="/page3">Page 3</Link> | {' '}
          <Link to="/page4">Page 4</Link>
        </nav>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;