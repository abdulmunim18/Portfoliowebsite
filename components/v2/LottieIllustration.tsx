'use client'

import { useEffect, useRef } from 'react'
import experienceAnimation from '@/public/animations/experience-code.json'
import educationAnimation from '@/public/animations/education-study.json'

export function LottieIllustration({ type }: { type: 'experience' | 'education' }) {
  const animationRoot = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let destroyed = false
    let animation: { destroy: () => void } | undefined

    import('lottie-web').then(({ default: lottie }) => {
      if (destroyed || !animationRoot.current) return
      animation = lottie.loadAnimation({
        container: animationRoot.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: structuredClone(type === 'experience' ? experienceAnimation : educationAnimation),
      })
    })

    return () => {
      destroyed = true
      animation?.destroy()
    }
  }, [type])

  return <div ref={animationRoot} className="reference-lottie" aria-hidden="true" />
}
