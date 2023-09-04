import { FC } from "react"
import { Order as OrderProps } from "../../../store/features/app/typings"

export const Order: FC<OrderProps> = ({ description, cost, startOfWork, customerId, addressId, teamId }) => {
  return (
    <>
      <span>Описание {description}</span>
      <span>Стоимость {cost}</span>
      <span>Начало работы {startOfWork}</span>
      <span>id заказчика {customerId}</span>
      <span>id адреса {addressId}</span>
      <span>id команлы {teamId}</span>
      <hr />
    </>
  )
}
