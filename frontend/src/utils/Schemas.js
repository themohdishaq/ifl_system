import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
  phone_no: Yup.string().required("Required"),
  cnic: Yup.string().required("Required"),
  admin_role: Yup.string().required("Required"),
  profession: Yup.string().required("Required"),
  class_level: Yup.string().required("Required"),
  institution: Yup.string().required("Required"),
});

const StudentSignupSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
  phone_no: Yup.string().required("Required"),
  cnic: Yup.string().required("Required"),
  class_level: Yup.string().required("Required"),
  institution: Yup.string().required("Required"),
});

const DonorSignupSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
  phone_no: Yup.string().required("Required"),
  cnic: Yup.string().required("Required"),
  profession: Yup.string().required("Required"),
});

const AdminSignupSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
  admin_role: Yup.string().required("Required"),
});

export {LoginSchema, SignupSchema, StudentSignupSchema, DonorSignupSchema, AdminSignupSchema};