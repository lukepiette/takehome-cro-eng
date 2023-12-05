import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function useUtm() {
  const router = useRouter()
  const [utmParams, setUtmParams] = useState({})

  useEffect(() => {
    if (typeof window === "undefined" || !router.isReady) return

    const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"]
    let utmValues: Record<string, any> = {}

    utmKeys.forEach((key) => {
      const value = router.query[key] as string
      if (value) {
        utmValues[key] = value
        window.localStorage.setItem(key, value)
      } else if (window.localStorage) {
        const storedValue = window.localStorage.getItem(key)
        if (storedValue) {
          utmValues[key] = storedValue
        }
      }
    })

    setUtmParams(utmValues)

    let newQuery = { ...router.query }
    utmKeys.forEach((key) => delete newQuery[key])
    router.replace({ query: newQuery }, undefined, { shallow: true })
  }, [router.asPath, router.isReady])

  return utmParams
}
