'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X } from 'lucide-react'

interface Gradient {
  id: number
  name: string
  description: string
  colors: string[]
  gradient: string
  category: string
}

const gradients: Gradient[] = [
  {
    id: 1,
    name: "Ocean Breeze",
    description: "A calming blend reminiscent of ocean waves meeting the sky at dawn.",
    colors: ["#667eea", "#764ba2"],
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    category: "Nature"
  },
  {
    id: 2,
    name: "Sunset Glow",
    description: "Warm oranges and pinks that capture the magic of golden hour.",
    colors: ["#f093fb", "#f5576c"],
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    category: "Warm"
  },
  {
    id: 3,
    name: "Forest Mist",
    description: "Fresh greens that evoke morning dew in an enchanted forest.",
    colors: ["#43e97b", "#38f9d7"],
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    category: "Nature"
  },
  {
    id: 4,
    name: "Purple Rain",
    description: "Deep purples flowing into soft lavender like twilight rain.",
    colors: ["#fa709a", "#fee140"],
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    category: "Vibrant"
  },
  {
    id: 5,
    name: "Arctic Dawn",
    description: "Cool blues and whites capturing the serene beauty of polar ice.",
    colors: ["#a8edea", "#fed6e3"],
    gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    category: "Cool"
  },
  {
    id: 6,
    name: "Fire Storm",
    description: "Intense reds and oranges that burn with passionate energy.",
    colors: ["#ff9a9e", "#fecfef"],
    gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
    category: "Warm"
  },
  {
    id: 7,
    name: "Cosmic Dust",
    description: "Deep space colors with hints of stellar formation and nebulae.",
    colors: ["#a18cd1", "#fbc2eb"],
    gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
    category: "Cosmic"
  },
  {
    id: 8,
    name: "Golden Fields",
    description: "Warm yellows and golds like wheat swaying in summer sunlight.",
    colors: ["#ffecd2", "#fcb69f"],
    gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    category: "Warm"
  }
]

export function GradientGalleryAnimated() {
  const [selectedGradient, setSelectedGradient] = useState<Gradient | null>(null)

  const handleGradientClick = (gradient: Gradient) => {
    setSelectedGradient(gradient)
  }

  const handleClose = () => {
    setSelectedGradient(null)
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto p-8">
        {gradients.map((gradient) => (
          <motion.div
            key={gradient.id}
            className="aspect-square rounded-2xl cursor-pointer overflow-hidden shadow-lg"
            style={{ background: gradient.gradient }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleGradientClick(gradient)}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            layoutId={`gradient-${gradient.id}`}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedGradient && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={handleBackdropClick}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30,
                duration: 0.4 
              }}
              className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                onClick={handleClose}
                className="absolute -top-12 right-0 z-10 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5" />
              </motion.button>

              {/* Gradient preview */}
              <motion.div
                layoutId={`gradient-${selectedGradient.id}`}
                className="w-full h-64 rounded-t-2xl"
                style={{ background: selectedGradient.gradient }}
              />

              {/* Content card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="bg-white dark:bg-gray-900 rounded-b-2xl p-8 shadow-2xl"
              >
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                  >
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                      {selectedGradient.name}
                    </h2>
                    <span className="inline-block px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full">
                      {selectedGradient.category}
                    </span>
                  </motion.div>

                  <motion.p 
                    className="text-gray-600 dark:text-gray-300 leading-relaxed"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25, duration: 0.3 }}
                  >
                    {selectedGradient.description}
                  </motion.p>

                  <motion.div 
                    className="space-y-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                  >
                    <h3 className="font-medium text-gray-900 dark:text-white">Color Values</h3>
                    <div className="flex gap-4">
                      {selectedGradient.colors.map((color, index) => (
                        <motion.div 
                          key={index} 
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + index * 0.1, duration: 0.2 }}
                        >
                          <div
                            className="w-12 h-12 rounded-lg border-2 border-gray-200 dark:border-gray-700 shadow-sm"
                            style={{ backgroundColor: color }}
                          />
                          <div className="text-sm">
                            <div className="font-mono text-gray-900 dark:text-white">{color}</div>
                            <div className="text-gray-500 dark:text-gray-400">
                              Color {index + 1}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div 
                    className="pt-4 border-t border-gray-200 dark:border-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35, duration: 0.3 }}
                  >
                    <h3 className="font-medium text-gray-900 dark:text-white mb-2">CSS Gradient</h3>
                    <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                      <code className="text-sm text-gray-700 dark:text-gray-300 font-mono break-all">
                        background: {selectedGradient.gradient};
                      </code>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}