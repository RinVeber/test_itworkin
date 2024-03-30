import axios from "axios";

export const getData = async (page: any) => {
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/location?page=${page}`,
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};
