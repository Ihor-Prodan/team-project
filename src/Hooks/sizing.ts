import { useState, useEffect } from 'react';

const useResponsive = () => {
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(
    window.innerWidth > 1225,
  );
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(
    window.innerWidth <= 982,
  );

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1225);
      setIsSmallScreen(window.innerWidth <= 982);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isSmallScreen, setIsSmallScreen]);

  return { isLargeScreen, isSmallScreen };
};

export default useResponsive;
