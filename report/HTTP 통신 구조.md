## 2. HTTP 통신 구조

### (1) HTTP의 기본
- **HyperText Transfer Protocol**  
- 클라이언트(브라우저, 앱)와 서버 간 데이터를 요청·응답(Request/Response)으로 주고받는 프로토콜  
- 기본적으로 **무상태(Stateless)**, **요청/응답 기반**

### (2) 동작 흐름

1. **클라이언트 요청(Request)**  
   - 사용자가 URL을 입력하거나 버튼 클릭  
   - HTTP 요청 메시지를 생성하여 서버로 전송  
   - 구성 요소:
     - **HTTP 메서드**(GET, POST, PUT, DELETE…)  
     - **URL**  
     - **헤더(Header)** (인증토큰, 쿠키, 콘텐츠 타입 등)  
     - **바디(Body)** (필요 시 데이터 포함)

2. **서버 처리(Server Processing)**  
   - 요청을 수신한 서버(비즈니스 로직 계층)가 인증/인가·로직 실행  
   - 필요 시 데이터 계층(DB)와 통신  

3. **서버 응답(Response)**  
   - 상태 코드(Status Code: 200, 400, 404, 500 등)  
   - 응답 헤더(Header)  
   - 응답 바디(HTML, JSON, XML 등)

4. **클라이언트 처리(Client Rendering)**  
   - 응답을 받아 화면 렌더링  
   - SPA라면 JSON을 받아 클라이언트에서 동적으로 UI 업데이트  

### (3) HTTP 통신 구조를 3-Tier에 대입
- **프레젠테이션 계층**: 브라우저·앱이 HTTP 요청을 보냄  
- **비즈니스 로직 계층**: API 서버(Spring Boot, Node 등)가 요청을 처리하고 DB 접근  
- **데이터 계층**: 서버에서만 DB 접근, 결과를 서버→클라이언트로 전달  
