import { useNavigate } from 'react-router-dom';

const useNavigateWithQuery = () => {
  const navigate = useNavigate();

  const navigateWithQuery = (path: string, params: Record<string, string>) => {
    const queryParams = new URLSearchParams(params).toString();

    navigate(`${path}?${queryParams}`);
  };

  return navigateWithQuery;
};

export default useNavigateWithQuery;
