import { useContext } from "react";
import { LoginContext } from "../context/LoginContext.tsx";
import { Link, useNavigate } from "react-router-dom";

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
        <Link
          to="/"
          className="text-white font-bold cursor-pointer hover:text-yellow-500"
        >
          Home
        </Link>
      </div>
      <div
        className="flex
      items-center justify-between gap-4 text-white"
      >
        {isLoggedIn || localStorage.getItem("token") ? (
          <>
            <div>
              <Link
                to="calculator"
                className="text-white font-bold cursor-pointer hover:text-yellow-500"
              >
                Calculator
              </Link>
            </div>
            <div>
              <Link
                to="about"
                className="text-white font-bold cursor-pointer hover:text-yellow-500"
              >
                About
              </Link>
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
              <Link
                to="login"
                className="text-white font-bold cursor-pointer hover:text-yellow-500"
              >
                Login
              </Link>
            </div>
            <div>
              <Link
                to="join"
                className="text-white font-bold cursor-pointer hover:text-yellow-500"
              >
                Join
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
