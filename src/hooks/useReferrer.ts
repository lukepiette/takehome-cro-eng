import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const organicReferrers = [
  'https://google.com',
  'https://bing.com',
  'https://yahoo.com',
  'https://duckduckgo.com',
]

export default function useReferrer() {
  const router = useRouter()
  const [referrer, setReferrer] = useState('')

  useEffect(() => {
    if (typeof window === 'undefined') return

    setReferrer(document.referrer)
    window.localStorage.setItem('referrer_link', referrer)
  }, [router.isReady])

  return referrer
}
