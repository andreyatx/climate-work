import { Box, Button, Container, Modal } from "@mui/material"
import { appThunks } from "../../store/features/app/appThunks";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { appSelectors } from "../../store/features";
import { Table } from "../../components/Table";
import { useEffect, useState } from "react";
import { CreateCustomer } from "./CreateCustomer";
import { DEFAULT_REQUEST } from "../../config/const";

const customerFields = { id: 'id', lastName: 'Фамилия', firstName: 'Имя', middleName: 'Отчество', phone: 'Телефон', addresses: 'Адреса', };

export const Customers = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useAppDispatch();
  const customers = useAppSelector(appSelectors.customers);

  useEffect(() => {
    dispatch(appThunks.getCustomers(DEFAULT_REQUEST))
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
          <Button variant="contained" sx={{ alignSelf: 'flex-end', mt: '12px' }} onClick={handleOpen}>Создать заказчика</Button>
          <Modal
            open={open}
            onClose={handleClose}
          >
            <CreateCustomer />
          </Modal>
          {customers && customers?.length ? <Table title="Заказчики" fields={customerFields} data={customers} /> : null}
        </Box>
      </Box>
    </Container >
  )
}
