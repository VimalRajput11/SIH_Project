import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Camera, Calendar, Archive, Star, Users, Globe } from 'lucide-react';

const LandingPage = () => {
  const [currentEvent, setCurrentEvent] = useState(0);
  
  const upcomingEvents = [
    "🎭 Losar Festival - February 2025",
    "🏔️ Buddha Purnima Celebrations - May 2025",
    "🎪 Hemis Festival - July 2025",
    "🎨 Monastery Art Exhibition - September 2025"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEvent((prev) => (prev + 1) % upcomingEvents.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const heroVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 30px rgba(255, 153, 51, 0.3)"
    }
  };

  const flagVariants = {
    initial: { rotate: -5, y: 0 },
    animate: { 
      rotate: [5, -5, 5],
      y: [0, -10, 0],
      transition: { 
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Mandala Background */}
      <div className="mandala-bg"></div>
      
      {/* Prayer Flags */}
      <motion.div 
        className="prayer-flags"
        variants={flagVariants}
        initial="initial"
        animate="animate"
      />

      {/* Hero Background Video/360 Simulation */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-deep-blue/30 via-maroon/40 to-black/50">
          <motion.div 
            className="w-full h-full"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed'
            }}
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        
        {/* Logo and Title */}
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold text-white glow-text mb-6"
            animate={{
              textShadow: [
                "0 0 10px rgba(255, 153, 51, 0.5)",
                "0 0 20px rgba(255, 153, 51, 0.8)",
                "0 0 10px rgba(255, 153, 51, 0.5)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Monastery360
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-light-gold max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Journey through Sikkim's sacred monasteries in immersive virtual reality. 
            Discover ancient wisdom, architectural marvels, and spiritual heritage.
          </motion.p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Link to="/virtual-tour">
            <motion.button
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              className="floating-btn flex items-center space-x-3 text-lg"
            >
              <Camera className="w-6 h-6" />
              <span>Explore Virtual Tours</span>
            </motion.button>
          </Link>

          <Link to="/calendar">
            <motion.button
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              transition={{ delay: 0.2 }}
              className="floating-btn flex items-center space-x-3 text-lg"
            >
              <Calendar className="w-6 h-6" />
              <span>Discover Events</span>
            </motion.button>
          </Link>

          <Link to="/archives">
            <motion.button
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              transition={{ delay: 0.4 }}
              className="floating-btn flex items-center space-x-3 text-lg"
            >
              <Archive className="w-6 h-6" />
              <span>Digital Archives</span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Scrolling Events Marquee */}
        <motion.div 
          className="w-full max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-full py-4 px-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.p 
            key={currentEvent}
            className="text-lg text-center text-saffron font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {upcomingEvents[currentEvent]}
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <div className="monastery-card text-center">
            <Globe className="w-12 h-12 text-saffron mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gold mb-2">50+</h3>
            <p className="text-light-gold">Sacred Monasteries</p>
          </div>
          <div className="monastery-card text-center">
            <Users className="w-12 h-12 text-saffron mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gold mb-2">10K+</h3>
            <p className="text-light-gold">Virtual Visitors</p>
          </div>
          <div className="monastery-card text-center">
            <Star className="w-12 h-12 text-saffron mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gold mb-2">4.9/5</h3>
            <p className="text-light-gold">User Rating</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-saffron rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-saffron rounded-full mt-2"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default LandingPage;