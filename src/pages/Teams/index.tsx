import { Box, Button, Container } from "@mui/material";
import { appThunks } from "../../store/features/app/appThunks";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { appActions, appSelectors } from "../../store/features";
import { useEffect } from "react";
import { CreateTeam } from "./CreateTeam";
import { DEFAULT_REQUEST } from "../../config/const";
import { TeamList } from "./TeamList";
import { EditTeam } from "./EditTeam";

export const Teams = () => {
  const dispatch = useAppDispatch();
  const teams = useAppSelector(appSelectors.teams);
  const { isEditing, currentTeam } = useAppSelector(appSelectors.all);

  console.log(isEditing, currentTeam);


  useEffect(() => {
    dispatch(appThunks.getTeams(DEFAULT_REQUEST));
  }, [dispatch]);

  return (
    <Container component="main" maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          paddingInline: "10px",
          borderRadius: "6px",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          <Button
            variant="contained"
            sx={{ alignSelf: "flex-end", mt: "12px" }}
            onClick={() => {
              dispatch(appActions.setIsEditing(false));
              dispatch(appActions.toggleModal());
            }}
          >
            Создать команду
          </Button>
          <TeamList teams={teams} />
          {isEditing && currentTeam ? <EditTeam /> : <CreateTeam />}
        </Box>
      </Box>
    </Container>
  );
};
