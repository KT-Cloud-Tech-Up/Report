# 🌐 RESTful API 정의와 사용 방법

## 🧩 1. REST란?

**REST (Representational State Transfer)** 는  
웹의 자원을 정의하고 자원에 대한 주소(URL)를 통해 상태를 주고받는 **아키텍처 스타일(Architectural Style)** 입니다.  

간단히 말해, **HTTP 프로토콜을 기반으로 자원(Resource)을 효율적으로 관리하기 위한 규칙 집합**입니다.

---

## 🧱 2. REST의 주요 구성 요소

| 구성 요소 | 설명 |
|------------|------|
| **Resource (자원)** | 서버에 존재하는 데이터 또는 기능 (예: 사용자, 게시글 등) |
| **URI (식별자)** | 자원을 구분하는 고유한 주소 (예: `/users/1`) |
| **HTTP Method (행위)** | 자원에 대한 행위 (예: 조회, 생성, 수정, 삭제) |
| **Representation (표현)** | 자원의 상태를 전달하는 데이터 형식 (JSON, XML 등) |
| **Stateless (무상태성)** | 서버가 클라이언트의 상태를 저장하지 않음. 각 요청은 독립적 |

---

## ⚙️ 3. RESTful API란?

**REST 원칙을 준수하여 설계된 API**를 **RESTful API**라고 합니다.  

즉,  
- URI로 자원을 명확히 식별하고,  
- HTTP Method로 행위를 표현하며,  
- 일관된 응답 포맷(JSON 등)을 유지하는 API 설계 방식입니다.

---

## 🚀 4. HTTP 메서드 정리

| 메서드 | 설명 | 예시 |
|--------|------|------|
| **GET** | 데이터 조회 | `GET /users` → 사용자 목록 조회 |
| **POST** | 새로운 자원 생성 | `POST /users` → 사용자 추가 |
| **PUT** | 기존 자원 전체 수정 | `PUT /users/1` → ID=1 사용자 전체 수정 |
| **PATCH** | 자원의 일부 수정 | `PATCH /users/1` → ID=1 사용자 일부 변경 |
| **DELETE** | 자원 삭제 | `DELETE /users/1` → ID=1 사용자 삭제 |

> 💡 REST에서는 URI에 동사를 쓰지 않고 **명사로 자원 표현**,  
> 행위는 HTTP 메서드로 구분하는 것이 핵심입니다.

예:  
❌ `/getUsers` (비RESTful)  
✅ `/users` (RESTful)

---

## 🗂 5. RESTful URI 설계 원칙

| 원칙 | 설명 | 예시 |
|------|------|------|
| **자원은 명사로 표현** | 동사가 아닌 명사 사용 | `/users`, `/posts` |
| **계층 구조 사용** | 관계를 `/`로 구분 | `/users/1/posts` |
| **소문자 사용** | URI는 대소문자 구분, 소문자 권장 | `/users/1` |
| **언더스코어(_) 대신 하이픈(-)** | 가독성 향상 | `/user-profiles` |
| **확장자 사용 지양** | 데이터 포맷은 헤더로 지정 | `Accept: application/json` |

---

## 📬 6. RESTful API 예시

### ✅ 사용자 관리 API 예시

| 기능 | Method | URI | 설명 |
|------|---------|-----|------|
| 사용자 목록 조회 | GET | `/users` | 모든 사용자 조회 |
| 특정 사용자 조회 | GET | `/users/{id}` | ID 기준 사용자 조회 |
| 사용자 생성 | POST | `/users` | 새 사용자 추가 |
| 사용자 수정 | PUT | `/users/{id}` | 사용자 전체 수정 |
| 사용자 일부 수정 | PATCH | `/users/{id}` | 일부 정보 변경 |
| 사용자 삭제 | DELETE | `/users/{id}` | 사용자 삭제 |

---

## 💡 7. RESTful API 사용 예시

### 📤 (1) 데이터 조회 (GET)
```bash
curl -X GET https://api.example.com/users
```

### 📥 (2) 데이터 생성 (POST)
```bash
curl -X POST https://api.example.com/users \
     -H "Content-Type: application/json" \
     -d '{"name": "홍길동", "email": "hong@example.com"}'
```

### ✏️ (3) 데이터 수정 (PUT)
```bash
curl -X PUT https://api.example.com/users/1 \
     -H "Content-Type: application/json" \
     -d '{"name": "김철수", "email": "chulsoo@example.com"}'
```

### 🗑 (4) 데이터 삭제 (DELETE)
```bash
curl -X DELETE https://api.example.com/users/1
```

---

## 🧠 8. RESTful API의 장점

| 장점 | 설명 |
|------|------|
| **일관성** | HTTP 규칙을 따르므로 구조가 명확 |
| **확장성** | 서버/클라이언트가 독립적으로 확장 가능 |
| **유연성** | 다양한 포맷(JSON, XML, HTML 등) 지원 |
| **표준화** | CRUD 동작이 명확히 정의되어 유지보수 용이 |

---

## ⚠️ 9. RESTful API의 단점

| 단점 | 설명 |
|------|------|
| **복잡한 트랜잭션 처리 어려움** | 여러 자원에 대한 원자적 처리에 부적합 |
| **Over-fetching / Under-fetching** | 필요한 데이터보다 많거나 적게 가져올 수 있음 |
| **Stateless 제약** | 상태 저장이 필요한 서비스(예: 세션 기반 인증)에 추가 설계 필요 |

---

## 🔐 10. RESTful API 보안 고려사항

| 항목 | 설명 |
|------|------|
| **HTTPS 사용** | 통신 암호화를 통해 데이터 보호 |
| **인증/인가** | OAuth 2.0, JWT 등을 활용한 권한 관리 |
| **CORS 설정** | 도메인 간 리소스 공유 제어 |
| **Rate Limiting** | 과도한 요청으로 인한 서버 과부하 방지 |

---

## 🧩 11. RESTful API vs GraphQL 비교

| 구분 | RESTful API | GraphQL |
|------|--------------|----------|
| 요청 단위 | 여러 엔드포인트 | 단일 엔드포인트 |
| 응답 데이터 | 고정된 구조 | 클라이언트가 원하는 구조 지정 |
| 데이터 과다/부족 문제 | 존재 (Over/Under fetching) | 거의 없음 |
| 학습 난이도 | 낮음 | 비교적 높음 |
| 캐싱 | HTTP 레벨에서 용이 | 별도 캐싱 전략 필요 |

---

## 🚀 12. 결론

- RESTful API는 **HTTP 프로토콜을 효율적으로 활용하는 표준적인 API 설계 방식**이다.  
- 명확한 **URI 설계**와 **HTTP Method**를 통해 코드의 일관성과 유지보수성을 높일 수 있다.  
- 최근에는 GraphQL, gRPC 등 대체 기술도 있지만, **RESTful API는 여전히 가장 널리 사용되는 방식**이다.  
- `Stateless`, `Resource`, `Representation` 의 3대 원칙을 지키는 것이 핵심이다.

---

📘 **참고 키워드**
> REST, RESTful, API, HTTP Method, CRUD, URI Design, JSON, Stateless
