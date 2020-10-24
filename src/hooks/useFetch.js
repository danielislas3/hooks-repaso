import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export const useFetch = url => {
  const isMounted = useRef(true);

  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({ data: null, loading: true, error: null });
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setTimeout(() => {
          if (isMounted.current) {
            setState({
              loading: false,
              error: null,
              data,
            });
          }else{
            console.log('====================================');
            console.log('setState no se llamo');
            console.log('====================================');
          }
        }, 4000);
      });
  }, [url]);

  return state;
};
