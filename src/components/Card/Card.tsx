import { Card as MuiCard, CardContent, Typography, CardActions, Button } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

type CardProps = {
  subtitle?: string;
  title?: string;
  to?: string;
}

export const Card: FC<PropsWithChildren<CardProps>> = ({ subtitle, title, to, children }) => {
  const navigate = useNavigate();

  return (
    <MuiCard sx={{ minWidth: 150, maxWidth: 'fit-content' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {subtitle}
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        {children}
      </CardContent>
      {to &&
        <CardActions>
          <Button onClick={() => navigate(to)} size="small">Подробнее</Button>
        </CardActions>}

    </MuiCard>
  );
}
