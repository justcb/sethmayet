import React from 'react';
import '../assets/css/SplashScreen.css';

const SplashScreen = () => {

  return (
    <div className="lds-ring">
      <div></div>
      <div></div>
        <img src="logo512.png"></img>
      <div></div>
      <div></div>
    </div>
  );
};

export default SplashScreen;
