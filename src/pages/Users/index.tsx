import { Box, Button, Container } from "@mui/material"
import { appThunks } from "../../store/features/app/appThunks";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { appSelectors } from "../../store/features";
import { User } from "./User";
import { CreateUser } from "./CreateUser";

export const Users = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(appSelectors.users);

  const submitHandler = async () => {
    dispatch(appThunks.getUsers({ skip: 0, take: 10 }))
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
            alignItems: 'flex-start',
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
          {users && users?.length > 0 && <><h1>Пользователи:</h1>{users.map(user => <User key={user.id} {...user} />)}</>}
        </Box>
        <CreateUser />
      </Box>

    </Container>
  )
}
