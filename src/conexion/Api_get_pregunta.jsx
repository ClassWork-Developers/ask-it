import { useQuery } from "react-query";
import axios from "axios";
//conexion a la API
let config = {
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "multipart/form-data",
  },
};
//funcion
const query = useQuery("Preguntas", async () => {
  const { data } = await axios(
    "http://localhost:3000/MostrarPreguntas",
    config
  );
  return data;
  /* {
      onSuccess: (response) => {
        console.log(response.data);
      },
      onError: (err) => console.log(err),
    }; */
});
query.data.map((a) => console.log(a.pregunta));
