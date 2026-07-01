'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'

/**
 * Theme provider wrapper. Wraps the app in next-themes for dark/light mode support.
 * Dark mode is the default theme, persisted in localStorage.
 */
export default function ThemeProvider({ children }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange={false}
    >
      {children}
    </NextThemesProvider>
  )
}
