import { Customer } from "../../../store/features/app/typings";

export type NewCustomer = Omit<Customer, "id" | "addresses"> & {
  [key: string]: string;
};

export type NewCustomerFields = Omit<NewCustomer, "addresses"> & {
  [key: string]: string;
};
