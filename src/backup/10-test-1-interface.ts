// 사용자 정보를 나타내는 인터페이스를 작성하세요.
interface User {
  readonly id: number;
  name: string;
  age?: number;
}

const user01: User = { id: 1, name: "Alice" };
const user02: User = { id: 2, name: "Bob", age: 30 };

// user1.id = 3; // 오류 발생
console.log(user01, user02);
