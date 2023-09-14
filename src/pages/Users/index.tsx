import { Box, Button, Container } from "@mui/material"
import { appThunks } from "../../store/features/app/appThunks";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { appActions, appSelectors } from "../../store/features";
import { useEffect } from "react";
import { DEFAULT_REQUEST } from "../../config/const";
import { CreateUser } from "./CreateUser";
import { UserList } from "./UserList";
import { EditUser } from "./EditUser";

export const Users = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(appSelectors.users);
  const { isEditing, currentUser } = useAppSelector(appSelectors.all);


  useEffect(() => {
    dispatch(appThunks.getUsers(DEFAULT_REQUEST))
  }, [dispatch])


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
            width: '100%',
          }}
        >
          <Button variant="contained" sx={{ alignSelf: 'flex-end', mt: '12px' }} onClick={() => { dispatch(appActions.setIsEditing(false)); dispatch(appActions.toggleModal()) }}>Создать пользователя</Button>
          <UserList users={users} />
          {isEditing && currentUser ? <EditUser user={currentUser} /> : <CreateUser />}
        </Box>
      </Box>
    </Container >
  )
}
