import { FC } from "react"
import { User as UserProps } from "../../../store/features/app/typings"

export const User: FC<UserProps> = ({ id, lastName, firstName, middleName, role }) => {
  return (
    <span>
      {
        `
      ${id}
      ${lastName}
      ${firstName}
      ${middleName}
      ${role}
      `
      }
    </span>
  )
}
