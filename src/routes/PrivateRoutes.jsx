import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function PrivateRoutes({ children }) {
  const { isLoading, isAuthenticated } = useAuth0();
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
  );
  console.log(user);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("currentUser")));
  }, []);
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Circles
          height="80"
          width="80"
          color="gray"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  if (user !== null || isAuthenticated) {
    return children;
  } else {
    return <Navigate to={"/"} />;
  }
}

export default PrivateRoutes;
