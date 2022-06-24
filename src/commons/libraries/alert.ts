import { useRouter } from 'next/router';

export const LoginAlert = () => {
  const router = useRouter();
  alert('Please use after login');
  router.push('/signin');
};
