import { useState, useEffect } from 'react';

export const useLoadAnimation = (src: string | undefined) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!src) {
      return;
    }

    const animation = new Image();

    animation.src = src;
    animation.onload = () => setLoaded(true);
  }, [src]);

  return loaded;
};

export default useLoadAnimation;
