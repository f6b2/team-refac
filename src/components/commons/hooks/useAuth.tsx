import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import {
  accessTokenState,
  restoreAccessTokenLoadable,
} from '../../../commons/store';

export function useAuth() {
  const [accessToken] = useRecoilState(accessTokenState);
  const [isLoading] = useState(true);
  const restoreAccessToken = useRecoilValueLoadable(restoreAccessTokenLoadable);
  const router = useRouter();

  useEffect(() => {
    if (!accessToken) {
      restoreAccessToken.toPromise().then((newAccessToken) => {
        if (!newAccessToken) {
          alert('Please Login');
          router.push('/signin');
        }
      });
    }
  }, []);

  return {
    isLoading,
  };
}
