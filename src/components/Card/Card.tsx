import { Card as MuiCard, CardContent, Typography, CardActions, Button } from "@mui/material";
import { FC, PropsWithChildren } from "react";

type CardProps = {
  subtitle?: string;
  title?: string;
}

export const Card: FC<PropsWithChildren<CardProps>> = ({ subtitle, title, children }) => {
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
      <CardActions>
        <Button size="small">Подробнее</Button>
      </CardActions>
    </MuiCard>
  );
}
