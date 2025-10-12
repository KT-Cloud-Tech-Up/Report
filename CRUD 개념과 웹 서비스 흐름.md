# 🌐 CRUD 개념과 웹 서비스 흐름 정리

## 1️⃣ CRUD란?

**CRUD**는 데이터베이스에서 가장 기본적인 **4가지 기능**을 의미합니다.  
웹 애플리케이션의 핵심 로직 대부분은 이 4가지 동작으로 이루어져 있습니다.

| 구분 | 기능 | 설명 | HTTP 메서드 | SQL 문 |
|------|------|------|-------------|--------|
| **C** | Create | 데이터 생성 | `POST` | `INSERT` |
| **R** | Read | 데이터 조회 | `GET` | `SELECT` |
| **U** | Update | 데이터 수정 | `PUT` / `PATCH` | `UPDATE` |
| **D** | Delete | 데이터 삭제 | `DELETE` | `DELETE` |

### 🧠 예시 — 회원 관리 시스템

| 기능 | 설명 | 요청 예시 |
|------|------|------------|
| **Create** | 회원가입 | `POST /users` |
| **Read** | 회원 목록 조회 | `GET /users` |
| **Read** | 특정 회원 조회 | `GET /users/{id}` |
| **Update** | 회원 정보 수정 | `PUT /users/{id}` |
| **Delete** | 회원 삭제 | `DELETE /users/{id}` |

---

## 2️⃣ 웹 서비스의 기본 흐름

웹 애플리케이션은 **Client → Server → Database** 구조로 동작합니다.  
이 구조를 흔히 **3-Tier Architecture** 또는 **MVC 패턴**이라고 부릅니다.

