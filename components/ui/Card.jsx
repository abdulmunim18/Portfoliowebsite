import { cn } from '@/lib/utils'

/**
 * Glassmorphic card component with optional hover glow effect.
 */
export default function Card({ children, className = '', hover = true, ...props }) {
  return (
    <div
      className={cn(
        'relative rounded-xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm overflow-hidden',
        hover &&
          'hover:border-white/[0.15] hover:bg-white/[0.04] hover:shadow-glow transition-all duration-500 group',
        className
      )}
      {...props}
    >
      {/* Subtle gradient overlay on hover */}
      {hover && (
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.03] to-violet-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
