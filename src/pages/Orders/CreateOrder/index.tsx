import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { api } from "../../../api";
import { orderFields } from "../const";
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

export const CreateOrder = () => {
  const [formData, setFormData] = useState<{ [key: string]: string | number }>(initialForm);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    api.orderCreate(formData);

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
  for (const prop in orderFields) {
    orderFieldsArray.push(
      <TextField
        key={prop}
        margin="normal"
        required
        fullWidth
        id={prop}
        label={orderFields[prop]}
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
      <h1 className={styles.newOrder}>Новый заказ</h1>
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
    </Box>
  )
}

