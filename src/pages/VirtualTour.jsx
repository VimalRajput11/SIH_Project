import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, RotateCcw, Maximize, Languages, Info } from 'lucide-react';

const VirtualTour = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('english');
  const [showInfo, setShowInfo] = useState(false);

  const languages = [
    { code: 'english', name: 'English', flag: '🇺🇸' },
    { code: 'nepali', name: 'Nepali', flag: '🇳🇵' },
    { code: 'hindi', name: 'Hindi', flag: '🇮🇳' },
    { code: 'bhutia', name: 'Bhutia', flag: '🏔️' }
  ];

  const tourPoints = [
    {
      id: 1,
      title: "Main Prayer Hall",
      description: "The heart of spiritual activities with ancient Buddhist murals and golden Buddha statue.",
      position: { x: 25, y: 30 },
      audioLength: "3:45"
    },
    {
      id: 2,
      title: "Prayer Wheels",
      description: "Traditional spinning wheels inscribed with sacred mantras for spiritual merit.",
      position: { x: 70, y: 45 },
      audioLength: "2:20"
    },
    {
      id: 3,
      title: "Monastery Garden",
      description: "Peaceful meditation garden with medicinal plants and mountain views.",
      position: { x: 40, y: 80 },
      audioLength: "4:10"
    },
    {
      id: 4,
      title: "Bell Tower",
      description: "Ancient bell used for daily prayers and special ceremonies.",
      position: { x: 80, y: 20 },
      audioLength: "1:55"
    }
  ];

  return (
    <motion.div 
      className="min-h-screen pt-16 bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Virtual Tour Viewer */}
      <div className="relative w-full h-screen">
        {/* 360° Background Simulation */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/161109/buddhist-temple-monk-walking-161109.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        </div>

        {/* Tour Control Panel */}
        <motion.div 
          className="absolute top-24 left-6 bg-black/80 backdrop-blur-md rounded-2xl p-6 border border-white/20 max-w-sm"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-white mb-4 font-serif">Rumtek Monastery</h2>
          
          {/* Audio Controls */}
          <div className="flex items-center justify-between mb-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-12 h-12 bg-saffron rounded-full flex items-center justify-center text-deep-blue hover:bg-gold transition-colors"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
            </motion.button>

            <div className="flex items-center space-x-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMuted(!isMuted)}
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <RotateCcw className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <Maximize className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          {/* Language Selection */}
          <div className="mb-6">
            <div className="flex items-center mb-3">
              <Languages className="w-5 h-5 text-saffron mr-2" />
              <span className="text-white font-semibold">Audio Guide Language</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {languages.map((lang) => (
                <motion.button
                  key={lang.code}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedLanguage(lang.code)}
                  className={`p-3 rounded-lg border transition-all duration-300 ${
                    selectedLanguage === lang.code
                      ? 'bg-saffron text-deep-blue border-saffron font-semibold'
                      : 'bg-white/10 text-white border-white/20 hover:border-saffron'
                  }`}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-lg">{lang.flag}</span>
                    <span className="text-sm">{lang.name}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Current Location Info */}
          <div className="bg-white/10 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-saffron font-semibold">Main Prayer Hall</h4>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowInfo(!showInfo)}
                className="text-white hover:text-saffron transition-colors"
              >
                <Info className="w-4 h-4" />
              </motion.button>
            </div>
            <p className="text-white/80 text-sm">
              Experience the sacred atmosphere of the main prayer hall...
            </p>
            {showInfo && (
              <motion.div 
                className="mt-3 pt-3 border-t border-white/20"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
              >
                <p className="text-white/70 text-xs">
                  Audio Duration: 3:45 min | Historical Period: 18th Century
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Interactive Hotspots */}
        {tourPoints.map((point, index) => (
          <motion.div
            key={point.id}
            className="absolute cursor-pointer group"
            style={{ left: `${point.position.x}%`, top: `${point.position.y}%` }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.3, duration: 0.5 }}
            whileHover={{ scale: 1.2 }}
          >
            {/* Hotspot Indicator */}
            <div className="relative">
              <motion.div
                className="w-6 h-6 bg-saffron rounded-full flex items-center justify-center text-deep-blue font-bold shadow-lg border-2 border-white"
                animate={{
                  scale: [1, 1.3, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(255, 153, 51, 0.7)",
                    "0 0 0 10px rgba(255, 153, 51, 0)",
                    "0 0 0 0 rgba(255, 153, 51, 0)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {point.id}
              </motion.div>

              {/* Tooltip */}
              <motion.div 
                className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                initial={{ y: 10 }}
                whileHover={{ y: 0 }}
              >
                <div className="bg-black/90 backdrop-blur-sm text-white p-4 rounded-xl border border-white/20 min-w-64 shadow-xl">
                  <h4 className="font-semibold text-saffron mb-2">{point.title}</h4>
                  <p className="text-sm text-white/90 mb-3">{point.description}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white/70">Audio: {point.audioLength}</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-saffron text-deep-blue px-3 py-1 rounded-full font-semibold"
                    >
                      Listen
                    </motion.button>
                  </div>
                </div>
                {/* Arrow */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                  <div className="border-8 border-transparent border-t-black/90"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}

        {/* Navigation Instructions */}
        <motion.div 
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="text-white text-center">
            <span className="text-saffron font-semibold">Click and drag</span> to look around • 
            <span className="text-saffron font-semibold"> Click hotspots</span> to explore areas
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div 
          className="absolute top-6 left-1/2 transform -translate-x-1/2 w-80 bg-black/60 backdrop-blur-md rounded-full px-6 py-3 border border-white/20"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-between text-white text-sm mb-2">
            <span>Virtual Tour Progress</span>
            <span>2 of 8 locations</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <motion.div 
              className="bg-gradient-to-r from-saffron to-gold h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '25%' }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
        </motion.div>
      </div>

      {/* Monastery Information Sidebar (Hidden by default) */}
      <motion.div 
        className="fixed right-6 top-32 bottom-6 w-80 bg-gradient-to-b from-deep-blue/90 to-maroon/90 backdrop-blur-md rounded-2xl p-6 border border-white/20 overflow-y-auto"
        initial={{ x: 400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h3 className="text-xl font-bold text-white mb-4 font-serif">About This Monastery</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-saffron font-semibold mb-2">History</h4>
            <p className="text-white/80 text-sm leading-relaxed">
              Built in 1966, Rumtek Monastery is one of the largest monasteries in Sikkim and serves as the seat of the Gyalwang Karmapa.
            </p>
          </div>

          <div>
            <h4 className="text-saffron font-semibold mb-2">Architecture</h4>
            <p className="text-white/80 text-sm leading-relaxed">
              The monastery showcases traditional Tibetan architecture with intricate woodwork, colorful murals, and golden stupas.
            </p>
          </div>

          <div>
            <h4 className="text-saffron font-semibold mb-2">Visiting Hours</h4>
            <p className="text-white/80 text-sm">
              Daily: 6:00 AM - 6:00 PM<br />
              Special ceremonies: Check calendar
            </p>
          </div>

          <div>
            <h4 className="text-saffron font-semibold mb-2">Quick Facts</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-white/70">Altitude:</span>
                <span className="text-white">5,800 ft</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Founded:</span>
                <span className="text-white">1966</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Monks:</span>
                <span className="text-white">300+</span>
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full floating-btn justify-center"
          >
            Plan Your Visit
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default VirtualTour;