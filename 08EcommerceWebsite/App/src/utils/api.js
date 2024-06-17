import Axios from "axios";

const params = {
  headers: {
    Authorization: "bearer " + import.meta.env.VITE_APP_STRIPE_APP_KEY,
  },
};

export const fetchDataFromApi = async (URL) => {
  try {
    const { data } = await Axios.get(
      import.meta.env.VITE_APP_DEV_URL + URL,
      params
    );
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const makePaymentRequest = Axios.create({
  baseURL: import.meta.env.VITE_APP_DEV_URL,
  headers: {
    Authorization: "bearer " + import.meta.env.VITE_APP_STRIPE_APP_KEY,
  },
});
