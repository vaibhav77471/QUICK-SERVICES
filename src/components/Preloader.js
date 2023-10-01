import React from 'react';

const Preloader = () => {
  return (
    <div className="preloader-container">
      <style>
        {`
          .preloader-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: #111;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
          }

          .preloader {
            display: flex;
            align-items: center;
          }

          .letter {
            font-size: 40px;
            font-weight: bold;
            color: #ff6b6b;
            margin: 0 10px;
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 1s forwards;
          }

          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes rotate {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
      <div className="preloader">
        <div className="letter" style={{ animationDelay: '0.1s' }}>Q</div>
        <div className="letter" style={{ animationDelay: '0.2s' }}>u</div>
        <div className="letter" style={{ animationDelay: '0.3s' }}>i</div>
        <div className="letter" style={{ animationDelay: '0.4s' }}>c</div>
        <div className="letter" style={{ animationDelay: '0.5s' }}>k</div>
        <div className="letter" style={{ animationDelay: '0.6s' }}>&nbsp;</div>
        <div className="letter" style={{ animationDelay: '0.7s' }}>S</div>
        <div className="letter" style={{ animationDelay: '0.8s' }}>e</div>
        <div className="letter" style={{ animationDelay: '0.9s' }}>r</div>
        <div className="letter" style={{ animationDelay: '1s' }}>v</div>
        <div className="letter" style={{ animationDelay: '1.1s' }}>i</div>
        <div className="letter" style={{ animationDelay: '1.2s' }}>c</div>
        <div className="letter" style={{ animationDelay: '1.3s' }}>e</div>
      </div>
    </div>
  );
};

export default Preloader;
