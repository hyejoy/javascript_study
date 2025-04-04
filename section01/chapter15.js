// 1.,객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
let person = {
  name: "최혜조",
  age: 28,
  hobby: "develope",
  job: "developer",
  10: 20,
  "like dog": true,
};

// 3. 객체 프로퍼티 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)

// 점 표기법
let name = person.name;
console.log(name);

// 괄호 표기법
// -> 동적으로 값을 꺼내와야할때 사용하는게 좋다.
let age = person["age"];
console.log(age);

let property = "hobby";
let hobby = person[property];

//  3.2 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer";
person["favoriteFood"] = "샤브샤브";

// 3.3 프로퍼티 수정하는 방법
person.job = "educator";
person["favoriteFood"] = "초콜릿";

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
let result2 = "cat" in person;

console.log(person);
console.log(result1);
console.log(result2);
