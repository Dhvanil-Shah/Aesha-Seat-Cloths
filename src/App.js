// import React, { useState } from 'react';
// import './App.css';
// import Navbar from './Components/Navbar';
// import Hero from './Components/Hero';
// import Services from './Components/Services';
// import Footer from './Components/Footer';
// import SeatCoverPage from './Components/SeatCoverPage.js';

// function App() {
//   const [currentPage, setCurrentPage] = useState('home');

//   const handleNavigate = (pageId) => {
//     if (pageId === 'seatCovers') {
//       setCurrentPage('seatCovers');
//       window.scrollTo(0, 0);
//     } else {
//       alert('This feature is coming soon!');
//     }
//   };

//   const goToHome = () => {
//       setCurrentPage('home');
//       window.scrollTo(0, 0);
//   }

//   return (
//     <div>
//       <Navbar />
//       <main>
//         {currentPage === 'home' && (
//           <>
//             <Hero />
//             <Services onNavigate={handleNavigate} />
//           </>
//         )}

//         {currentPage === 'seatCovers' && (
//           <SeatCoverPage onBack={goToHome} />
//         )}
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;
import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';
import SeatCoverPage from './Components/SeatCoverPage.js';
import HomePage from './Components/HomePage.js';
import BodyCoatingPage from './Components/BodyCoatingPage.js'; // Import the new page
import BookingPage from './Components/BookingPage.js';
import FloorMattingPage from './Components/FloorMattingPage.js';
import PageLoader from './Components/PageLoader.js';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [targetSection, setTargetSection] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const loaderTimerRef = useRef(null);

  const triggerLoader = (durationMs = 800) => {
    if (loaderTimerRef.current) {
      clearTimeout(loaderTimerRef.current);
    }
    setIsLoaded(false);
    loaderTimerRef.current = setTimeout(() => {
      setIsLoaded(true);
      loaderTimerRef.current = null;
    }, durationMs);
  };

  const handleNavigate = (pageId) => {
    if (pageId === 'seatCovers') {
      setCurrentPage('seatCovers');
    } else if (pageId === 'bodyCoating') {
      setCurrentPage('bodyCoating');
    } else if (pageId === 'booking') {
      setCurrentPage('booking');
    } else if (pageId === 'floorMatting') {
      setCurrentPage('floorMatting');
    } else {
      alert('This feature is coming soon!');
    }
    window.scrollTo(0, 0); // Scroll to top on any page change
  };

  const goToHome = () => {
      setCurrentPage('home');
      triggerLoader(700);
      window.scrollTo(0, 0);
  }

  const goToHomeServices = () => {
      setCurrentPage('home');
      setTargetSection('services');
  }

  const goToBooking = () => {
      setCurrentPage('booking');
      window.scrollTo(0, 0);
  }

  useEffect(() => {
    if (currentPage === 'home' && targetSection) {
      // Wait for Home to render, then scroll smoothly to the section
      const scrollToTarget = () => {
        const element = document.getElementById(targetSection);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setTargetSection(null);
        }
      };
      // Use both rAF and a timeout for reliability across browsers
      requestAnimationFrame(() => setTimeout(scrollToTarget, 0));
    }
  }, [currentPage, targetSection]);

  // App initial load
  useEffect(() => {
    triggerLoader(800);
    return () => {
      if (loaderTimerRef.current) clearTimeout(loaderTimerRef.current);
    };
  }, []);

  // A helper function to render the correct page
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'seatCovers':
        return <SeatCoverPage onBack={goToHome} />;
      case 'bodyCoating':
        return <BodyCoatingPage onBack={goToHome} />;
      case 'booking':
        return <BookingPage onBack={goToHome} />;
      case 'floorMatting':
        return <FloorMattingPage onBack={goToHome} />;
      case 'home':
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div>
      <PageLoader isDone={isLoaded} />
      <Navbar onNavigateHome={goToHome} onNavigateServices={goToHomeServices} onNavigateBooking={goToBooking} />
      <main>
        {renderCurrentPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
