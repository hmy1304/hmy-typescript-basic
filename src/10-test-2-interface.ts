// 함수 타입 인터페이스를 정의하세요.
interface Multiply {
  (x: number, y: number): number;
}

const multiply1: Multiply = (a, b) => a * b;

console.log(multiply1(5, 3)); // 출력: 15