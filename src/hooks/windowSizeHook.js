import { useState, useEffect } from "react"

export function useWindowSize() {
  const [mobileView, setMobileView] = useState()

  useEffect(() => {
    function handleResize() {
      setMobileView(window.innerWidth <= 1024)
    }

    window.addEventListener("resize", handleResize)
    handleResize()
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return mobileView
}
