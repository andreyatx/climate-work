import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { api } from "../../../api";
import { CreateForm } from "../../../components/CreateForm";
import { useAppDispatch } from "../../../store/hooks";
import { appActions, appSelectors } from "../../../store/features";

export type NewUser = {
  [key: string]: string;
  firstName: string;
  lastName: string;
  middleName: string;
  login: string;
  password: string;
};


const initialForm: NewUser = {
  lastName: "",
  firstName: "",
  middleName: "",
  login: "",
  password: "",
};

export const userFields: NewUser = {
  lastName: "Фамилия",
  firstName: "Имя",
  middleName: "Отчество",
  login: "Логин",
  password: "Пароль",
};

export const CreateUser = () => {
  const [formData, setFormData] = useState<NewUser>(initialForm);
  const dispatch = useAppDispatch();

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    api.createUser(formData);

    setFormData(initialForm);
    dispatch(appActions.closeModal)
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
        sx={{
          width: '100%'
        }}
        key={prop}
        margin="normal"
        required={true}
        id={prop}
        label={userFields[prop]}
        type={prop === 'password' ? 'password' : 'text'
        }
        name={prop}
        value={formData[prop]}
        onChange={changeHandler}
      />)
  }
  return (
    <CreateForm onSubmit={submitHandler}>
      <Typography variant="h4">Новый пользователь</Typography>
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
    </CreateForm>
  )
}
