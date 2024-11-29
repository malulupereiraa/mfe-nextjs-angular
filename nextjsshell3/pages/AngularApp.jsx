import React, { useEffect } from 'react';

const AngularApp = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'http://localhost:4201/remoteEntry.js';
    script.onload = () => {
      // Ensure the Angular app is loaded and rendered.
      window.renderAngularApp && window.renderAngularApp('angular-container');
    };
    document.body.appendChild(script);
  }, []);

  return <div id="angular-container"></div>;
};

export default AngularApp;
