import { Box } from "@mui/material";
import { Team } from "../../store/features/app/typings";
import { Card } from "../../components/Card";
import { Paths } from "../../routes/router";


export const TeamList = ({ teams }: { teams: [] | Team[] }) => {

  if (!(teams && teams?.length)) {
    return null
  }

  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', gap: '20px', mt: '20px', justifyContent: { md: 'flex-start', xs: 'space-between' } }}>
      {
        teams.map(({ id, name }) =>
          <Card key={id} subtitle={`id: ${id}`} title={name} to={`${Paths.Teams}/${id}`} />)
      }
    </Box>
  )
}
