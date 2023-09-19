import { Button, TextField, Typography } from "@mui/material";
import { FC, useState } from "react";
import { api } from "../../../api";
import { CreateForm } from "../../../components/CreateForm";
import { useAppDispatch } from "../../../store/hooks";
import { appActions } from "../../../store/features";
import { EditUserData } from "../../../api/types";
import { User } from "../../../store/features/app/typings";
import { Modal } from "../../../components/Modal";

type EditUserProps = {
  user: User;
}

export type NewUser = {
  [key: string]: string;
  firstName: string;
  lastName: string;
  middleName: string;
  login: string;
  password: string;
};

export const userFields: {
  [key: string]: string;
} = {
  lastName: "Фамилия",
  firstName: "Имя",
  middleName: "Отчество",
  role: "Роль",
};

export const EditUser: FC<EditUserProps> = ({ user }) => {
  const initialForm: EditUserData = {
    lastName: user.lastName,
    firstName: user.firstName,
    middleName: user.middleName,
    role: 0
  };

  const [formData, setFormData] = useState<EditUserData>(initialForm);
  const dispatch = useAppDispatch();

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const request = { ...formData, role: Number(formData.role) }
    api.editUser(user.id, request);

    setFormData(initialForm);
    dispatch(appActions.closeModal())
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
        type='text'
        name={prop}
        value={formData[prop]}
        onChange={changeHandler}
      />)
  }

  return (
    <Modal>
      <CreateForm onSubmit={submitHandler}>
        <Typography variant="h4">Редактировать пользователя</Typography>
        {userFieldsArray.map(field => field)}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          className="text-black"
        >
          Редактировать
        </Button>
      </CreateForm>
    </Modal>
  )
}
