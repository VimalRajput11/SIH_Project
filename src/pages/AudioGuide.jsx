import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, SkipForward, SkipBack, Volume2, Download, MapPin, Navigation, Wifi, WifiOff } from 'lucide-react';

const AudioGuide = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isOffline, setIsOffline] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('english');

  const audioTracks = [
    {
      id: 1,
      title: "Welcome to Rumtek Monastery",
      location: "Main Entrance",
      duration: "2:45",
      description: "Introduction to the monastery's history and significance in Sikkim's Buddhist heritage.",
      monastery: "Rumtek",
      coordinates: { lat: 27.3389, lng: 88.6065 },
      isDownloaded: true
    },
    {
      id: 2,
      title: "The Golden Stupa",
      location: "Central Courtyard",
      duration: "4:20",
      description: "Detailed explanation of the golden stupa's architectural features and spiritual symbolism.",
      monastery: "Rumtek",
      coordinates: { lat: 27.3390, lng: 88.6066 },
      isDownloaded: true
    },
    {
      id: 3,
      title: "Prayer Hall Sacred Murals",
      location: "Main Prayer Hall",
      duration: "6:15",
      description: "Explore the ancient murals depicting Buddhist teachings and Tibetan artistic traditions.",
      monastery: "Rumtek",
      coordinates: { lat: 27.3388, lng: 88.6067 },
      isDownloaded: false
    },
    {
      id: 4,
      title: "Meditation Garden",
      location: "Monastery Gardens",
      duration: "3:30",
      description: "Peaceful narration about the medicinal plants and meditation practices in the garden.",
      monastery: "Rumtek",
      coordinates: { lat: 27.3387, lng: 88.6064 },
      isDownloaded: true
    },
    {
      id: 5,
      title: "Bell Tower Ceremonies",
      location: "Bell Tower",
      duration: "2:55",
      description: "Learn about the daily prayer schedules and the significance of monastery bells.",
      monastery: "Rumtek",
      coordinates: { lat: 27.3391, lng: 88.6068 },
      isDownloaded: false
    }
  ];

  const languages = [
    { code: 'english', name: 'English', flag: '🇺🇸' },
    { code: 'nepali', name: 'Nepali', flag: '🇳🇵' },
    { code: 'hindi', name: 'Hindi', flag: '🇮🇳' },
    { code: 'bhutia', name: 'Bhutia', flag: '🏔️' }
  ];

  // Simulate progress
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(prev => (prev >= 100 ? 0 : prev + 1));
      }, 200);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const playPause = () => {
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentTrack(prev => (prev + 1) % audioTracks.length);
    setProgress(0);
  };

  const prevTrack = () => {
    setCurrentTrack(prev => (prev - 1 + audioTracks.length) % audioTracks.length);
    setProgress(0);
  };

  const currentAudio = audioTracks[currentTrack];

  return (
    <motion.div 
      className="min-h-screen pt-24 pb-12 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="mandala-bg"></div>
      
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 glow-text">
            Smart Audio Guide
          </h1>
          <p className="text-xl text-light-gold max-w-3xl mx-auto">
            GPS-enabled audio narration that automatically highlights your current location 
            with multi-language support and offline access.
          </p>
        </motion.div>

        {/* Status Bar */}
        <motion.div 
          className="bg-gradient-to-r from-deep-blue/20 to-maroon/20 backdrop-blur-md rounded-2xl p-4 mb-8 border border-white/20"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-green-400">
                <Navigation className="w-5 h-5 mr-2" />
                <span className="text-sm font-semibold">GPS Active</span>
              </div>
              <div className={`flex items-center ${isOffline ? 'text-orange-400' : 'text-green-400'}`}>
                {isOffline ? <WifiOff className="w-5 h-5 mr-2" /> : <Wifi className="w-5 h-5 mr-2" />}
                <span className="text-sm font-semibold">{isOffline ? 'Offline Mode' : 'Online'}</span>
              </div>
            </div>
            
            <motion.button
              onClick={() => setIsOffline(!isOffline)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-saffron text-deep-blue rounded-full text-sm font-semibold hover:bg-gold transition-colors"
            >
              Toggle Offline
            </motion.button>
          </div>
        </motion.div>

        {/* Main Player */}
        <motion.div 
          className="bg-gradient-to-br from-deep-blue/40 to-maroon/40 backdrop-blur-lg rounded-3xl p-8 mb-8 border border-white/20 shadow-2xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Current Track Info */}
          <div className="text-center mb-8">
            <motion.h2 
              key={currentTrack}
              className="text-3xl font-bold text-white mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {currentAudio.title}
            </motion.h2>
            
            <div className="flex items-center justify-center space-x-6 text-light-gold mb-4">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{currentAudio.location}</span>
              </div>
              <div className="flex items-center">
                <span>Duration: {currentAudio.duration}</span>
              </div>
            </div>

            <p className="text-white/80 max-w-2xl mx-auto leading-relaxed">
              {currentAudio.description}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="w-full bg-white/20 rounded-full h-2 mb-4">
              <motion.div 
                className="bg-gradient-to-r from-saffron to-gold h-2 rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>
            <div className="flex justify-between text-white/60 text-sm">
              <span>{Math.floor((progress / 100) * 4.2)}:{Math.floor(((progress / 100) * 4.2 % 1) * 60).toString().padStart(2, '0')}</span>
              <span>{currentAudio.duration}</span>
            </div>
          </div>

          {/* Player Controls */}
          <div className="flex items-center justify-center space-x-6">
            <motion.button
              onClick={prevTrack}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <SkipBack className="w-6 h-6" />
            </motion.button>

            <motion.button
              onClick={playPause}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-16 h-16 bg-saffron rounded-full flex items-center justify-center text-deep-blue hover:bg-gold transition-colors shadow-lg"
            >
              {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
            </motion.button>

            <motion.button
              onClick={nextTrack}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <SkipForward className="w-6 h-6" />
            </motion.button>
          </div>
        </motion.div>

        {/* Language Selection */}
        <motion.div 
          className="bg-gradient-to-br from-deep-blue/20 to-maroon/20 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/20"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
            <Volume2 className="w-5 h-5 text-saffron mr-3" />
            Audio Language
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {languages.map((lang) => (
              <motion.button
                key={lang.code}
                onClick={() => setSelectedLanguage(lang.code)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                  selectedLanguage === lang.code
                    ? 'bg-saffron text-deep-blue border-saffron font-semibold'
                    : 'bg-white/10 text-white border-white/20 hover:border-saffron'
                }`}
              >
                <div className="text-center">
                  <div className="text-2xl mb-2">{lang.flag}</div>
                  <div className="font-medium">{lang.name}</div>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Track List */}
        <motion.div 
          className="bg-gradient-to-br from-deep-blue/20 to-maroon/20 backdrop-blur-md rounded-2xl p-6 border border-white/20"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-white mb-6">Audio Track List</h3>
          <div className="space-y-4">
            <AnimatePresence>
              {audioTracks.map((track, index) => (
                <motion.div
                  key={track.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => setCurrentTrack(index)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                    currentTrack === index
                      ? 'bg-saffron/20 border-saffron text-white'
                      : 'bg-white/5 border-white/20 text-white/80 hover:bg-white/10 hover:border-white/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4">
                        <div className="text-lg font-semibold">
                          {track.title}
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <span>{track.duration}</span>
                          {track.isDownloaded ? (
                            <div className="flex items-center text-green-400">
                              <Download className="w-4 h-4 mr-1" />
                              <span className="text-xs">Downloaded</span>
                            </div>
                          ) : (
                            <motion.button
                              onClick={(e) => {
                                e.stopPropagation();
                                // Simulate download
                                setTimeout(() => {
                                  track.isDownloaded = true;
                                }, 1000);
                              }}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex items-center text-saffron hover:text-gold transition-colors"
                            >
                              <Download className="w-4 h-4 mr-1" />
                              <span className="text-xs">Download</span>
                            </motion.button>
                          )}
                        </div>
                      </div>
                      <div className="text-sm text-white/60 mt-1 flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        <span>{track.location}</span>
                      </div>
                    </div>
                    
                    {currentTrack === index && isPlaying && (
                      <motion.div 
                        className="flex items-center space-x-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="w-1 h-4 bg-saffron rounded-full"
                            animate={{
                              height: [4, 16, 4],
                            }}
                            transition={{
                              duration: 0.8,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                          />
                        ))}
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* GPS Auto-Highlight Feature */}
        <motion.div 
          className="mt-8 p-6 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-md rounded-2xl border border-green-500/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="flex items-center mb-4">
            <Navigation className="w-6 h-6 text-green-400 mr-3" />
            <h4 className="text-lg font-semibold text-white">GPS Auto-Highlight</h4>
          </div>
          <p className="text-white/80 text-sm leading-relaxed">
            As you move around the monastery, the audio guide will automatically detect your location 
            and highlight relevant tracks. Make sure location services are enabled for the best experience.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AudioGuide;