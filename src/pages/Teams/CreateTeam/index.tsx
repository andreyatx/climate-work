import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { api } from "../../../api";
import { CreateForm } from "../../../components/CreateForm";
import { Modal } from "../../../components/Modal";

type NewTeam = {
  [key: string]: string;
  name: string
}

const initialForm: NewTeam = {
  name: ''
};

export const teamFields: NewTeam = {
  name: 'Название команды'
};

export const CreateTeam = () => {
  const [formData, setFormData] = useState<NewTeam>(initialForm);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    api.createTeam(formData);

    setFormData(initialForm);
  }

  const changeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prevForm => ({
      ...prevForm,
      [name]: value,
    }))
  };

  const teamFieldsArray = [];
  for (const prop in teamFields) {
    teamFieldsArray.push(
      <TextField
        key={prop}
        margin="normal"
        required
        fullWidth
        id={prop}
        label={teamFields[prop]}
        name={prop}
        value={formData[prop]}
        onChange={changeHandler}
      />)
  }
  return (
    <Modal>
      <CreateForm onSubmit={submitHandler}>
        <Typography variant="h4">Новая команда</Typography>
        {teamFieldsArray.map(field => field)}
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
    </Modal>
  )
}
