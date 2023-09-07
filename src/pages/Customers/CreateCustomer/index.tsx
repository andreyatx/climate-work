import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { api } from "../../../api";
import { NewCustomer, NewCustomerFields } from "./typings";

const initialForm: NewCustomer = {
  lastName: "",
  firstName: "",
  middleName: "",
  addresses: [{
    city: '',
    street: '',
    home: 0,
    room: 0
  }],
  phone: "",
};

export const customerFields: NewCustomerFields = {
  lastName: "Фамилия",
  firstName: "Имя",
  middleName: "Отчество",
  addresses: 'Адреса',
  phone: 'Телефон'
};

export const CreateCustomer = () => {
  const [formData, setFormData] = useState<NewCustomer>(initialForm);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // api.createUser(formData);

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
      </Box>
    </Box>

  )
}
