// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home'; // Ensure the Home component is imported
// import PickArtists from './components/PickArtists'; // Import PickArtists
// import Embed from './components/Embed';
// import Signup from './components/Signup';
// import CookieConsent from './CookieConsent';

// function App() {

//   return (
//     <Router>
//       <Routes>
//         <Route path='/' element={<Signup />} />

//         <Route path='/home' element={<Home />} />
//         <Route path='/artists' element={<PickArtists />} />
//         <Route path='/embed/:playlistId' element={<Embed />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Ensure the Home component is imported
import PickArtists from './components/PickArtists'; // Import PickArtists
import Embed from './components/Embed';
import Signup from './components/Signup';
import CookieConsent from './components/CookieConsent'; // Import the CookieConsent component

function App() {
  const [cookieConsentGiven, setCookieConsentGiven] = useState(false);

  useEffect(() => {
    // Check if the user has already given consent
    if (localStorage.getItem('cookieConsent') === 'true') {
      setCookieConsentGiven(true);
    }
  }, []);

  // Only show the CookieConsent component if consent hasn't been given yet
  const showCookieConsent = !cookieConsentGiven;

  return (
    <Router>
      {showCookieConsent && <CookieConsent />}{' '}
      {/* Show consent banner if consent is not given */}
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/home' element={<Home />} />
        <Route path='/artists' element={<PickArtists />} />
        <Route path='/embed/:playlistId' element={<Embed />} />
      </Routes>
    </Router>
  );
}

export default App;
