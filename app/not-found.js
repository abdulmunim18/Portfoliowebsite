import Link from 'next/link'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

/**
 * Custom 404 page styled as an editor/terminal error diagnostic.
 */
export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-20">
      <Container size="narrow">
        <div className="text-center space-y-6 max-w-md mx-auto">
          {/* Diagnostic Console Box */}
          <div className="rounded-xl border border-rose-500/20 bg-rose-500/5 p-6 text-left font-mono text-sm leading-relaxed shadow-glow">
            <div className="flex items-center gap-1.5 mb-4 border-b border-rose-500/10 pb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="text-rose-400 text-xs font-bold uppercase tracking-wider">
                System_Error: 404
              </span>
            </div>
            
            <p className="text-rose-400 font-bold mb-2">
              [FATAL_EXCEPTION] PAGE_NOT_FOUND
            </p>
            <p className="text-neutral-400">
              The requested address could not be resolved. Please verify the URL coordinates and try rebuilding.
            </p>
            
            <div className="mt-4 pt-3 border-t border-rose-500/10 text-xs text-neutral-500 space-y-1">
              <p>&gt; Request_Path: null</p>
              <p>&gt; Stack_Trace: Code 404 (Route_Mismatch)</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white">
            Lost in Cyberspace?
          </h2>
          <p className="text-neutral-400 text-sm max-w-sm mx-auto">
            You might have mistyped the address or the page has been shifted to a new route.
          </p>

          <div className="pt-2">
            <Button href="/">
              Return to Core
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
