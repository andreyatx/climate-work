import { Box, Button, Container } from "@mui/material"
import { api } from "../../api";
import { useState } from "react";

export const Users = () => {
  const [users, setUsers] = useState<Array<unknown> | null>(null);

  const submitHandler = async () => {
    const res = await api.getAllUsers();
    console.log(res);

    await setUsers(res);
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
          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => submitHandler()}
          >
            Получить список пользователей
          </Button>
          {users && users?.length > 0 && <h1>Пользователи:</h1>}
        </Box>
      </Box>

    </Container>
  )
}
