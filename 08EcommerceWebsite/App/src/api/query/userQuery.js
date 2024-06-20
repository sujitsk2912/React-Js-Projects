import Axios from "../axios";

const USER_URL = "/user";

export const signinUser = async ({ email, password }) => {
  try {
    const { data } = await Axios.post(`${USER_URL}/signin`, {
      email,
      password,
    });
    return data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const signupUser = async ({
  firstName,
  lastName,
  email,
  password,
  repeatPassword,
}) => {
  try {
    const { data } = await Axios.post(`${USER_URL}/signup`, {
      firstName,
      lastName,
      email,
      password,
      repeatPassword,
    });
    return data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const sendVerificationMail = async ({ email }) => {
  try {
    const { data } = await Axios.post(`${USER_URL}/send-verification-mail`, {
      email,
    });
    return data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const verifyEmailAddressSignup = async ({ token }) => {
  try {
    const { data } = await Axios.post(`${USER_URL}/verfiy-user-mail`, {
      token,
    });
    return data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const sendForgotMail = async ({ email }) => {
  try {
    const { data } = await Axios.post(`${USER_URL}/forgot-password`, {
      email,
    });
    return data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const forgotPasswordSend = async ({ email }) => {
  try {
    const { data } = await Axios.post(`${USER_URL}/verify_Password`, {
      email,
    });
    return data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const verifyForgetPasswordToken = async ({ token, password }) => {
  try {
    const { data } = await Axios.post(`${USER_URL}/verify-forgot-mail`, {
      token,
      password,
    });
    return data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};
