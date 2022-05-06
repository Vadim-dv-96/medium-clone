import { useEffect, useState } from 'react';

export const useLocalStorage = (
  key: string,
  initialValue = ''
): LocalStorageReturnType => {
  const [token, setToken] = useState(() => {
    return localStorage.getItem(key) || initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, token);
  }, [token, key]);

  return [token, setToken];
};
type LocalStorageReturnType = [
  token: string,
  setToken: (value: string) => void
];
