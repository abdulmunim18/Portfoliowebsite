'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { urlFor } from '@/lib/sanity/image'

/**
 * Project gallery component with lightbox modal for high-res preview.
 */
export default function ProjectGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null)

  if (!images || images.length === 0) return null

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-white">Screenshots</h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {images.map((img, index) => {
          const thumbUrl = urlFor(img)?.width(400).height(250).quality(80).url()
          const fullUrl = urlFor(img)?.width(1600).quality(90).url()

          if (!thumbUrl || !fullUrl) return null

          return (
            <button
              key={index}
              onClick={() => setSelectedImage(fullUrl)}
              className="relative aspect-[16/10] rounded-lg overflow-hidden border border-white/10 hover:border-cyan-500/50 hover:shadow-glow transition-all duration-300 group"
              aria-label={`View screenshot ${index + 1}`}
            >
              <Image
                src={thumbUrl}
                alt={img.alt || `Screenshot ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/0 transition-colors" />
            </button>
          )
        })}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] cursor-zoom-out"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-4 sm:inset-10 flex items-center justify-center z-[101] pointer-events-none"
            >
              <div className="relative w-full max-w-5xl h-full flex items-center justify-center pointer-events-auto">
                <div className="relative w-full max-h-[85vh] aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                  <Image
                    src={selectedImage}
                    alt="Project screenshot full view"
                    fill
                    className="object-contain bg-neutral-950"
                    sizes="100vw"
                    priority
                  />
                </div>
                
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 p-2 text-neutral-400 hover:text-white transition-colors"
                  aria-label="Close image preview"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
