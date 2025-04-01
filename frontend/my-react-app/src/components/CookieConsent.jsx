import React, { useState } from 'react';

const CookieConsent = () => {
  const [isConsentGiven, setIsConsentGiven] = useState(false);

  // Handle when the user accepts the cookie policy
  const handleAccept = () => {
    setIsConsentGiven(true);
    localStorage.setItem('cookieConsent', 'true');
  };

  // Check if the user has already given consent
  React.useEffect(() => {
    if (localStorage.getItem('cookieConsent') === 'true') {
      setIsConsentGiven(true);
    }
  }, []);

  // If consent is given, don't show the banner
  if (isConsentGiven) return null;

  return (
    <div className='cookie-consent-banner'>
      <div className='content'>
        <p>
          We use cookies to enhance your experience on our app. By continuing to
          use this app, you consent to our use of cookies. For more details,
          check our <a href='/privacy-policy'>Privacy Policy</a> and{' '}
          <a href='/cookie-policy'>Cookie Policy</a>.
        </p>
        <button onClick={handleAccept}>I Accept</button>
      </div>
    </div>
  );
};

export default CookieConsent;
