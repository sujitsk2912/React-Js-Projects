import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, ref, string } from "yup";
// import { signupUser } from "../../../api/query/userQuery";
import { Button, useToast } from "@chakra-ui/react";
// import { useMutation } from "react-query";
// import { useState } from "react";

const Signup = () => {
  let email = "";
  const navigate = useNavigate();
  const toast = useToast();

  // const { mutate, isLoading } = useMutation({
  //   mutationKey: ["signup"],
  //   mutationFn: signupUser,
  //   onSuccess: (data) => {
  //     if (email != "") {
  //       navigate(`/send-verification-mail/${email}`);
  //     }
  //   },
  //   onError: (error) => {
  //     toast({
  //       title: "Signup Error",
  //       description: error.message,
  //       status: "error",
  //     });
  //   },
  //   enabled: !!email,
  // });

  const signupValidationSchema = object({
    firstName: string().required("FirstName is required"),
    lastName: string().required("Lastame is required"),
    email: string()
      .email("Invalid email address")
      .required("Email is required"),
    password: string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    repeatPassword: string()
      .oneOf([ref("password"), null], "Passwords must match")
      .required("Repeat password is required"),
  });

  return (
    <div className="bg-slate-100 h-screen w-full flex justify-center items-center">
      <div className="bg-white px-5 py-6 w-[30rem] max-w-[30rem] flex rounded-lg justify-center items-center shadow-lg">
        <div className="w-full h-full max-sm:mt-20">
          <div className="flex gap-3 flex-col mb-8">
            <h1 className="text-3xl max-sm:text-[22px] font-semibold leading-tight ">
              Welcome to Crypto App
            </h1>
            <p className="text-sm text-gray-600">
              Create a free account by filling data below.
            </p>
          </div>

          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              repeatPassword: "",
            }}
            onSubmit={(values) => {
              // setEmail(values.email);
              email = document.getElementById("email").value;
              // mutate({
              //   firstName: values.firstName,
              //   lastName: values.lastName,
              //   email: values.email,
              //   password: values.password,
              // });
            }}
            validationSchema={signupValidationSchema}
          >
            {
              <Form className="bg-white rounded-lg w-full">
                <div className="mb-5 flex justify-between gap-4 w-full max-sm:flex-col">
                  <div className="w-full">
                    <label
                      htmlFor="firstName"
                      className="block text-md text-gray-600 font-medium"
                    >
                      Firstname
                    </label>
                    <Field
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full text-gray-600 px-4 py-2 rounded-lg mt-2 border-2 outline-none border-gray-200 focus:ring-0"
                      placeholder="James"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="p"
                      className="text-red-500 text-sm mt-1 ml-2"
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="lastName"
                      className="block text-md text-gray-600 font-medium"
                    >
                      Lastname
                    </label>
                    <Field
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full text-gray-600 px-4 py-2 rounded-lg mt-2 border-2 outline-none border-gray-200 focus:ring-0"
                      placeholder="Arthur"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="p"
                      className="text-red-500 text-sm mt-1 ml-2"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="w-full flex flex-col">
                    <label
                      htmlFor="email"
                      className="block text-md text-gray-600 font-medium"
                    >
                      Email
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="w-full text-gray-600 px-4 py-2 rounded-lg mt-2 border-2 outline-none border-gray-200 focus:ring-0"
                      placeholder="name@mail.com"
                    />
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="text-red-500 text-sm mt-1 ml-2"
                    />
                  </div>
                  <div className="w-full flex flex-col">
                    <label
                      htmlFor="password"
                      className="block text-md text-gray-600 font-medium"
                    >
                      Password
                    </label>
                    <Field
                      type="password"
                      id="password"
                      name="password"
                      className="w-full text-gray-600 px-4 py-2 rounded-lg mt-2 border-2 outline-none border-gray-200 focus:ring-0"
                      placeholder="Password"
                    />
                    <ErrorMessage
                      name="password"
                      component="p"
                      className="text-red-500 text-sm mt-1 ml-2"
                    />
                  </div>
                  <div className="w-full flex flex-col">
                    <label
                      htmlFor="repeatPassword"
                      className="block text-md text-gray-600 font-medium"
                    >
                      Repeat Password
                    </label>
                    <Field
                      type="password"
                      id="repeatPassword"
                      name="repeatPassword"
                      className="w-full text-gray-600 px-4 py-2 rounded-lg mt-2 border-2 outline-none border-gray-200 focus:ring-0"
                      placeholder="Repeat Password"
                    />
                    <ErrorMessage
                      name="repeatPassword"
                      component="p"
                      className="text-red-500 text-sm mt-1 ml-2"
                    />
                  </div>
                </div>
                <div className="flex items-start mt-6 mb-6">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      defaultChecked
                      required
                      className="w-4 h-4 rounded-sm outline-none focus:ring-white"
                    />
                  </div>
                  <label
                    htmlFor="terms"
                    className="ms-2 text-sm font-medium text-black whitespace-nowrap"
                  >
                    I agree with
                    <a href="#" className="ms-1 font-medium text-violet-700">
                      Terms & Conditions.
                    </a>
                  </label>
                </div>

                <Button
                  // isLoading={isLoading}
                  type="submit"
                  height="10"
                  width="full"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  padding="2"
                  fontWeight="500"
                  fontSize="sm"
                  borderRadius="lg"
                  transition="all 0.2s"
                  bg="#D8DDE2"
                  color="#797E82"
                  _hover={{ bg: "rgb(79 70 229)", color: "white" }}
                >
                  Create Account
                </Button>

                <div className="mt-4 flex items-center justify-center text-sm font-medium">
                  <p className="text-gray-600">Already have an account?</p>
                  <Link to="/signin">
                    <span className="ml-2 text-violet-700 cursor-pointer">
                      Log In
                    </span>
                  </Link>
                </div>
              </Form>
            }
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Signup;
