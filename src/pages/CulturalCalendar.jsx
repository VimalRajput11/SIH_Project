import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const CulturalCalendar = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'calendar'

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const festivals = [
    {
      id: 1,
      name: "Losar Festival",
      date: "February 15-17, 2025",
      month: 1,
      type: "New Year Celebration",
      monastery: "All Monasteries",
      description: "Tibetan New Year celebration with traditional dances, prayers, and festive meals.",
      image: "https://images.pexels.com/photos/208213/pexels-photo-208213.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "3 days",
      participants: "1000+",
      highlights: ["Cham Dance", "Traditional Music", "Festive Meals", "Prayer Ceremonies"],
      icon: "🎭",
      status: "upcoming",
      ticketRequired: true
    },
    {
      id: 2,
      name: "Buddha Purnima",
      date: "May 23, 2025",
      month: 4,
      type: "Religious Celebration",
      monastery: "Rumtek Monastery",
      description: "Celebration of Buddha's birth, enlightenment, and death with special prayers and processions.",
      image: "https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "1 day",
      participants: "800+",
      highlights: ["Candle Lighting", "Meditation Session", "Dharma Teaching", "Community Feast"],
      icon: "🏔️",
      status: "upcoming",
      ticketRequired: false
    },
    {
      id: 3,
      name: "Hemis Festival",
      date: "July 8-9, 2025",
      month: 6,
      type: "Masked Dance Festival",
      monastery: "Multiple Venues",
      description: "Spectacular masked dance festival celebrating Guru Rinpoche with colorful performances.",
      image: "https://images.pexels.com/photos/161109/buddhist-temple-monk-walking-161109.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "2 days",
      participants: "1500+",
      highlights: ["Masked Dances", "Traditional Costumes", "Music Performance", "Cultural Exhibition"],
      icon: "🎪",
      status: "upcoming",
      ticketRequired: true
    },
    {
      id: 4,
      name: "Monastery Art Exhibition",
      date: "September 12-20, 2025",
      month: 8,
      type: "Cultural Exhibition",
      monastery: "Pemayangtse Monastery",
      description: "Exhibition of ancient thangka paintings, sculptures, and monastery artifacts.",
      image: "https://images.pexels.com/photos/208213/pexels-photo-208213.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "9 days",
      participants: "500+",
      highlights: ["Thangka Display", "Sculpture Gallery", "Artist Workshops", "Guided Tours"],
      icon: "🎨",
      status: "upcoming",
      ticketRequired: false
    },
    {
      id: 5,
      name: "Diwali Celebration",
      date: "October 31, 2025",
      month: 9,
      type: "Light Festival",
      monastery: "Enchey Monastery",
      description: "Festival of lights with lamp lighting ceremonies and community celebrations.",
      image: "https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "1 day",
      participants: "600+",
      highlights: ["Lamp Lighting", "Prayer Sessions", "Sweets Distribution", "Cultural Programs"],
      icon: "🪔",
      status: "upcoming",
      ticketRequired: false
    }
  ];

  const filteredFestivals = festivals.filter(festival => festival.month === selectedMonth);

  const nextMonth = () => {
    setSelectedMonth((prev) => (prev + 1) % 12);
  };

  const prevMonth = () => {
    setSelectedMonth((prev) => (prev - 1 + 12) % 12);
  };

  return (
    <motion.div 
      className="min-h-screen pt-24 pb-12 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="mandala-bg"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 glow-text">
            Cultural Calendar
          </h1>
          <p className="text-xl text-light-gold max-w-3xl mx-auto">
            Immerse yourself in the spiritual rhythm of Sikkim through sacred festivals, 
            traditional celebrations, and cultural events throughout the year.
          </p>
        </motion.div>

        {/* Month Navigator */}
        <motion.div 
          className="bg-gradient-to-br from-deep-blue/20 to-maroon/20 backdrop-blur-md rounded-3xl p-8 mb-12 border border-white/20"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center justify-between">
            <motion.button
              onClick={prevMonth}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-saffron rounded-full flex items-center justify-center text-deep-blue hover:bg-gold transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <div className="text-center">
              <motion.h2 
                key={selectedMonth}
                className="text-4xl font-bold text-white mb-2"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {months[selectedMonth]} 2025
              </motion.h2>
              <p className="text-light-gold">
                {filteredFestivals.length} event{filteredFestivals.length !== 1 ? 's' : ''} this month
              </p>
            </div>

            <motion.button
              onClick={nextMonth}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-saffron rounded-full flex items-center justify-center text-deep-blue hover:bg-gold transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </motion.div>

        {/* Animated Festival Timeline */}
        <motion.div 
          className="space-y-8"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredFestivals.length > 0 ? (
              filteredFestivals.map((festival, index) => (
                <motion.div
                  key={`${selectedMonth}-${festival.id}`}
                  layout
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="monastery-card group cursor-pointer relative overflow-hidden"
                  onClick={() => setSelectedEvent(festival)}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Festival Image */}
                    <div className="relative overflow-hidden rounded-xl">
                      <motion.img
                        src={festival.image}
                        alt={festival.name}
                        className="w-full h-48 lg:h-32 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Glowing Icon Overlay */}
                      <motion.div 
                        className="absolute top-4 left-4 w-12 h-12 bg-saffron rounded-full flex items-center justify-center text-2xl shadow-lg"
                        animate={{
                          boxShadow: [
                            "0 0 0 0 rgba(255, 153, 51, 0.7)",
                            "0 0 0 20px rgba(255, 153, 51, 0)",
                            "0 0 0 0 rgba(255, 153, 51, 0)"
                          ]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        {festival.icon}
                      </motion.div>

                      {/* Status Badge */}
                      <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {festival.status}
                      </div>
                    </div>

                    {/* Festival Details */}
                    <div className="lg:col-span-2 space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-2xl font-bold text-white group-hover:text-saffron transition-colors">
                            {festival.name}
                          </h3>
                          <span className="text-gold font-semibold">{festival.type}</span>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 text-light-gold text-sm mb-3">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{festival.date}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>{festival.monastery}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>{festival.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-2" />
                            <span>{festival.participants}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-white/80 leading-relaxed">
                        {festival.description}
                      </p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2">
                        {festival.highlights.slice(0, 3).map((highlight, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-saffron/20 text-saffron text-sm rounded-full border border-saffron/30"
                          >
                            {highlight}
                          </span>
                        ))}
                        {festival.highlights.length > 3 && (
                          <span className="px-3 py-1 bg-white/10 text-white/70 text-sm rounded-full">
                            +{festival.highlights.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Action Button */}
                      <div className="flex items-center justify-between">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="floating-btn"
                        >
                          {festival.ticketRequired ? 'Book Tickets' : 'Learn More'}
                        </motion.button>
                        
                        {festival.ticketRequired && (
                          <div className="flex items-center text-saffron text-sm">
                            <Star className="w-4 h-4 mr-1" />
                            <span>Tickets Required</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                key={`empty-${selectedMonth}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20"
              >
                <Calendar className="w-24 h-24 text-saffron/50 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold text-white mb-4">
                  No Events This Month
                </h3>
                <p className="text-light-gold max-w-md mx-auto">
                  Check other months for upcoming festivals and cultural celebrations.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Festival Detail Modal */}
        <AnimatePresence>
          {selectedEvent && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
            >
              <motion.div
                className="bg-gradient-to-br from-deep-blue to-maroon rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedEvent.image}
                    alt={selectedEvent.name}
                    className="w-full h-64 object-cover rounded-xl mb-6"
                  />
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="absolute top-4 right-4 w-8 h-8 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                  >
                    ×
                  </button>
                  
                  {/* Floating Icon */}
                  <div className="absolute top-4 left-4 w-16 h-16 bg-saffron rounded-full flex items-center justify-center text-3xl shadow-lg">
                    {selectedEvent.icon}
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h2 className="text-4xl font-bold text-white mb-4">{selectedEvent.name}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-light-gold">
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 mr-3 text-saffron" />
                        <span>{selectedEvent.date}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 mr-3 text-saffron" />
                        <span>{selectedEvent.monastery}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 mr-3 text-saffron" />
                        <span>{selectedEvent.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-5 h-5 mr-3 text-saffron" />
                        <span>{selectedEvent.participants} expected</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-white/90 text-lg leading-relaxed">{selectedEvent.description}</p>

                  {/* All Highlights */}
                  <div>
                    <h4 className="text-xl font-semibold text-saffron mb-4">Festival Highlights</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {selectedEvent.highlights.map((highlight, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center p-3 bg-white/10 rounded-lg border border-saffron/20"
                          whileHover={{ backgroundColor: 'rgba(255, 153, 51, 0.1)' }}
                        >
                          <Star className="w-4 h-4 text-saffron mr-3" />
                          <span className="text-white">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 floating-btn justify-center text-lg"
                    >
                      {selectedEvent.ticketRequired ? 'Book Tickets Now' : 'Mark as Interested'}
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3 border-2 border-white/30 text-white rounded-full hover:border-saffron hover:text-saffron transition-all duration-300"
                    >
                      Share Event
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

export default CulturalCalendar;