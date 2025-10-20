import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Join() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email === "" || password === "" || passwordConfirm === "") {
      alert("회원가입할 정보를 정상적으로 입력해주십시오.");
      return;
    } else {
      if (password !== passwordConfirm) {
        alert("비밀번호가 일치하지 않습니다.");
        return;
      }

      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      alert("회원가입이 완료되었습니다.");
      navigate("/login");
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <form
        className="flex flex-col gap-4 p-4 max-w-md bg-white rounded-md shadow-lg p-10 w-1/5"
        onSubmit={handleSubmit}
      >
        <div className="text-4xl font-bold text-center">
          <h1 className="text-4xl font-bold">회원가입</h1>
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
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-gray-500 text-sm">
              비밀번호 재확인
            </label>
            <input
              className="border-2 border-gray-300 rounded-md p-2"
              type="password"
              placeholder="Password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md p-2 font-bold"
          >
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
}
