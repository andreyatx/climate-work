import { AppBar, Toolbar, Typography, Box, Button, CircularProgress } from '@mui/material';
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { Paths } from './router';
import { useAppDispatch } from '../store/hooks';
import { appActions } from '../store/features';
import { Suspense } from 'react';


export const ProtectedRoutes = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const navItems: {
    [key: string]: string
  } = {
    'Пользователи': Paths.Users,
    'Заказы': Paths.Orders,
    'Заказчики': Paths.Customers,
    'Команды': Paths.Teams
  }

  let links = [];

  for (const prop in navItems) {
    links.push(
      <Link style={{
        color: 'white',
        textDecoration: 'none',
        marginRight: '16px'
      }}
        key={prop}
        id={prop}
        to={navItems[prop]}>
        {prop}
      </Link>
    )
  }

  return (
    <>
      <AppBar component="nav" sx={{ position: 'relative' }}>
        <Toolbar sx={{ 'justifyContent': 'space-between' }}>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, 'maxWidth': 'fit-content' }}
          >
            Climate Work
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' }, 'justifySelf': 'flex-start' }}>
            {links.map((item) => (item))}
          </Box>

          <Button
            onClick={() => {
              localStorage.removeItem('Access-Token');
              dispatch(appActions.logout());
              navigate(Paths.SignIn);
            }}
            variant="contained"
            sx={{
              bgcolor: 'ButtonFace',
              color: 'ButtonText',
              fontWeight: 600,
              textTransform: 'none'
            }}>
            Выйти
          </Button>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  )
}
