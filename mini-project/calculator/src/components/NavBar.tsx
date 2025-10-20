import { useContext } from "react";
import { LoginContext } from "../context/LoginContext.tsx";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <div className="flex items-center justify-between bg-blue-500 p-4 pl-8 pr-8">
      <div className="text-white font-bold">
        <a href="/" className="text-white font-bold hover:text-yellow-500">
          Home
        </a>
      </div>
      <div
        className="flex
      items-center justify-between gap-4 text-white"
      >
        {isLoggedIn || localStorage.getItem("token") ? (
          <>
            <div>
              <a
                href="/calculator"
                className="text-white font-bold hover:text-yellow-500"
              >
                Calculator
              </a>
            </div>
            <div>
              <a
                href="/about"
                className="text-white font-bold hover:text-yellow-500"
              >
                About
              </a>
            </div>
            <div
              className="text-white font-bold cursor-pointer hover:text-yellow-500"
              onClick={handleLogout}
            >
              Logout
            </div>
          </>
        ) : (
          <>
            <div>
              <a
                href="/login"
                className="text-white font-bold hover:text-yellow-500"
              >
                Login
              </a>
            </div>
            <div>
              <a
                href="/join"
                className="text-white font-bold hover:text-yellow-500"
              >
                Join
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
