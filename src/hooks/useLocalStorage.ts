import { useEffect, useState } from 'react';

export const useLocalStorage = (key: string, initialValue = '') => {
  const [token, setToken] = useState(() => {
    return localStorage.getItem(key) || initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, token);
  }, [token]);

  return [{ token, setToken }];
};
