const yup = require("yup");

let userRegistrationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, 'Password must be at least 8 characters long!')
    .required("Password is required"),
  firstName: yup
    .string("Enter your first name.")
    .required("First Name is required!"),
  lastName: yup
    .string("Enter your last name.")
    .required("Last Name is required!"),
  phoneNumber: yup
    .string("Enter your phone number")
    .required("Phone number is required"),
  bio: yup.string("Bio have to be a string"),
});

let userLoginSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .min(8, 'Password must be at least 8 characters long!'),
});

let userUpdateSchema = yup.object({
  email: yup.string("Enter your email").email("Enter a valid email"),
  password: yup
    .string("Enter your password")
    .min(8, 'Password must be at least 8 characters long!'),
  firstName: yup.string("Enter your first name."),
  lastName: yup.string("Enter your last name."),
  phoneNumber: yup
    .string("enter your phone number")
    .required("phone number is required"),
  bio: yup.string("enter your phone number"),
});

module.exports = {
  userRegistrationSchema,
  userLoginSchema,
  userUpdateSchema,
};
