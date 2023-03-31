import { useMutation } from "react-query";
import axios from "axios";
import { useState } from "react";
//DENTRO DE LA FUNCION
const [nombre, setNombre] = useState("");
const [description, setDescription] = useState("");
const [tipo_pregunta, setTipo_pregunta] = useState("");
const [tipo_repuesta, setTipo_repuesta] = useState("");
//CONEXION CON LA API
let config = {
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "multipart/form-data",
  },
};
const { mutate: Preguntas } = useMutation(
  (data) => axios.post("http://localhost:3000/CrearPregunta", data, config),
  {
    onSuccess: (response) => {
      console.log(response.data);
    },
    onError: (err) => console.log(err),
  }
);
//Funcion que se debe llamar al enviar el formulario, o al darle guardar formulario en un map o bucle
function Add_pregunta(data) {
  Preguntas({
    nombre: data.nombre,
    description: data.description,
    tipo_pregunta: data.tipo_pregunta,
    tipo_repuesta: data.tipo_repuesta,
  });
}
