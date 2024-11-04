// 1.배열의 구조 분해 할당
let arr = [1, 2, 3];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

let [one, two, three, four] = arr;

// four은 undefined 할당됨
// four = 4 처럼 값 할당할 수 있음
// let [one, two, three, four = 4] = arr;
console.log(one, two, three, four); //각각 index에 맞게 값을 할당

// 2. 객체의 구조 분해 할당
let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
};

// let name = person.name;
// let age = person.age;
// let hobby = personhobbye;

// 프로퍼티의 값을 키값을 기준으로 저장할 수 있다.
// let { name, hobby, age, extra } = person;

let { age: myAge, hobby, name, extra = "hello" } = person;
console.log(name, myAge, hobby, extra);

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

// 매개변수로 객체를 넘겼을때만 구조분해 할당을 사용할수있음
func(person);
