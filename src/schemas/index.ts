import { object, string, number, ref, boolean, mixed, InferType } from "yup";
import countries from "../util/countries";

export const schemaNewUser = object().shape({
  nameInput: string()
    .required("This field is required")
    .test("empty", "Name is required", (value) => value !== ""),
  ageInput: number()
    .min(18, "Your age must be between 18 and 100")
    .max(100, "Your age must be between 18 and 100")
    .typeError("This field is required")
    .positive("Please enter a valid age")
    .integer("Please enter a valid age")
    .required("This field is required"),
  emailInput: string()
    .email("Please enter a valid email")
    .required("This field is required"),
  password: string()
    .required("This field is required")
    .min(8, "Password must be 8 characters long")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol")
    .test("empty", "This field is required", (value) => value !== ""),
  confirmPassword: string()
    .required("Please confirm your password")
    .oneOf([ref("password")], "Passwords must match"),
  gender: string().required("This field is required"),
  termsAndConditions: boolean()
    .required("You must accept the terms and conditions")
    .oneOf([true], "You must accept the terms and conditions"),
  image: mixed<File>()
    .required("Image is required")
    // eslint-disable-next-line consistent-return
    .test("fileSize", "Image size should be less than 1 MB", (value) => {
      if (value instanceof File) {
        return value && value.size <= 1048576;
      }
    })
    // eslint-disable-next-line consistent-return
    .test("fileType", "Picture should be a png or jpeg file", (value) => {
      if (value instanceof File) {
        return value && ["image/png", "image/jpeg"].includes(value.type);
      }
    }),
  country: string()
    .required("This field is required")
    .oneOf(["", ...countries], "Such country does not exist")
    .test("empty", "Country is required", (value) => value !== ""),
});

type Data = InferType<typeof schemaNewUser>;

export type ErrorsForm = Partial<Record<keyof Data, string>>;
export default schemaNewUser;
