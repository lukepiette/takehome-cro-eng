import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function useReferrer() {
  const router = useRouter()
  const [referrer, setReferrer] = useState('')

  useEffect(() => {
    if (typeof window === 'undefined' || !router.isReady) return

    setReferrer(document.referrer)
    if (
      referrer.includes('blog.runpod.io') ||
      referrer.includes('docs.runpod.io')
    ) {
      window.localStorage.setItem('internal_referrer_link', referrer)
    } else {
      window.localStorage.setItem('referrer_link', referrer)
    }
  }, [router.isReady])

  return referrer
}
