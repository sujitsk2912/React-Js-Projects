import { Button, useToast } from "@chakra-ui/react";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { GoArrowLeft } from "react-icons/go";
// import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { object, string } from "yup";
// import { sendForgotMail } from "../../../api/query/userQuery";
// import { useContext } from "react";
// import { UrlContext } from "./UrlContext";

const ForgotPassword = () => {
  const forgetPasswordValidationSchema = object({
    email: string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  let email = "";
  const toast = useToast();
  const navigate = useNavigate();
  
  // const { setUrl } = useContext(UrlContext);

  // const urlPattern = /(https?:\/\/[^\s]+)/g;
  // const { mutate, isLoading } = useMutation({
  //   mutationKey: ["forgot-password"],
  //   mutationFn: sendForgotMail,
  //   onSuccess: (data) => {
  //      const extractUrl = data.message.match(urlPattern);
  //      setUrl(extractUrl ? extractUrl[0] : null);
  //     if (email) {
  //       navigate(`/verify_Password/${email}`);
  //     }
  //   },
  //   onError: (error) => {
  //     toast({
  //       title: "Signin Error",
  //       description: error.message,
  //       status: "error",
  //     });
  //   },
  //   enabled: !!email,
  // });
  // console.log(url);

  return (
    <div className="bg-slate-100 h-screen w-full flex justify-center items-center">
      <div className="bg-white px-5 py-6 w-[30rem] max-w-[30rem] flex rounded-lg justify-center items-center shadow-lg">
        <div className="w-full h-full">
          <div className="flex gap-3 flex-col mb-8">
            <Link to={"/signin"}>
              <GoArrowLeft className="text-4xl cursor-pointer" />
            </Link>

            <h1 className="text-3xl max-sm:text-[22px] font-semibold leading-tight ">
              Forgot Password
            </h1>
            <p className="text-sm text-gray-600">
              Enter your email address for which account you want to reset your
              password.
            </p>
          </div>
          <Formik
            initialValues={{
              email: "",
            }}
            onSubmit={async (values) => {
              email = document.getElementById("email").value;
              // mutate({ email: values.email });
            }}
            validationSchema={forgetPasswordValidationSchema}
          >
            {
              <Form>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-md text-gray-600 font-medium"
                  >
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    placeholder="name@email.com"
                    autoComplete="off"
                    className="w-full text-gray-600 px-4 py-2 rounded-lg mt-2 border-2 outline-none border-gray-200  focus:ring-0"
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-red-500 text-sm mt-1 ml-2"
                  />
                </div>

                <Button
                  // isLoading={isLoading}
                  type="submit"
                  mt="5"
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
                  bg="rgb(79 70 229)"
                  color="#fff"
                  _hover={{
                    bg: "#fff",
                    color: "rgb(79 70 229)",
                    border: "1px solid rgb(79 70 229)",
                  }}
                >
                  Reset Password
                </Button>
              </Form>
            }
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
