import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, ref, string } from "yup";

const ResetPassword = () => {
  const resetPasswordValidationSchema = object({
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
        <div className="w-full h-full">
          <div className="flex gap-3 flex-col mb-6">
            <h1 className="text-3xl max-sm:text-[22px] font-semibold leading-tight">
              Reset Password
            </h1>
            <p className="text-sm text-gray-600">Enter your new password.</p>
          </div>
          <Formik
            initialValues={{
              password: "",
              repeatPassword: "",
            }}
            onSubmit={async (values) => {
              console.log(values);
            }}
            validationSchema={resetPasswordValidationSchema}
          >
            {() => (
              <Form className="w-full">
                <div className="flex flex-col gap-6">
                  <div className="w-full flex flex-col">
                    <label
                      htmlFor="password"
                      className="block text-md text-gray-600 font-medium"
                    >
                      New Password
                    </label>
                    <Field
                      type="password"
                      name="password"
                      id="password"
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
                      Repeat New Password
                    </label>
                    <Field
                      type="password"
                      name="repeatPassword"
                      id="repeatPassword"
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
                <button
                  type="submit"
                  className="bg-[#D8DDE2] text-[#797E82] h-10 w-full flex justify-center items-center p-2 font-[500] text-sm rounded-lg transition-all hover:bg-indigo-500 hover:text-white focus:bg-indigo-500 focus:text-white mt-6"
                >
                  Reset Password
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
