import { useEffect, useState } from 'react'

const organicReferrers = [
  'https://google.com',
  'https://bing.com',
  'https://yahoo.com',
  'https://duckduckgo.com',
]

export default function useReferrer() {
  const [referrer, setReferrer] = useState('')
  const [medium, setMedium] = useState('')

  useEffect(() => {
    if (typeof window === 'undefined' || !document) return

    setReferrer(document.referrer)
    if (!referrer) {
      setMedium('direct')
    } else if (organicReferrers.includes(referrer)) {
      setMedium('organic')
    }

    window.localStorage.setItem('referrer', referrer)
    window.localStorage.setItem('referrer_medium', medium)
  }, [])

  return referrer
}
