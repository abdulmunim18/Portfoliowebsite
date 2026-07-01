import { cn } from '@/lib/utils'

/**
 * Technology badge component with themed variants.
 * Used to display tech stack tags on project and experience cards.
 */
export default function Badge({ label, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    secondary: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    outline: 'bg-transparent text-neutral-400 border-neutral-700',
    ghost: 'bg-white/5 text-neutral-300 border-transparent',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border transition-colors duration-200',
        variants[variant] || variants.default,
        className
      )}
    >
      {label}
    </span>
  )
}
