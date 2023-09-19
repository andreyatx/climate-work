import { useEffect, type FC } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Paths } from './router';

export const Root: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('Access-Token')) {
      navigate(Paths.Users);
      console.log('already authorized');
    } else {
      navigate(Paths.SignIn);
      console.log('unauthorized');
    }

  }, [navigate]);
  return <Outlet />
};