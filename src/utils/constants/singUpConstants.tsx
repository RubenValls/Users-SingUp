import * as Yup from "yup";

export const initialValues = {
    name: "",
    surname: "",
    email: "", 
    phone: "",
    city: "",
    address: "",
    password: ""
}

export const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required("Name is a required field"),
    surname: Yup.string()
        .required("Surname is a required field"),
    email: Yup.string()
        .required("Email is a required field")
        .email("Invalid email format"),
    phone: Yup.string()
        .required("Phone is a required field"),
    city: Yup.string()
        .required("City Name is a required field"),
    address: Yup.string()
        .required("Address is a required field"),
    password: Yup.string()
        .required("Password is a required field")
        .min(8, "Password must be at least 8 characters"),
});