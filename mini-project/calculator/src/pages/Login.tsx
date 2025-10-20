import { useState, useContext, useEffect } from "react";
import { LoginContext } from "../context/LoginContext.tsx";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("token", "authorized_token");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("이메일 또는 비밀번호를 입력해주세요.");
      return;
    } else {
      if (
        email === localStorage.getItem("email") &&
        password === localStorage.getItem("password")
      ) {
        handleLogin();
      } else {
        alert("이메일 또는 비밀번호가 일치하지 않습니다.");
        return;
      }
    }
  };

  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);

  useEffect(() => {
    if (isLoggedIn || localStorage.getItem("token")) {
      navigate("/");
    }
  }, [isLoggedIn]);

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <form
        className="flex flex-col gap-4 p-4 max-w-md bg-white rounded-md shadow-lg p-10 w-1/5"
        onSubmit={handleSubmit}
      >
        <div className="text-4xl font-bold text-center">
          <h1 className="text-4xl font-bold">Login</h1>
        </div>
        <div className="flex flex-col gap-4 mt-10 mb-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-gray-500 text-sm">
              이메일
            </label>
            <input
              className="border-2 border-gray-300 rounded-md p-2"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-gray-500 text-sm">
              비밀번호
            </label>
            <input
              className="border-2 border-gray-300 rounded-md p-2"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md p-2 font-bold"
          >
            로그인
          </button>
        </div>
      </form>
    </div>
  );
}
