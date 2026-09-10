'use client'

import dynamic from 'next/dynamic'
import experienceAnimation from '@/public/animations/experience-code.json'
import educationAnimation from '@/public/animations/education-study.json'

const Lottie = dynamic(() => import('lottie-react').then((module) => module.Lottie), { ssr: false })

export function LottieIllustration({ type }: { type: 'experience' | 'education' }) {
  return <div className="reference-lottie" aria-hidden="true">
    <Lottie src={type === 'experience' ? experienceAnimation : educationAnimation} loop autoplay />
  </div>
}
