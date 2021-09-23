import { useEffect, useState } from "react";

export const WindowDimensions = () => {

  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window
    return {
      width,
      height
    }
  }

  const [windowDimensions, setWindowDimensinos] = useState(getWindowDimensions())
  useEffect(() => {
    const onResize = () => {
      setWindowDimensinos(getWindowDimensions())
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [getWindowDimensions()])

  return windowDimensions;
}
