import { ErrorMessage, Field, Formik, Form } from "formik";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import { object, string } from "yup";

const ForgotPassword = () => {
  const forgetPasswordValidationSchema = object({
    email: string()
      .email("Invalid email address")
      .required("Email is required"),
  });
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
              console.log(values);
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

                <button
                  type="submit"
                  className="bg-[#D8DDE2] text-[#797E82] h-10 w-full flex justify-center items-center p-2 font-[500] text-sm rounded-lg transition-all hover:bg-indigo-500 hover:text-white focus:bg-indigo-500 focus:text-white mt-5"
                >
                  Reset Password
                </button>
              </Form>
            }
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
