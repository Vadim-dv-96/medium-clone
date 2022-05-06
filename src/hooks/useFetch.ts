import axios, { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

export const useFetch = (url: string) => {
  const baseUrl = 'https://api.realworld.io/api';

  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<ResponseType | null>(null);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});

  const doFetch = (options = {}) => {
    setOptions(options);
    setIsLoading(true);
  };

  const login = async () => {
    try {
      let res = await axios.post<RequestType, AxiosResponse<ResponseType>>(
        baseUrl + url,
        options
      );
      console.log('success', res);
      setIsLoading(false);
      setResponse(res.data);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log('error', error);
        setIsLoading(false);
        setError(error.response?.data);
      }
    }
  };

  useEffect(() => {
    if (!isLoading) {
      return;
    }
    login();
  }, [isLoading]);

  return { isLoading, response, error, doFetch };
};
// types
type RequestType = {
  user: {
    email: string;
    password: string;
  };
};
export type ResponseType = {
  user: {
    bio: null;
    email: string;
    image: string;
    token: string;
    username: string;
  };
};
