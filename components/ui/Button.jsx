import Link from 'next/link'
import { cn } from '@/lib/utils'

/**
 * Reusable button component with multiple variants and optional link behavior.
 * Renders as <a> (via Next Link) when href is provided, <button> otherwise.
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  className = '',
  disabled = false,
  ...props
}) {
  const variants = {
    primary:
      'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40',
    secondary:
      'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20',
    ghost:
      'text-neutral-400 hover:text-white hover:bg-white/5',
    outline:
      'border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3 text-base',
  }

  const baseStyles = cn(
    'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-neutral-900 disabled:opacity-50 disabled:cursor-not-allowed',
    variants[variant],
    sizes[size],
    className
  )

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseStyles}
          {...props}
        >
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={baseStyles} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button className={baseStyles} disabled={disabled} {...props}>
      {children}
    </button>
  )
}
