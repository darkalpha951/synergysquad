import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import VoiceLink from './components/VoiceLink';
import Onboarding from './components/Onboarding';

function App() {
  useEffect(() => {
    // Update page title
    document.title = "UpajTransit - Smart Agri Transport";

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = (anchor.getAttribute('href'));
        if (!targetId) return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80, // Offset for fixed header
            behavior: 'smooth'
          });
        }
      });
    });

    // Optional: Add scroll reveal animations
    const revealElements = document.querySelectorAll('.container');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(element => {
      element.classList.add('transition-all', 'duration-700', 'transform', 'opacity-0', 'translate-y-10');
      observer.observe(element);
    });

    return () => {
      // Cleanup intersection observer
      revealElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);


  return (
    <div className="font-sans antialiased">
      <Navbar />
        <Router>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/signup' element={<Signup />}></Route>
                <Route path='/dashboard' element={
                    <div className='p-25'>
                        <Dashboard />    
                    </div>
                }
                ></Route>
                <Route path='/voicelink' element={<VoiceLink />}></Route>
                <Route path='/onboarding' element={<Onboarding />}></Route>
            </Routes>
        </Router>
    </div>
  );


}

export default App;