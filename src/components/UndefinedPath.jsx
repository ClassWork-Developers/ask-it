import { useAuth0 } from "@auth0/auth0-react";

export default function UndefinedPath() {
  const { isAuthenticated, logout } = useAuth0();
  return (
    <div className="min-h-screen font-hindi p-5 text-xl text-center flex flex-col items-center justify-center gap-5 md:text-3xl">
      <img className="w-32 h-32" src="../../public/logo.svg" alt="" />
      <div className="flex items-center">
        <h1>Hola, al parecer estas perdido... </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
          />
        </svg>
      </div>
      <p>
        La pagina que deseas ver no existe! Dirigete al inicio{" "}
        <strong
          className="cursor-pointer"
          onClick={() => {
            isAuthenticated ? logout() : (window.location.href = "/");
          }}
        >
          aqui
        </strong>
      </p>
    </div>
  );
}
