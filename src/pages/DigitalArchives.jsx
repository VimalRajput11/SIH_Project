import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Download, Heart, Eye, Calendar, Tag } from 'lucide-react';

const DigitalArchives = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const categories = [
    { value: 'all', label: 'All Archives', count: 24 },
    { value: 'murals', label: 'Ancient Murals', count: 8 },
    { value: 'manuscripts', label: 'Sacred Manuscripts', count: 6 },
    { value: 'artifacts', label: 'Religious Artifacts', count: 5 },
    { value: 'photos', label: 'Historical Photos', count: 5 }
  ];

  const archiveItems = [
    {
      id: 1,
      title: "Wheel of Life Mural",
      category: "murals",
      date: "17th Century",
      monastery: "Pemayangtse",
      description: "Ancient Tibetan Buddhist mural depicting the cycle of existence and rebirth.",
      image: "https://images.pexels.com/photos/208213/pexels-photo-208213.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Buddhism", "Rebirth", "Ancient Art"],
      views: 1240,
      downloads: 89
    },
    {
      id: 2,
      title: "Lotus Sutra Manuscript",
      category: "manuscripts",
      date: "16th Century",
      monastery: "Dubdi",
      description: "Hand-written Buddhist scripture on traditional paper with gold illuminations.",
      image: "https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Scripture", "Manuscript", "Golden Text"],
      views: 856,
      downloads: 124
    },
    {
      id: 3,
      title: "Prayer Wheel Collection",
      category: "artifacts",
      date: "18th Century",
      monastery: "Rumtek",
      description: "Ornate brass prayer wheels with intricate mantras and spiritual symbols.",
      image: "https://images.pexels.com/photos/161109/buddhist-temple-monk-walking-161109.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Prayer Wheels", "Brass", "Mantras"],
      views: 642,
      downloads: 67
    },
    {
      id: 4,
      title: "Medicine Buddha Painting",
      category: "murals",
      date: "18th Century",
      monastery: "Tashiding",
      description: "Traditional thangka painting of the healing Buddha in meditation pose.",
      image: "https://images.pexels.com/photos/208213/pexels-photo-208213.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Medicine Buddha", "Thangka", "Healing"],
      views: 1156,
      downloads: 203
    },
    {
      id: 5,
      title: "Monastery Foundation Stone",
      category: "photos",
      date: "1909",
      monastery: "Enchey",
      description: "Historic photograph of the monastery's foundation ceremony with local dignitaries.",
      image: "https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Historical", "Foundation", "Ceremony"],
      views: 423,
      downloads: 56
    },
    {
      id: 6,
      title: "Mahakala Dance Mask",
      category: "artifacts",
      date: "19th Century",
      monastery: "Pemayangtse",
      description: "Traditional ceremonial mask used in Cham dance performances during festivals.",
      image: "https://images.pexels.com/photos/161109/buddhist-temple-monk-walking-161109.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Mahakala", "Dance", "Ceremony"],
      views: 934,
      downloads: 78
    }
  ];

  const filteredItems = archiveItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFavorite = (itemId) => {
    setFavorites(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
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
            Digital Archives
          </h1>
          <p className="text-xl text-light-gold max-w-3xl mx-auto">
            Explore rare manuscripts, ancient murals, and sacred artifacts digitally preserved 
            for future generations.
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div 
          className="bg-gradient-to-br from-deep-blue/20 to-maroon/20 backdrop-blur-md rounded-3xl p-8 mb-12 border border-white/20"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* AI-powered Search */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <Search className="w-6 h-6 text-saffron mr-3" />
              <h3 className="text-2xl font-semibold text-white">AI-Powered Search</h3>
            </div>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title, description, or tags..."
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-white/60 focus:outline-none focus:border-saffron focus:bg-white/15 transition-all duration-300"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <Search className="w-5 h-5 text-white/60" />
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div>
            <div className="flex items-center mb-4">
              <Filter className="w-6 h-6 text-saffron mr-3" />
              <h3 className="text-xl font-semibold text-white">Filter by Category</h3>
            </div>
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                    selectedCategory === category.value
                      ? 'bg-saffron text-deep-blue border-saffron font-semibold'
                      : 'border-white/30 text-white hover:border-saffron hover:text-saffron'
                  }`}
                >
                  {category.label} ({category.count})
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-light-gold text-lg">
            Showing {filteredItems.length} of {archiveItems.length} archived items
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div 
          className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
          layout
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="break-inside-avoid monastery-card group cursor-pointer relative overflow-hidden"
                onClick={() => setSelectedItem(item)}
                whileHover={{ y: -5 }}
              >
                {/* Image with Glass Effect */}
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Glass Magnification Effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{
                      background: [
                        "linear-gradient(to top, rgba(0,0,0,0.6), transparent, transparent)",
                        "linear-gradient(to top, rgba(255,153,51,0.3), transparent, transparent)"
                      ]
                    }}
                  />

                  {/* Favorite Button */}
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(item.id);
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-4 right-4 w-8 h-8 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <Heart 
                      className={`w-4 h-4 ${
                        favorites.includes(item.id) 
                          ? 'text-red-500 fill-current' 
                          : 'text-white'
                      }`} 
                    />
                  </motion.button>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-saffron transition-colors mb-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-light-gold mb-2">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{item.date}</span>
                      </div>
                      <span className="text-saffron font-semibold">{item.monastery}</span>
                    </div>
                  </div>

                  <p className="text-white/80 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.slice(0, 2).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-saffron/20 text-saffron text-xs rounded-full border border-saffron/30"
                      >
                        {tag}
                      </span>
                    ))}
                    {item.tags.length > 2 && (
                      <span className="px-2 py-1 bg-white/10 text-white/70 text-xs rounded-full">
                        +{item.tags.length - 2}
                      </span>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-xs text-white/60">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <Eye className="w-3 h-3 mr-1" />
                        <span>{item.views}</span>
                      </div>
                      <div className="flex items-center">
                        <Download className="w-3 h-3 mr-1" />
                        <span>{item.downloads}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Archive Detail Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                className="bg-gradient-to-br from-deep-blue to-maroon rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Image Section */}
                  <div className="relative">
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      className="w-full h-auto object-cover rounded-xl"
                    />
                    <button
                      onClick={() => setSelectedItem(null)}
                      className="absolute top-4 right-4 w-8 h-8 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                    >
                      ×
                    </button>
                  </div>

                  {/* Details Section */}
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-4">{selectedItem.title}</h2>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-light-gold">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{selectedItem.date}</span>
                        </div>
                        <span className="text-saffron font-semibold">{selectedItem.monastery}</span>
                      </div>
                    </div>

                    <p className="text-white/90 leading-relaxed">{selectedItem.description}</p>

                    {/* All Tags */}
                    <div>
                      <h4 className="text-lg font-semibold text-saffron mb-3 flex items-center">
                        <Tag className="w-4 h-4 mr-2" />
                        Tags
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {selectedItem.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 bg-saffron/20 text-saffron rounded-full border border-saffron/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Stats and Actions */}
                    <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                      <div className="flex items-center space-x-6 text-white/80">
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-2" />
                          <span>{selectedItem.views} views</span>
                        </div>
                        <div className="flex items-center">
                          <Download className="w-4 h-4 mr-2" />
                          <span>{selectedItem.downloads} downloads</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 floating-btn justify-center"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download HD
                      </motion.button>
                      <motion.button
                        onClick={() => toggleFavorite(selectedItem.id)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 border-2 rounded-full transition-all duration-300 ${
                          favorites.includes(selectedItem.id)
                            ? 'bg-red-500 border-red-500 text-white'
                            : 'border-white/30 text-white hover:border-red-500 hover:text-red-500'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${favorites.includes(selectedItem.id) ? 'fill-current' : ''}`} />
                      </motion.button>
                    </div>
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

export default DigitalArchives;