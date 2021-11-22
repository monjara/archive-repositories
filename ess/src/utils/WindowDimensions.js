import { useEffect, useState } from "react";

const WindowDimensions = () => {
  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

  useEffect(() => {
    const onResize = () => {
      setWindowDimensions(getWindowDimensions());
      window.addEventListener('resize', onResize);
      // eslint-disable-next-line no-unused-vars
      return () => window.removeEventListener('resize', onResize);
    }
  }, []);
  return windowDimensions;
}

export default WindowDimensions;
