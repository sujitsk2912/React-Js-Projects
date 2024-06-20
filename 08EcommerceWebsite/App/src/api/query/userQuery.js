import Axios from "../axios";

const USER_URL = "http://localhost:5000/api/auth";

export const signinUser = async ({ email, password }) => {
  try {
    const { data } = await fetch(`${USER_URL}/signin`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (error) {
    throw Error(error.response.data.message);
  }

  // try {
  //   const { data } = await Axios.post(`${USER_URL}/signin`, {
  //     email,
  //     password,
  //   });
  //   return data;
  // } catch (error) {
  //   throw Error(error.response.data.message);
  // }
};

export const GetsigninUser = async () => {
  try {
    // const { data } = await fetch(`/signin`, {
    //   method: "GET",
    // });
    const { data } = await fetch(`http://localhost:5000/api/auth/signin`, {
      method: "GET",
    });
    //   // email,
    //   // password,
    console.log(data);
    return data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const signupUser = async ({ firstName, lastName, email, password }) => {
  try {
    const data = await fetch(`${USER_URL}/signup`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, email, password }),
    });
    return data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

// export const sendVerificationMail = async ({ email }) => {
//   try {
//     const { data } = await Axios.post(`${USER_URL}/send-verification-mail`, {
//       email,
//     });
//     return data;
//   } catch (error) {
//     throw Error(error.response.data.message);
//   }
// };

// export const verifyEmailAddressSignup = async ({ token }) => {
//   try {
//     const { data } = await Axios.post(`${USER_URL}/verfiy-user-mail`, {
//       token,
//     });
//     return data;
//   } catch (error) {
//     throw Error(error.response.data.message);
//   }
// };

// export const sendForgotMail = async ({ email }) => {
//   try {
//     const { data } = await Axios.post(`${USER_URL}/forgot-password`, {
//       email,
//     });
//     return data;
//   } catch (error) {
//     throw Error(error.response.data.message);
//   }
// };

// export const forgotPasswordSend = async ({ email }) => {
//   try {
//     const { data } = await Axios.post(`${USER_URL}/verify_Password`, {
//       email,
//     });
//     return data;
//   } catch (error) {
//     throw Error(error.response.data.message);
//   }
// };

// export const verifyForgetPasswordToken = async ({ token, password }) => {
//   try {
//     const { data } = await Axios.post(`${USER_URL}/verify-forgot-mail`, {
//       token,
//       password,
//     });
//     return data;
//   } catch (error) {
//     throw Error(error.response.data.message);
//   }
// };
