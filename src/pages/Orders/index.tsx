import { Box, Button, Container, TextField } from "@mui/material"
import { orderFields } from "./const"
import styles from './styles.module.css';
import { api } from "../../api";
import { useState } from "react";

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

export const Orders = () => {
  const [formData, setFormData] = useState<{ [key: string]: string | number }>(initialForm);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    api.orderCreate(formData);
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
    <Container component="main" maxWidth="xl">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          paddingInline: '10px',
          borderRadius: '6px',
          boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px;'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h1 >Заказы:</h1>
        </Box>
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


      </Box>

    </Container>
  )
}
