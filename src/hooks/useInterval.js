import { useEffect, useRef, useLayoutEffect } from "react"

export function useInterval(callback, pollInterval) {
  const savedCallback = useRef(callback)

  // Remember the latest callback if it changes.
  if (typeof window !== "undefined")
    useLayoutEffect(() => {
      savedCallback.current = callback
    }, [callback])

  // Set up the interval.
  useEffect(() => {
    // Don't schedule if no delay is specified.
    // Note: 0 is a valid value for delay.
    if (!pollInterval && pollInterval !== 0) {
      return
    }

    const id = setInterval(() => savedCallback.current(), pollInterval)

    return () => clearInterval(id)
  }, [pollInterval])
}
