import { Box, Container } from "@mui/material"
import { appThunks } from "../../store/features/app/appThunks";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { appSelectors } from "../../store/features";
import { Table } from "../../components/Table";
import { useEffect } from "react";

const userFields = { id: 'id', lastName: 'Фамилия', firstName: 'Имя', middleName: 'Отчество', role: 'Роль' };

const requestConfig = {
  skip: 0,
  take: 10
}




export const Users = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(appSelectors.users);

  useEffect(() => {
    dispatch(appThunks.getUsers(requestConfig))


  }, [dispatch])


  // const submitHandler = async () => {
  //   dispatch(appThunks.getUsers({ skip: 0, take: 10 }))
  // }

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
            width: '100%'
          }}

        >
          {/* <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => submitHandler()}
          >
            Получить список пользователей
          </Button> */}
          {users && users?.length ? <Table title="Пользователи" fields={userFields} data={users} /> : null}

          {/* {users && users?.length ? <>
            <Typography variant="h4">Пользователи</Typography>
            <TableContainer >
              <Table>
                <TableHead>
                  <TableRow>
                    {userFields.map(field => <TableCell>{field}</TableCell>)}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {users && users?.length && users.map((user) => (
                    <TableRow
                      key={user.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell>{user.id}</TableCell>
                      <TableCell >
                        {user.lastName}
                      </TableCell>
                      <TableCell>{user.firstName}</TableCell>
                      <TableCell>{user.middleName}</TableCell>
                      <TableCell>{Role[user.role as keyof typeof Role]}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>

              </Table>
            </TableContainer>
          </> : null} */}


        </Box>
        {/* <CreateUser /> */}
      </Box>

    </Container >
  )
}
