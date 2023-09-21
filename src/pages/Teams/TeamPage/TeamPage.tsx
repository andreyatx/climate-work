import { Card, CircularProgress, Container, IconButton, List, ListItem, ListItemButton, Typography } from "@mui/material";
import { FC, useCallback, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../../../store/hooks";
import { appThunks } from "../../../store/features/app/appThunks";
import { Team } from "../../../store/features/app/typings";
import { Role } from "../../../config/const";
import { ArrowBack, Delete, Person } from "@mui/icons-material";
import { Paths } from "../../../routes/router";

export const TeamPage: FC = () => {
  const { teamId } = useParams();
  const dispatch = useAppDispatch();
  const [team, setTeam] = useState<Team | null>(null);
  const navigate = useNavigate();

  const deleteHandler = (id: number | string) => {
    dispatch(appThunks.deleteTeamById(id));
    navigate(Paths.Teams);
  };

  const fetchTeam = useCallback(async () => {
    if (teamId) {
      const response: Team = (await dispatch(appThunks.getTeamById(+teamId)).unwrap()).data;
      console.log(response);
      setTeam(response);
      return response;
    }
  }, [teamId, dispatch]);

  useEffect(() => {
    fetchTeam();
  }, [fetchTeam]);

  if (!team) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', mt: '50px' }}>
        <CircularProgress />
      </Container>)
  }

  return (
    <Container sx={{ display: 'flex', justifyContent: 'center' }}>

      <Card sx={{ minWidth: '200px', maxWidth: 'fit-content', padding: '20px', position: 'relative' }}>

        <IconButton onClick={() => navigate(Paths.Teams)} >
          <ArrowBack />
        </IconButton>

        {teamId &&
          <IconButton onClick={() => deleteHandler(teamId)} sx={{ position: 'absolute', right: 6, color: 'red' }}>
            <Delete />
          </IconButton>}

        <Typography variant="subtitle2">id: {team.id}</Typography>
        <Typography variant="h5" gutterBottom>{team.name}</Typography>
        <Typography variant="subtitle1">Участники:</Typography>
        <List>
          {team.users.map(({ lastName, firstName, middleName, role }) =>
            <ListItem sx={{ pl: 0 }}>
              <ListItemButton sx={{ pl: '4px', borderRadius: '10px' }} >
                <Person sx={{ mr: '8px' }} />
                {`${lastName} ${firstName} ${middleName} ${Role[role as keyof typeof Role]}`}
              </ListItemButton>
            </ListItem>)}
        </List>
      </Card >
    </Container >
  )
}
