import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const useRouterLoading = (): boolean => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    router.events.on('routeChangeStart', () => setLoading(true));
    router.events.on('routeChangeError', () => setLoading(false));
    router.events.on('routeChangeComplete', () => setLoading(false));
  }, [router]);

  return loading;
};

export default useRouterLoading;
