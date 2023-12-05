import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function useMeetingBooked() {
  const router = useRouter()
  const [meetingBooked, setMeetingBooked] = useState("")

  useEffect(() => {
    if (typeof window === "undefined") return

    const searchMeetingBooked = router.query?.meeting_booked as string

    if (searchMeetingBooked && searchMeetingBooked.length > 0 && window.localStorage) {
      window.localStorage.setItem("meetingBooked", searchMeetingBooked)
      setMeetingBooked(searchMeetingBooked)
      router.replace({ search: "" }, undefined, { shallow: true })
    }
  }, [router.asPath, router.isReady])

  return meetingBooked
}
