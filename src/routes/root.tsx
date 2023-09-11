import { type FC } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Link } from 'react-router-dom';

export enum Paths {
  Home = '/',
  SignIn = '/sign-in',
  SignUp = '/sign-up',
  Users = '/users',
  Orders = '/orders',
  Customers = '/customers',
  Teams = '/teams'
}

const navItems: {
  [key: string]: string
} = {
  'Пользователи': Paths.Users,
  'Заказы': Paths.Orders,
  'Заказчики': Paths.Customers,
  'Команды': Paths.Teams
}

export const Root: FC = () => {

  let links = [];

  for (const prop in navItems) {
    links.push(<Link style={{
      color: 'white',
      textDecoration: 'none',
      marginRight: '6px'
    }} key={prop} id={prop} to={navItems[prop]}>{prop}</Link>)
  }

  return <>
    <AppBar component="nav" sx={{ position: 'relative' }}>
      <Toolbar>

        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          Climate Work
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {links.map((item) => (item))}
        </Box>
      </Toolbar>
    </AppBar>

    <Outlet />;
  </>
};