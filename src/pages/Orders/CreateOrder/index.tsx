import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { api } from "../../../api";
import { CreateForm } from "../../../components/CreateForm";
import styles from './styles.module.css';

const initialForm = {
  skip: 0,
  take: 10,
  description: "",
  cost: "",
  startOfWork: "",
  customerId: "",
  addressId: "",
  teamId: "",
};

const ORDER_FORM_FIELDS: {
  [key: string]: string
} = {
  description: 'Описание',
  cost: 'Стоимость',
  startOfWork: 'Начало работы',
  customerId: 'id заказчика',
  addressId: 'id адреса',
  teamId: 'id команды'
}

export const CreateOrder = () => {
  const [formData, setFormData] = useState<{ [key: string]: string | number }>(initialForm);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    api.createOrder(formData);

    setFormData(initialForm);
  }

  const changeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prevForm => ({
      ...prevForm,
      [name]: value,
    }))
  };

  const orderFieldsArray = [];
  for (const prop in ORDER_FORM_FIELDS) {
    orderFieldsArray.push(
      <TextField
        key={prop}
        margin="normal"
        required
        fullWidth
        id={prop}
        label={ORDER_FORM_FIELDS[prop]}
        name={prop}
        value={formData[prop]}
        onChange={changeHandler}
      />)
  }

  return (
    <CreateForm onSubmit={submitHandler}>
      <Typography variant="h4" className={styles.newOrder}>Новый заказ</Typography>
      {orderFieldsArray.map(field => field)}
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
