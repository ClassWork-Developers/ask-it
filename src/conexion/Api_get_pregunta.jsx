import { useQuery } from "react-query";
import axios from "axios";
//conexion a la API
let config = {
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "multipart/form-data",
  },
};
const { data, isLoading, error } = useQuery(
  (data) => axios.get("http://localhost:3000/MostrarPreguntas", data, config),
  {
    onSuccess: (response) => {
      console.log(response.data);
    },
    onError: (err) => console.log(err),
  }
);
