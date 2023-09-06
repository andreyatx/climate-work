import { Box, Button, TextField } from "@mui/material";
import { NewUser, userFields } from "./const";
import { useState } from "react";
import { api } from "../../../api";

const initialForm: NewUser = {
  lastName: "",
  firstName: "",
  middleName: "",
  login: "",
  password: "",
};

export const CreateUser = () => {
  const [formData, setFormData] = useState<NewUser>(initialForm);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    api.createUser(formData);

    setFormData(initialForm);
  }

  const changeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prevForm => ({
      ...prevForm,
      [name]: value,
    }))
  };

  const userFieldsArray = [];
  for (const prop in userFields) {
    userFieldsArray.push(
      <TextField
        key={prop}
        margin="normal"
        required
        fullWidth
        id={prop}
        label={userFields[prop]}
        type={prop === 'password' ? 'password' : 'text'}
        name={prop}
        value={formData[prop]}
        onChange={changeHandler}
      />)
  }
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '540px'
      }}
      component="form" onSubmit={submitHandler} noValidate
    >
      <h1>Новый пользователь</h1>
      {userFieldsArray.map(field => field)}
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        className="text-black"
      >
        Создать
      </Button>
    </Box>
  )
}
