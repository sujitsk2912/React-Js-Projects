import Axios from "../axios";

export const fetchExampleQuery = async () => {
  try {
    const { data } = await Axios.get("/");
    return data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};
