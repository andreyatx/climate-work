import { Container, Box, Typography, TextField, Button, Link as MuiLink } from "@mui/material";
import { Paths } from "../../routes/router";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const submitHandler = () => { console.log('submitted') };

  return (<Container component="main" maxWidth="xs">
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography component="h1" variant="h5">
        Регистрация
      </Typography>
      <Box component="form" onSubmit={submitHandler} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="login"
          label="Логин"
          name="login"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Пароль"
          type="password"
          id="password"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="lastname"
          label="Фамилия"
          type="text"
          id="lastname"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="firstname"
          label="Имя"
          type="text"
          id="firstname"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="middlename"
          label="Отчество"
          type="text"
          id="middlename"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          className="text-black"
        >
          Зарегистрироваться
        </Button>

        <MuiLink component={Link} to={Paths.SignIn} variant="body2">
          Уже зарегистрированы? Войти
        </MuiLink>
      </Box>
    </Box>
  </Container>)
};
