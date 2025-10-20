function LoginForm() {
  return (
    <div className="flex flex-col gap-3 border-2 border-black rounded-sm p-7 text-center w-20000">
      <h3 className="text-xl font-bold">로그인</h3>
      <input
        type="email"
        placeholder="이메일"
        className="border-2 border-black rounded-sm p-2 w-full focus:outline-none"
      />
      <input
        type="password"
        placeholder="비밀번호"
        className="border-2 border-black rounded-sm p-2 w-full"
      />
      <button className="bg-blue-500 text-white">로그인</button>
    </div>
  );
}

export default LoginForm;
