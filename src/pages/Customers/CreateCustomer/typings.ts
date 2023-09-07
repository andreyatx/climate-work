import { Address, Customer } from "../../../store/features/app/typings";

type NewAddress = Omit<Address, "id">;

export type NewCustomer = Omit<Customer, "id" | "addresses"> & {
  [key: string]: string | NewAddress[];
  addresses: NewAddress[];
};

export type NewCustomerFields = Omit<NewCustomer, "addresses"> & {
  [key: string]: string;
  addresses: string;
};
