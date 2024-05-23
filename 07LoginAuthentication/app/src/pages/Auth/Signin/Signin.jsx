import { Field, Formik, Form, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { object, string } from "yup";

const Signin = () => {
  const signinValidationSchema = object({
    email: string()
      .email("Invalid email address")
      .required("Email is required"),
    password: string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  return (
    <div className="bg-slate-100 h-screen w-full flex justify-center items-center">
      <div className="bg-white px-5 py-6 w-[30rem] max-w-[30rem] flex rounded-lg justify-center items-center shadow-lg">
        <div className="w-full h-full">
          <div className="flex gap-3 flex-col mb-8">
            <h1 className="text-3xl max-sm:text-[22px] font-semibold leading-tight ">
              Welcome to Crypto App
            </h1>
            <p className="text-sm text-gray-600">
              Enter your credentials to access the account.
            </p>
          </div>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={async (values) => {
              console.log(values);
            }}
            validationSchema={signinValidationSchema}
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
                    className="w-full text-gray-600 px-4 py-2 rounded-lg mt-2 border-2 outline-none border-gray-200 focus:ring-0"
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-red-500 text-sm mt-1 ml-2"
                  />
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="password"
                    className="block text-md text-gray-600 font-medium"
                  >
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                    autoComplete="off"
                    className="w-full text-gray-600 px-4 py-2 rounded-lg mt-2 border-2 outline-none border-gray-200 focus:ring-0"
                  />
                  <ErrorMessage
                    name="password"
                    component="p"
                    className="text-red-500 text-sm mt-1 ml-2"
                  />
                </div>

                <div className="text-right mt-6 flex justify-between items-center mb-6">
                  <div className="flex items-center">
                    <Field
                      type="checkbox"
                      name="remember"
                      id="remember"
                      className="w-4 h-4 rounded-sm outline-none focus:ring-white"
                    />
                    <label
                      htmlFor="remember"
                      defaultChecked
                      className="ml-2 text-sm font-medium text-gray-600 cursor-default"
                    >
                      Remember me
                    </label>
                  </div>
                  <Link
                    to={"/forgot_Password"}
                    className="text-sm font-medium text-violet-700 cursor-pointer hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="bg-[#D8DDE2] text-[#797E82] h-10 w-full flex justify-center items-center p-2 font-[500] text-sm rounded-lg transition-all hover:bg-indigo-500 hover:text-white focus:bg-indigo-500 focus:text-white"
                >
                  Log In
                </button>
              </Form>
            }
          </Formik>
          <Link to={"/signup"}>
            <button className="bg-[#D8DDE2] text-[#797E82] h-10 w-full flex justify-center items-center p-2 font-[500] text-sm rounded-lg transition-all hover:bg-indigo-500 hover:text-white focus:bg-indigo-500 focus:text-white mt-3">
              Create New Account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
