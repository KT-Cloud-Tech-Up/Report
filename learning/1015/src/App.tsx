import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Profile from "./components/Profile";
import Button from "./components/Button";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="gap-5 flex flex-col w-full">
      {/* 프로필 섹션 */}
      <section className="w-full flex flex-wrap justify-center items-center">
        <Profile key={1} width={200} height={200} />
      </section>

      {/* 버튼 섹션 */}
      <section className="w-full flex flex-wrap justify-center items-center gap-3">
        <Button key={1} label="홈" color="bg-blue" />
        <Button key={2} label="소개" color="bg-green" />
        <Button key={3} label="연락" color="bg-purple" />
      </section>

      {/* 카드 섹션 */}
      <section className="w-full flex flex-wrap inline-block justify-evenly items-center">
        <Card
          key={1}
          icon="👋"
          title="나란 사람은?"
          description="나를 소개해요."
        />
        <Card key={2} icon="🚀" title="캘린더" description="일정을 기록해요." />
        <Card key={3} icon="📙" title="일기" description="하루를 기록해요." />
      </section>

      {/* 네비게이션 바 섹션 */}
      <section className="w-full">
        <NavBar />
      </section>

      {/* 로그인 폼 섹션 */}
      <section className="w-full flex flex-wrap justify-center items-center">
        <LoginForm />
      </section>
    </div>
  );
}

export default App;
