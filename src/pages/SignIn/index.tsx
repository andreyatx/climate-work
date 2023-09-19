/* eslint-disable no-restricted-globals */
import { Container, Box, Typography, TextField, Button, Link as MuiLink, FormControlLabel, Checkbox } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { SignInData } from "../../api/types";
import { Paths } from "../../routes/router";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { appThunks } from "../../store/features/app/appThunks";
import { appSelectors } from "../../store/features";

const initialState: SignInData = {
  login: '',
  password: ''
}


export const SignIn = () => {
  const [formData, setFormData] = useState<SignInData>(initialState);
  const [isStayOnline, setIsStayOnline] = useState<boolean>(false);
  const { isAuth, isAppLoading } = useAppSelector(appSelectors.all);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();


  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem('IS_STAY_ONLINE', isStayOnline.toString());
    dispatch(appThunks.signIn(formData));
  }

  const checkboxHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsStayOnline(event.target.checked);
  }

  const changeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prevForm => ({
      ...prevForm,
      [name]: value,
    }))
  };

  useEffect(() => {
    if (isAuth && !isAppLoading) {
      navigate(Paths.Users);
    }
  }, [isAppLoading, isAuth, navigate]);

  return (
    <Container component="main" maxWidth="xs">
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
        <Box component="form" onSubmit={submitHandler} sx={{ mt: 1 }}>
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
          <FormControlLabel control={
            <Checkbox
              checked={isStayOnline}
              onChange={checkboxHandler}
            />}
            label="Оставаться в сети" />
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
    </Container>
  )
};
