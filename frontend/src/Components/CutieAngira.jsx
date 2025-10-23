import React, { useState } from 'react';
import Confetti from 'react-confetti';
import { motion, AnimatePresence } from 'framer-motion';
import './CutieAngira.css';

const CutieAngira = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleYesClick = () => {
    setShowConfetti(true);
    setShowModal(true);
    setButtonClicked(true);
  };

  const handleNoHover = () => {
    // Generate random position within viewport
    const maxX = window.innerWidth - 150; // button width
    const maxY = window.innerHeight - 60; // button height
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    setNoButtonPosition({ x: randomX, y: randomY });
  };

  const handleNoClick = (e) => {
    e.preventDefault();
    handleNoHover();
  };

  return (
    <div className="cutie-angira-container">
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={500}
          gravity={0.3}
        />
      )}

      <motion.div 
        className="content-wrapper"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Animated hearts background */}
        <div className="hearts-background">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="heart"
              initial={{ 
                y: "100vh", 
                x: Math.random() * window.innerWidth,
                opacity: 0.7
              }}
              animate={{ 
                y: "-100vh",
                x: Math.random() * window.innerWidth
              }}
              transition={{
                duration: Math.random() * 5 + 8,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              }}
            >
              ❤️
            </motion.div>
          ))}
        </div>

        <motion.h1 
          className="question-title"
          animate={{ 
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Will you watch a movie with me? 🎬
        </motion.h1>

        <div className="buttons-container">
          <motion.button
            className="yes-button"
            onClick={handleYesClick}
            disabled={buttonClicked}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(255, 105, 180, 0.5)",
                "0 0 40px rgba(255, 105, 180, 0.8)",
                "0 0 20px rgba(255, 105, 180, 0.5)",
              ]
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            Yes! 💕
          </motion.button>

          <motion.button
            className="no-button"
            onMouseEnter={handleNoHover}
            onClick={handleNoClick}
            onTouchStart={handleNoClick}
            style={{
              position: 'absolute',
              left: `${noButtonPosition.x}px`,
              top: `${noButtonPosition.y}px`,
            }}
            whileHover={{ scale: 1.05 }}
            animate={{
              rotate: [0, -5, 5, -5, 0],
            }}
            transition={{
              rotate: {
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 1
              }
            }}
          >
            No 😢
          </motion.button>
        </div>
      </motion.div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ type: "spring", duration: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 10, 0],
                }}
                transition={{
                  duration: 0.5,
                  repeat: 3,
                }}
              >
                <h2>🎉 Yay! 🎉</h2>
              </motion.div>
              <p className="modal-message">
                Great, text Nisarg to decide on a time. 📱💕
              </p>
              <motion.button
                className="close-button"
                onClick={() => setShowModal(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CutieAngira;
