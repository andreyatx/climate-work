import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { api } from "../../../api";
import styles from './styles.module.css';
import { ORDER_FIELDS } from "../utils";

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
  for (const prop in ORDER_FIELDS) {
    orderFieldsArray.push(
      <TextField
        key={prop}
        margin="normal"
        required
        fullWidth
        id={prop}
        label={ORDER_FIELDS[prop]}
        name={prop}
        value={formData[prop]}
        onChange={changeHandler}
      />)
  }

  return (
    <Box sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      bgcolor: 'background.paper',
      boxShadow: 24,
      p: 4,
    }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '540px'
        }}
        component="form" onSubmit={submitHandler} noValidate
      >
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
      </Box>
    </Box>
  )
}

