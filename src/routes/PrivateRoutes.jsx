import { Navigate } from "react-router-dom";

function PrivateRoutes({children}){
    let user = localStorage.getItem('currentUser');
    user = JSON.parse(user);
    console.log(user)
    if(user !== null){
        return children
    }else{
        return <Navigate to={'/'}/>
    }
}


export default PrivateRoutes;