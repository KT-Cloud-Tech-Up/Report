function greet(name: string): string {
  // <- 매개변수 오른쪽의 : string 부분은 리턴값을 의미한다.
  return "Hello, My name is " + name;
}

console.log(greet("세훈"));

// 타입 스크립트 기본 자료형
// 숫자
let age: number = 20;
age = 20.5;
// age = "20";

const PI: number = 3.14;

// 문자열
let nickname: string = "John";
nickname = "Dow";

// 논리형
let isActive: boolean = false;
