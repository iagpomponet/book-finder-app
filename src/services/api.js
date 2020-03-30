import axios from "axios";
import regeneratorRuntime from "regenerator-runtime";

const api = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes"
});

export const getBooks = async url => {
  const response = await api.get(url).then(res => console.log(res.data.items));
};

export default api;
