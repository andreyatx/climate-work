import { Box, Button, Divider, List, ListItem, Typography } from "@mui/material";
import { FC } from "react";
import { CreateForm } from "../../../components/CreateForm";
import { useAppSelector } from "../../../store/hooks";
import { appSelectors } from "../../../store/features";

import { Modal } from "../../../components/Modal";

export const EditTeam: FC = () => {
  const { currentTeam } = useAppSelector(appSelectors.all);

  const submitHandler = () => {
    console.log(123);
  }

  return (
    <Modal>
      <CreateForm onSubmit={submitHandler}>
        <Typography variant="h4">Участники команды {currentTeam?.name}</Typography>
        <List sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
          {currentTeam?.users.map(({ id, firstName, lastName, middleName, role }) => {
            return (
              <ListItem>
                <Box>
                  <div>id: {id}</div>
                  <div>Фамилия: {lastName}</div>
                  <div>Имя: {firstName}</div>
                  <div>Отчество: {middleName}</div>
                  <div>Роль: {role}</div>
                  <Divider sx={{ mt: '10px' }} />
                </Box>
              </ListItem>)
          })
          }
        </List>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          className="text-black"
        >
          Редактировать
        </Button>
      </CreateForm>
    </Modal>
  )
}
