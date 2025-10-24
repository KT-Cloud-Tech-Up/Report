# 📘 비동기 처리(Asynchronous Processing), Promise, async/await 정리

## 🧩 1. 비동기 처리란

자바스크립트는 **싱글 스레드(Single Thread)** 언어이기 때문에 한 번에 하나의 작업만 수행합니다.  
하지만 **비동기 처리(Asynchronous Processing)** 를 통해 오래 걸리는 작업(API 호출, 파일 읽기 등)을 기다리지 않고 다음 코드를 실행할 수 있습니다.

### 🕒 동기(Synchronous) vs 비동기(Asynchronous)
```js
// 동기 처리
console.log("1");
console.log("2");
console.log("3");
// 출력: 1 → 2 → 3

// 비동기 처리
console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");
// 출력: 1 → 3 → 2
```

> ⚙️ 비동기 처리는 코드 실행 순서를 보장하지 않지만,  
> 프로그램이 멈추지 않고 사용자 경험(UX)을 높이는 핵심 기술입니다.

---

## ⚙️ 2. 콜백(Callback)

비동기 처리의 초창기 방식으로,  
**함수를 인자로 전달하여 작업이 끝난 후 실행되도록 하는 구조**입니다.

```js
function getData(callback) {
  setTimeout(() => {
    callback("데이터 로드 완료!");
  }, 1000);
}

getData((result) => {
  console.log(result); // 출력: 데이터 로드 완료!
});
```

### ⚠️ 콜백 지옥 (Callback Hell)
콜백이 중첩되면 코드의 가독성과 유지보수성이 떨어집니다.

```js
loginUser("user", "pw", (user) => {
  getPosts(user, (posts) => {
    getComments(posts[0], (comments) => {
      console.log(comments);
    });
  });
});
```

---

## 💎 3. Promise

`Promise`는 비동기 작업의 **성공(resolve)** 또는 **실패(reject)** 상태를 관리하는 객체입니다.  
콜백보다 가독성이 높고, 체이닝을 통해 흐름 제어가 쉬워졌습니다.

### ✅ 기본 구조
```js
const promise = new Promise((resolve, reject) => {
  const success = true;
  if (success) resolve("성공!");
  else reject("실패...");
});

promise
  .then((result) => console.log(result))  // 성공 시
  .catch((error) => console.error(error)) // 실패 시
  .finally(() => console.log("작업 종료"));
```

### 🔗 Promise 체이닝
여러 비동기 작업을 순차적으로 처리할 수 있습니다.

```js
fetchUser()
  .then((user) => fetchPosts(user.id))
  .then((posts) => fetchComments(posts[0].id))
  .then((comments) => console.log(comments))
  .catch((error) => console.error(error));
```

---

## 🪄 4. async / await

`async/await`은 `Promise`를 **동기식 코드처럼 간결하게** 사용할 수 있게 만든 문법입니다.  
`await` 키워드는 `Promise`가 완료될 때까지 기다립니다.

### ✨ 기본 사용 예시
```js
async function getData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("에러 발생:", error);
  } finally {
    console.log("작업 완료");
  }
}
```

### ⚙️ 특징
- `async` 함수는 항상 `Promise`를 반환함  
- `await`은 `Promise`가 **resolve**될 때까지 기다림  
- `try...catch`로 예외를 처리 가능

---

## ⚡ 5. Promise vs async/await 비교

| 구분 | Promise | async/await |
|------|----------|-------------|
| 코드 구조 | `.then()` 체인 | 동기식 코드처럼 작성 가능 |
| 예외 처리 | `.catch()` | `try...catch` |
| 가독성 | 체인이 길면 복잡 | 직관적이고 깔끔 |
| 병렬 처리 | `Promise.all()` 사용 | `await Promise.all()` |
| 반환 값 | Promise 객체 | Promise 객체 (자동 래핑) |

---

## 🧠 6. 요약 정리

| 개념 | 특징 | 예시 |
|------|------|------|
| 콜백(Callback) | 함수 인자로 전달, 중첩 구조 복잡 | `setTimeout(callback)` |
| Promise | 비동기 결과를 객체로 표현 | `new Promise()` |
| async/await | Promise를 동기식으로 표현 | `await fetch()` |

---

## 🚀 7. 결론

- **비동기 처리**는 자바스크립트의 핵심 개념으로,  
  UI 멈춤을 방지하고 효율적인 코드 실행을 가능하게 함  
- **콜백 → Promise → async/await** 순으로 발전하면서  
  가독성과 유지보수성이 개선됨  
- 실제 프로젝트에서는 `async/await`을 표준으로 사용하며,  
  필요 시 `Promise.all()`, `Promise.race()` 등을 함께 활용하여 병렬 처리 효율을 높입니다.

---
