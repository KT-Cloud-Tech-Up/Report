# 🔄 데이터 교환 포맷 & 직렬화(Serialization)

## 📖 개요

웹 서비스에서는 **클라이언트(Client)** 와 **서버(Server)** 가 서로 데이터를 주고받을 때  
`데이터 교환 포맷(Data Exchange Format)`을 사용합니다.

이때, 프로그램 내부의 객체(Object)를 전송 가능한 형태로 바꾸는 과정을  
👉 **직렬화(Serialization)** 라고 합니다.  

반대로, 받은 데이터를 다시 객체로 복원하는 과정을  
👉 **역직렬화(Deserialization)** 라고 합니다.

---

## 🧩 1️⃣ 직렬화(Serialization)란?

### 📌 정의
> **직렬화(Serialization)** 는 프로그램 내부의 객체(Object)를  
> 파일, 네트워크 전송, 데이터베이스 저장 등에 사용할 수 있도록  
> **문자열 또는 바이트 형태로 변환하는 과정**입니다.

| 구분 | 설명 |
|------|------|
| **Serialization (직렬화)** | 객체 → 문자열 or 바이트 변환 |
| **Deserialization (역직렬화)** | 문자열 or 바이트 → 객체 변환 |

---

### 💡 왜 필요한가?

- **서버 ↔ 클라이언트 간 통신**  
  : HTTP 통신에서는 오직 텍스트 기반 데이터만 전송 가능하므로,  
  객체를 JSON/XML/YAML 형태로 직렬화해야 합니다.

- **데이터 저장**  
  : 파일, DB, 캐시(Redis 등)에 객체 상태를 그대로 저장하기 위해 사용합니다.

- **분산 시스템 간 데이터 교환**  
  : 서로 다른 언어나 플랫폼 간 데이터를 주고받기 위한 공통 포맷이 필요합니다.

---

### 🔧 주요 직렬화 포맷

| 포맷 | 특징 | 확장자 |
|------|------|--------|
| **JSON (JavaScript Object Notation)** | 경량, 가독성 높음, 웹 표준 | `.json` |
| **XML (eXtensible Markup Language)** | 구조적 표현, 확장성 높음 | `.xml` |
| **YAML (YAML Ain’t Markup Language)** | 인간 친화적, 설정 파일에 적합 | `.yaml`, `.yml` |

---

## 🧾 2️⃣ JSON, XML, YAML 비교

### 📊 포맷별 특징 요약

| 구분 | **JSON** | **XML** | **YAML** |
|------|-----------|----------|-----------|
| **형태** | 키-값 쌍 `{}` | 태그 `<tag>` | 들여쓰기 기반 |
| **가독성** | ★★★★☆ | ★★☆☆☆ | ★★★★★ |
| **데이터 용량** | 작음 (경량) | 큼 (태그 중복) | 작음 |
| **주 용도** | API 응답, 웹 통신 | 문서 표현, 레거시 시스템 | 설정 파일, DevOps |
| **스키마 검증** | 약함 | 강함 (DTD, XSD) | 약함 |
| **코멘트(주석)** | ❌ (지원 안 함) | ✅ | ✅ |
| **파싱 난이도** | 쉬움 | 복잡 | 쉬움 |
| **대표 사용처** | REST API, JavaScript | SOAP, XML 기반 시스템 | Kubernetes, Docker, CI/CD 설정 |

---

### 🧠 예시 비교

#### 🟢 JSON

```json
{
  "user": {
    "name": "홍길동",
    "age": 25,
    "email": "hong@example.com",
    "skills": ["Java", "Spring", "React"]
  }
}
```

#### 🟢 xml

```xml
<user>
  <name>홍길동</name>
  <age>25</age>
  <email>hong@example.com</email>
  <skills>
    <skill>Java</skill>
    <skill>Spring</skill>
    <skill>React</skill>
  </skills>
</user>
```

#### 🟢 yml

```yml
user:
  name: 홍길동
  age: 25
  email: hong@example.com
  skills:
    - Java
    - Spring
    - React
```

## ⚙️ 3️⃣ JSON, XML, YAML의 기술적 비교

| 항목            | JSON          | XML            | YAML              |
| ------------- | ------------- | -------------- | ----------------- |
| **데이터 구조 지원** | 객체, 배열        | 계층형 구조         | 객체, 배열, 맵         |
| **표준화 정도**    | 높음 (RFC 8259) | 매우 높음 (W3C)    | 비교적 낮음            |
| **주석 지원 여부**  | ❌             | ✅              | ✅                 |
| **데이터 타입 명시** | 기본 타입만 지원     | 명시적            | 유연함               |
| **공백 민감도**    | 무시            | 무시             | 매우 중요 (들여쓰기 기반)   |
| **문법 복잡도**    | 간단            | 복잡             | 간단하지만 들여쓰기 민감     |
| **대표 라이브러리**  | Jackson, Gson | JAXB, DOM, SAX | SnakeYAML, PyYAML |


## 📡 4️⃣ 실제 사용 사례

| 상황                                          | 권장 포맷 | 이유              |
| ------------------------------------------- | ----- | --------------- |
| **웹 API 응답**                                | JSON  | 경량, 파싱 속도 빠름    |
| **서버 간 통신(SOAP)**                           | XML   | 스키마 검증, 안정성     |
| **CI/CD 설정 (GitHub Actions, Kubernetes 등)** | YAML  | 직관적, 사람 친화적     |
| **데이터 저장 / 로그 구조화**                         | JSON  | 포맷 일관성 유지       |
| **대규모 구성 관리**                               | YAML  | 들여쓰기 기반, 관리 편의성 |

