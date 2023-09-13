import { Box, Button, Container, FormControl, InputLabel, MenuItem, Modal, Select, SelectChangeEvent } from "@mui/material"
import { appSelectors } from "../../store/features";
import { appThunks } from "../../store/features/app/appThunks";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect, useState } from "react";
import { CreateOrder } from "./CreateOrder";
import { DEFAULT_REQUEST } from "../../config/const";
import { renderOrders } from "./utils";



export const Orders = () => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<0 | 1 | 2 | 3>(1);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useAppDispatch();
  const orders = useAppSelector(appSelectors.orders);

  const handleChange = (event: SelectChangeEvent) => {
    setStatus(+event.target.value as 0 | 1 | 2 | 3);
  };

  useEffect(() => {
    dispatch(appThunks.getOrders({ ...DEFAULT_REQUEST, status }))

  }, [dispatch, status])


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
          <FormControl variant="standard" sx={{ minWidth: '100px' }}>
            <InputLabel id="demo-simple-select-label">Статус заказа</InputLabel>
            <Select
              value={status.toString()}
              label="Статус"
              onChange={handleChange}
              sx={{ color: 'black' }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
            >
              <MenuItem value={0}>Новый</MenuItem>
              <MenuItem value={1}>Назначен</MenuItem>
              <MenuItem value={2}>Выполнен</MenuItem>
              <MenuItem value={3}>Отменён</MenuItem>
            </Select>
          </FormControl>

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
