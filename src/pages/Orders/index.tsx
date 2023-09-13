import { Box, Button, Container, Modal } from "@mui/material"
import { appSelectors } from "../../store/features";
import { appThunks } from "../../store/features/app/appThunks";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect, useState } from "react";
import { CreateOrder } from "./CreateOrder";
import { DEFAULT_REQUEST } from "../../config/const";
import { renderOrders } from "./utils";



export const Orders = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useAppDispatch();
  const orders = useAppSelector(appSelectors.orders);

  useEffect(() => {
    dispatch(appThunks.getOrders(DEFAULT_REQUEST))

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
            width: '100%'
          }}
        >
          <Button onClick={handleOpen} variant="contained" sx={{ alignSelf: 'flex-end', mt: '12px' }}>Создать заказ</Button>
          <Modal
            open={open}
            onClose={handleClose}
          >
            <CreateOrder />
          </Modal>
          {renderOrders(orders)}
        </Box>
      </Box>

    </Container>
  )
}
