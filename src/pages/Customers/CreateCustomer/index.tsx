import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { api } from "../../../api";
import { NewCustomer, NewCustomerFields } from "./typings";
import { CreateForm } from "../../../components/CreateForm";

const initialForm: NewCustomer = {
  lastName: "",
  firstName: "",
  middleName: "",
  address: "",
  phone: "",
};

export const customerFields: NewCustomerFields = {
  lastName: "Фамилия",
  firstName: "Имя",
  middleName: "Отчество",
  address: 'Адрес',
  phone: 'Телефон'
};

export const CreateCustomer = () => {
  const [formData, setFormData] = useState<NewCustomer>(initialForm);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    api.createCustomer(formData);

    setFormData(initialForm);
  }

  const changeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prevForm => ({
      ...prevForm,
      [name]: value,
    }))
  };

  const customerFieldsArray = [];
  for (const prop in customerFields) {
    customerFieldsArray.push(
      <TextField
        key={prop}
        margin="normal"
        required
        fullWidth
        id={prop}
        label={customerFields[prop]}
        name={prop}
        value={formData[prop]}
        onChange={changeHandler}
      />)
  }
  return (
    <CreateForm onSubmit={submitHandler}>
      <Typography variant="h4">Новый заказчик</Typography>
      {customerFieldsArray.map(field => field)}
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
