import { Container, Box, Typography, TextField, Button, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SignInData } from "../../api/types";
import { api } from "../../api";
import { Paths } from "../../routes/root";

const initialState: SignInData = {
  login: '',
  password: ''
}

export const SignIn = () => {
  const [formData, setFormData] = useState<SignInData>(initialState);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    api.signin(formData);
  }

  const changeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prevForm => ({
      ...prevForm,
      [name]: value,
    }))
  };


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
        Вход
      </Typography>
      <Box component="form" onSubmit={submitHandler} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="login"
          label="Логин"
          name="login"
          value={formData.login}
          onChange={changeHandler}
          autoComplete='off'
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
          onChange={changeHandler}
          autoComplete='off'
          value={formData.password}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          className="text-black"
        >
          Войти
        </Button>

        <MuiLink
          component={Link} to={Paths.SignUp} variant="body2">
          Нет аккаунта? Зарегистрироваться
        </MuiLink>

      </Box>
    </Box>
  </Container>)
};
