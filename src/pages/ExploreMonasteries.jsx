import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Filter, Star, Clock, Navigation } from 'lucide-react';

const ExploreMonasteries = () => {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedMonastery, setSelectedMonastery] = useState(null);

  const monasteries = [
    {
      id: 1,
      name: "Rumtek Monastery",
      region: "east",
      image: "https://images.pexels.com/photos/161109/buddhist-temple-monk-walking-161109.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "The most significant monastery in Sikkim, known for its golden stupa and Buddhist teachings.",
      established: "1966",
      rating: 4.8,
      coordinates: [27.3389, 88.6065],
      highlights: ["Golden Stupa", "Buddhist Teachings", "Prayer Wheels"]
    },
    {
      id: 2,
      name: "Pemayangtse Monastery",
      region: "west",
      image: "https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "One of the oldest and most premier monasteries in Sikkim, offering panoramic mountain views.",
      established: "1705",
      rating: 4.7,
      coordinates: [27.2050, 88.2482],
      highlights: ["Ancient Architecture", "Mountain Views", "Rare Manuscripts"]
    },
    {
      id: 3,
      name: "Tashiding Monastery",
      region: "west",
      image: "https://images.pexels.com/photos/208213/pexels-photo-208213.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Sacred monastery situated on a hilltop, famous for its holy water and festival celebrations.",
      established: "1717",
      rating: 4.6,
      coordinates: [27.3243, 88.2743],
      highlights: ["Sacred Water", "Hilltop Location", "Festival Celebrations"]
    },
    {
      id: 4,
      name: "Enchey Monastery",
      region: "east",
      image: "https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Located in Gangtok, this monastery is famous for its annual Cham dance performances.",
      established: "1909",
      rating: 4.5,
      coordinates: [27.3389, 88.6065],
      highlights: ["Cham Dance", "City Views", "Religious Festivals"]
    },
    {
      id: 5,
      name: "Dubdi Monastery",
      region: "west",
      image: "https://images.pexels.com/photos/161109/buddhist-temple-monk-walking-161109.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "The oldest monastery in Sikkim, nestled in dense forests with ancient relics.",
      established: "1701",
      rating: 4.4,
      coordinates: [27.2884, 88.2743],
      highlights: ["Oldest Monastery", "Forest Setting", "Ancient Relics"]
    },
    {
      id: 6,
      name: "Phensang Monastery",
      region: "north",
      image: "https://images.pexels.com/photos/208213/pexels-photo-208213.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "High altitude monastery offering breathtaking views of the Himalayas and unique architecture.",
      established: "1721",
      rating: 4.9,
      coordinates: [27.7172, 88.4584],
      highlights: ["Himalayan Views", "High Altitude", "Unique Architecture"]
    }
  ];

  const regions = [
    { value: 'all', label: 'All Regions', count: monasteries.length },
    { value: 'east', label: 'East Sikkim', count: monasteries.filter(m => m.region === 'east').length },
    { value: 'west', label: 'West Sikkim', count: monasteries.filter(m => m.region === 'west').length },
    { value: 'north', label: 'North Sikkim', count: monasteries.filter(m => m.region === 'north').length },
    { value: 'south', label: 'South Sikkim', count: monasteries.filter(m => m.region === 'south').length }
  ];

  const filteredMonasteries = selectedRegion === 'all' 
    ? monasteries 
    : monasteries.filter(m => m.region === selectedRegion);

  return (
    <motion.div 
      className="min-h-screen pt-24 pb-12 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="mandala-bg"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 glow-text">
            Explore Sacred Monasteries
          </h1>
          <p className="text-xl text-light-gold max-w-3xl mx-auto">
            Discover the spiritual heart of Sikkim through our collection of ancient monasteries, 
            each with its unique history and architectural beauty.
          </p>
        </motion.div>

        {/* Interactive Map Placeholder */}
        <motion.div 
          className="bg-gradient-to-br from-deep-blue/20 to-maroon/20 backdrop-blur-md rounded-3xl p-8 mb-12 border border-white/20"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-white flex items-center">
              <MapPin className="w-6 h-6 text-saffron mr-3" />
              Interactive Map of Sikkim
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="floating-btn flex items-center space-x-2"
            >
              <Navigation className="w-4 h-4" />
              <span>View Full Map</span>
            </motion.button>
          </div>
          
          <div className="h-64 bg-gradient-to-br from-saffron/10 to-gold/10 rounded-xl flex items-center justify-center border-2 border-dashed border-saffron/30">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-saffron mx-auto mb-4" />
              <p className="text-light-gold text-lg">Interactive Map Loading...</p>
              <p className="text-sm text-white/70 mt-2">Click on monastery pins to explore</p>
            </div>
          </div>
        </motion.div>

        {/* Filter Section */}
        <motion.div 
          className="mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-white flex items-center">
              <Filter className="w-6 h-6 text-saffron mr-3" />
              Filter by Region
            </h3>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {regions.map((region) => (
              <motion.button
                key={region.value}
                onClick={() => setSelectedRegion(region.value)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                  selectedRegion === region.value
                    ? 'bg-saffron text-deep-blue border-saffron font-semibold'
                    : 'border-white/30 text-white hover:border-saffron hover:text-saffron'
                }`}
              >
                {region.label} ({region.count})
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Monasteries Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredMonasteries.map((monastery, index) => (
              <motion.div
                key={monastery.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="monastery-card group cursor-pointer"
                onClick={() => setSelectedMonastery(monastery)}
              >
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <motion.img
                    src={monastery.image}
                    alt={monastery.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="w-4 h-4 text-gold fill-current" />
                    <span className="text-white text-sm font-semibold">{monastery.rating}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-saffron transition-colors">
                      {monastery.name}
                    </h3>
                    <div className="flex items-center text-light-gold text-sm mb-3">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>Established {monastery.established}</span>
                    </div>
                  </div>

                  <p className="text-white/80 text-sm leading-relaxed">
                    {monastery.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {monastery.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-saffron/20 text-saffron text-xs rounded-full border border-saffron/30"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full floating-btn justify-center mt-4"
                  >
                    Explore Virtual Tour
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Monastery Detail Modal */}
        <AnimatePresence>
          {selectedMonastery && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMonastery(null)}
            >
              <motion.div
                className="bg-gradient-to-br from-deep-blue to-maroon rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/20"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedMonastery.image}
                    alt={selectedMonastery.name}
                    className="w-full h-64 object-cover rounded-xl mb-6"
                  />
                  <button
                    onClick={() => setSelectedMonastery(null)}
                    className="absolute top-4 right-4 w-8 h-8 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                  >
                    ×
                  </button>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedMonastery.name}</h2>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-light-gold">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>Established {selectedMonastery.established}</span>
                      </div>
                      <div className="flex items-center text-gold">
                        <Star className="w-4 h-4 mr-1 fill-current" />
                        <span className="font-semibold">{selectedMonastery.rating}/5</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-white/90 leading-relaxed">{selectedMonastery.description}</p>

                  <div>
                    <h4 className="text-lg font-semibold text-saffron mb-3">Highlights</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedMonastery.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-saffron/20 text-saffron rounded-full border border-saffron/30"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 floating-btn justify-center"
                    >
                      Start Virtual Tour
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 border-2 border-white/30 text-white rounded-full hover:border-saffron hover:text-saffron transition-all duration-300"
                    >
                      View on Map
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ExploreMonasteries;