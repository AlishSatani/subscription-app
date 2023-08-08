import { object, string } from "yup";
import { loginFields } from "./loginSchema";

const registerFields = {
  ...loginFields,
  id: string().trim(),
  name: string().trim().ensure().required("Name is required"),
};

export const RegisterSchema = object().shape(registerFields).required();
