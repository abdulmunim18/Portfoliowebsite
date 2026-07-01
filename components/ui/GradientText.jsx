import { cn } from '@/lib/utils'

/**
 * Animated gradient text effect.
 * Renders text with an animated cyan-to-violet gradient.
 */
export default function GradientText({ children, className = '', as: Component = 'span' }) {
  return (
    <Component
      className={cn(
        'bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent bg-200% animate-gradient',
        className
      )}
    >
      {children}
    </Component>
  )
}
