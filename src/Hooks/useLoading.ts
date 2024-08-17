import { useState, useCallback } from 'react';

function useLoading() {
  const [loading, setLoading] = useState<boolean>(false);

  const startLoading = useCallback(() => {
    setLoading(true);
  }, []);

  const stopLoading = useCallback(() => {
    setLoading(false);
  }, []);

  return {
    loading,
    startLoading,
    stopLoading,
  };
}

export default useLoading;
