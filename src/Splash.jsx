import React, { useEffect } from 'react';

const SplashScreen = ({ onFinish }) => {
  // Display the splash screen for 5 seconds
  useEffect(() => {
    const timer = setTimeout(onFinish, 2500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  // Inline styles for the splash screen container
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'black', // Updated to black gradient background
    color: 'white', // Corrected typo ('whit' to 'white')
    textAlign: 'center',
    position: 'relative',
    animation: 'fadeIn 3s ease-out forwards, whiteFlash 1s ease-out forwards', // Added whiteFlash animation
  };

  const whiteFlashAnimation = `
  @keyframes whiteFlash {
    0% { opacity: 0; background-color: transparent; }
    50% { opacity: 1; background-color: white; }
    10% { opacity: 0; background-color: transparent; }
  }
`;

  // Text style with a glowing effect and smoother font
  const textStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    letterSpacing: '2px',
    textShadow: '0 0 10px rgba(255, 255, 255, 0.7)', // Glowing text effect
    animation: 'fadeInText 2s ease-out forwards',
  };

  // Red line styles (top-to-bottom and bottom-to-top)
  const lineStyle = {
    position: 'absolute',
    backgroundColor: 'red',
    height: '10px',
    width: '50px',
    animation: 'lineAnimation 2s ease-out forwards',
  };

  // Positioning for the red lines (top-to-bottom and bottom-to-top)
  const topToBottomLineStyle = {
    ...lineStyle,
    top: '0', // Start at the top
    left: '70%', // Shift to the right side
    transform: 'translateX(-50%)', // Align exactly in the center
  };

  const topToBottomLineStyleTwo = {
    ...lineStyle,
    top: '15px', // Create a smaller gap of 15px between the lines
    left: '70%', // Same right side
    transform: 'translateX(-50%)',
  };

  const bottomToTopLineStyle = {
    ...lineStyle,
    bottom: '0', // Start at the bottom
    left: '30%', // Move towards the left side
    transform: 'translateX(-50%)', // Align exactly in the center
  };

  const bottomToTopLineStyleTwo = {
    ...lineStyle,
    bottom: '20px', // Create a smaller gap of 15px between the lines
    left: '30%', // Same left side
    transform: 'translateX(-50%)',
  };

  // Keyframe animations for fading, bouncing, zooming, and the red lines
  const fadeInAnimation = `
    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
  `;
  
  const fadeInTextAnimation = `
    @keyframes fadeInText {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
  `;

  const bounceZoomAnimation = `
    @keyframes bounceZoom {
      0% { transform: translateY(0) scale(1); }
      50% { transform: translateY(-20px) scale(1.1); }
      100% { transform: translateY(0) scale(1); }
    }
  `;

  const lineAnimationTopToBottom = `
    @keyframes lineAnimationTopToBottom {
      0% { height: 0; }
      100% { height: 200px; } /* The red line grows downwards */
    }
  `;

  const lineAnimationBottomToTop = `
    @keyframes lineAnimationBottomToTop {
      0% { height: 0; }
      100% { height: 200px; } /* The red line grows upwards */
    }
  `;

  // Inject keyframe animations into the document head
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(fadeInAnimation, styleSheet.cssRules.length);
  styleSheet.insertRule(fadeInTextAnimation, styleSheet.cssRules.length);
  styleSheet.insertRule(bounceZoomAnimation, styleSheet.cssRules.length);
  styleSheet.insertRule(lineAnimationTopToBottom, styleSheet.cssRules.length);
  styleSheet.insertRule(lineAnimationBottomToTop, styleSheet.cssRules.length);

  return (
    <div style={containerStyle}>
      <h1 style={textStyle}>Welcome to FixNet</h1>
   
      {/* Red lines animation */}
      <div style={{...topToBottomLineStyle, animation: 'lineAnimationTopToBottom 2s ease-out forwards'}}></div>
      <div style={{...topToBottomLineStyleTwo, animation: 'lineAnimationTopToBottom 2s ease-out forwards'}}></div>
      <div style={{...bottomToTopLineStyle, animation: 'lineAnimationBottomToTop 2s ease-out forwards'}}></div>
      <div style={{...bottomToTopLineStyleTwo, animation: 'lineAnimationBottomToTop 2s ease-out forwards'}}></div>
    </div>
  );
};

export default SplashScreen;
