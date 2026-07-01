'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import GradientText from '@/components/ui/GradientText'
import Container from '@/components/ui/Container'
import { urlFor } from '@/lib/sanity/image'

/**
 * Hero section with a modern two-column layout on desktop.
 * Left: status, terminal text, headline, subhead, and CTAs.
 * Right: floating, glowing developer profile picture.
 */
export default function Hero({ settings }) {
  const heroTitle = settings?.heroTitle || 'Hi, I\'m Abdul Munim'
  const heroSubtitle = settings?.heroSubtitle || 'I build exceptional digital experiences with clean code and modern design.'
  const typingTexts = settings?.heroTypingTexts || [
    'Software Developer',
    'Full Stack Engineer',
    'Open Source Enthusiast',
    'Problem Solver',
  ]

  const [displayText, setDisplayText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  // Terminal typing effect
  useEffect(() => {
    const currentText = typingTexts[textIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setDisplayText(currentText.substring(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentText.substring(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        } else {
          setIsDeleting(false)
          setTextIndex((textIndex + 1) % typingTexts.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, textIndex, typingTexts])

  const profileImageUrl = settings?.profileImage
    ? urlFor(settings.profileImage)?.width(400).height(400).quality(90).url()
    : '/profile-pic.jpeg'

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16" aria-label="Hero">
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Primary gradient orbs — layered for depth */}
        <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] bg-cyan-500/[0.07] rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] bg-violet-600/[0.06] rounded-full blur-[140px]" />
        <div className="absolute top-[60%] left-[50%] -translate-x-1/2 w-[400px] h-[400px] bg-blue-500/[0.04] rounded-full blur-[100px]" />
        {/* Radial spotlight from top center */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[70%] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(6,182,212,0.08),transparent)]" />
        {/* Subtle dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
        {/* Noise texture overlay for premium feel */}
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%270 0 256 256%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27noise%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23noise)%27/%3E%3C/svg%3E")' }} />
      </div>

      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">

            {/* Terminal-style typing text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] font-mono text-sm">
                <span className="text-emerald-400">~</span>
                <span className="text-neutral-500">$</span>
                <span className="text-cyan-400">{displayText}</span>
                <span className="w-2 h-5 bg-cyan-400 animate-pulse" />
              </div>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              <span className="text-white">{heroTitle.split(' ').slice(0, -2).join(' ')} </span>
              <GradientText>{heroTitle.split(' ').slice(-2).join(' ')}</GradientText>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-base sm:text-lg text-neutral-400 max-w-xl mb-8 leading-relaxed"
            >
              {heroSubtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <Button href="/projects" size="lg" className="w-full sm:w-auto">
                View My Work
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Button href="/contact" variant="secondary" size="lg" className="w-full sm:w-auto">
                Get In Touch
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Profile Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: 'spring', stiffness: 100 }}
              className="relative group"
            >
              {/* Glowing background ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500 to-violet-600 opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />
              
              {/* Frame wrapper */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden border border-white/10 shadow-glow-lg bg-neutral-900 animate-float">
                <Image
                  src={profileImageUrl}
                  alt={settings?.profileImage?.alt || 'Abdul Munim Profile picture'}
                  fill
                  className="object-cover object-[50%_10%] transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 256px, 320px"
                  priority
                />
              </div>
            </motion.div>
          </div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 rounded-full bg-white/40" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

