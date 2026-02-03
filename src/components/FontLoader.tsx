"use client"

import { useEffect } from 'react'

export default function FontLoader() {
  useEffect(() => {
    // Add preconnect
    const preconnect = document.createElement('link')
    preconnect.rel = 'preconnect'
    preconnect.href = 'https://api.fontshare.com'
    preconnect.crossOrigin = 'anonymous'
    document.head.appendChild(preconnect)

    // Add font stylesheet
    const link = document.createElement('link')
    link.href = 'https://api.fontshare.com/v2/css?f[]=clash-display@600&display=swap'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    return () => {
      // Cleanup (optional)
      document.head.removeChild(preconnect)
      document.head.removeChild(link)
    }
  }, [])

  return null
}

