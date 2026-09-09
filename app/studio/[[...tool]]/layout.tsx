const dashboardBridge = 'https://core.sanity-cdn.com/bridge.js'

export default function StudioLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <><script src={dashboardBridge} async type="module" />{children}</>
}
