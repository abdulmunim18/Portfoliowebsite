/**
 * Pulsing status indicator showing current activity.
 * Displays "Currently building..." text sourced from CMS.
 */
export default function StatusIndicator({ status }) {
  if (!status) return null

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
      </span>
      <span className="text-xs text-emerald-400 font-medium">{status}</span>
    </div>
  )
}
