import { Box, Button, Container, } from "@mui/material"
import { CreateOrder } from "./CreateOrder"
import { appSelectors } from "../../store/features";
import { appThunks } from "../../store/features/app/appThunks";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Order } from "./Order";


export const Orders = () => {
  const dispatch = useAppDispatch();
  const orders = useAppSelector(appSelectors.orders);

  const submitHandler = async () => {
    dispatch(appThunks.getUsers({ skip: 0, take: 10 }))
  }


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
          }}
        >
          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => submitHandler()}
          >
            Получить список заказов
          </Button>
          {orders && orders?.length > 0 && <><h1>Заказы:</h1>{orders.map(order => <Order key={order.description} {...order} />)}</>}
        </Box>
        <CreateOrder />
      </Box>

    </Container>
  )
}
