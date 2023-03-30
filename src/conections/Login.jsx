import {useMutation} from 'react-query';
import axios from 'axios';

export default function Login() {
    const {mutate:InicioE}= useMutation((data)=>
      console.log(data),
      axios.post('http://localhost:3000/CreateUser',data),{
        onSuccess: (response)=>{
          console.log(response)
        },
        onError: (err)=> console.log(err)
      })
      function setInicio(nombre, clave, icon, email){
        InicioE({nombre, clave, icon, email})
      }
    return (
      <></>
    )
  }
