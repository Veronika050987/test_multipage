import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Intro.css';
import intro from '../assets/intro.png';

function Intro() {
  const navigate = useNavigate();

  useEffect(() => {
    // Automatically navigate to Page 1 after 3 seconds
    const timer = setTimeout(() => {
      navigate('/page1');
    }, 3000); // 3000 milliseconds = 3 seconds

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [navigate]); // navigate is a stable function, so it's safe to include in dependencies

  return (
    <div className="intro-container">
      {/* Replace 'your-image.jpg' with the actual path to your image */}
      <img src={intro} alt="Welcome" className="intro-image" />
      <p>Loading your content...</p>
    </div>
  );
}

export default Intro;