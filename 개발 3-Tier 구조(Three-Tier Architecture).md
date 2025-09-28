## 1. 개발 3-Tier 구조(Three-Tier Architecture)

### (1) 개념
Three-Tier Architecture는 하나의 애플리케이션을 **프레젠테이션(Presentation)**, **비즈니스 로직(Business Logic)**, **데이터(Data)** 3개의 계층으로 나누어 설계·구현하는 구조입니다.  
목적: **역할 분리, 확장성, 유지보수성, 보안성** 향상.

### (2) 각 계층의 역할

| 계층 | 설명 | 예시 |
|------|------|------|
| **프레젠테이션 계층 (Presentation Tier)** | 사용자와 직접 상호작용(UI/UX)하는 부분. 브라우저, 모바일 앱, SPA(React·Next.js) 등 | HTML, CSS, JS, Flutter, React |
| **비즈니스 로직 계층 (Application/Business Tier)** | 클라이언트 요청을 처리하고 규칙·로직을 수행하는 서버 애플리케이션 | Java Spring Boot, Node.js, Express, Django |
| **데이터 계층 (Data Tier)** | 실제 데이터를 보관·조회·수정하는 저장소(DB) | MySQL, PostgreSQL, MongoDB, Redis |

### (3) 특징 및 장점
- **역할 분리**: UI/UX·로직·DB를 독립적으로 개발·배포 가능  
- **확장성**: 특정 계층만 별도로 확장(스케일링) 가능  
- **보안 강화**: DB에 직접 접근하지 못하게 하여 중간 서버에서 인증·권한 검증  
- **유지보수 용이**: 각 계층의 코드 변경이 다른 계층에 최소한으로 영향 
