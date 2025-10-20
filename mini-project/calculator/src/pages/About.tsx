export default function About() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-10">
      <div className="text-4xl font-bold inline-block">구현 내용</div>
      <div className="text-2xl block">
        <ul className="gap-5 flex flex-col">
          <li>
            <span className="font-bold">Components 구성</span>
            <ul className="text-xl">
              <li>
                (1) 로그인한 상태에 따라 버튼 메뉴가 변동되는 네비게이션 바를
                구현하였습니다.
              </li>
              <li>(2) 클릭한 메뉴에 따라 페이지가 이동합니다.</li>
            </ul>
          </li>
          <li>
            <span className="font-bold">Hooks 구성</span>
            <ul className="text-xl">
              <li>(1) useContext 훅을 사용하여 로그인 상태를 관리합니다.</li>
              <li>
                (2) useEffect 훅을 사용하여 로그인 상태가 변경될 때 페이지를
                리렌더링합니다.
              </li>
              <li>(3) useNavigate 훅을 사용하여 페이지를 이동합니다.</li>
              <li>(4) useState 훅을 사용하여 상태를 관리합니다.</li>
            </ul>
          </li>
          <li>
            <span className="font-bold">Routes 구성</span>
            <ul className="text-xl">
              <li>(1) Routes 훅을 사용하여 페이지를 이동합니다.</li>
            </ul>
          </li>
          <li>
            <span className="font-bold">Pages 구성</span>
            <ul className="text-xl">
              <li>(1) Home 페이지를 구현하였습니다.</li>
              <li>
                (2) 이메일과 비밀번호를 입력하여 로그인을 할 수 있는 Login
                페이지를 구현하였습니다.
              </li>
              <li>(3) 회원가입할 수 있는 Join 페이지를 구현하였습니다.</li>
              <li>
                (4) 로그인 후 이용가능한 계산기 Calculator 페이지를
                구현하였습니다.
              </li>
              <li>
                (5) 현재 프로젝트 구현 개발 소개 About 페이지를 구현하였습니다.
              </li>
            </ul>
          </li>
          <li>
            <span className="font-bold">Context 구성</span>
            <ul className="text-xl">
              <li>
                (1) LoginContext를 사용하여 로그인 상태를 전역으로 관리합니다.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
