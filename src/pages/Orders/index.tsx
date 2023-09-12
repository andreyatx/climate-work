import { Box, Button, Container, Modal } from "@mui/material"
import { appSelectors } from "../../store/features";
import { appThunks } from "../../store/features/app/appThunks";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Table } from "../../components/Table";
import { useEffect, useState } from "react";
import { CreateOrder } from "./CreateOrder";
import { DEFAULT_REQUEST } from "../../config/const";

export const orderFields: {
  [key: string]: string;
} = {
  id: "id",
  status: "Статус",
  description: "Описание",
  cost: "Стоимость",
  startOfWork: "Начало работы",
  completed: "Выполнен",
  customer: "Заказчик",
  address: "Адрес",
};

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
          {orders && orders?.length > 0 && <Table fields={orderFields} data={orders} title="Заказы" />}
        </Box>
      </Box>

    </Container>
  )
}
