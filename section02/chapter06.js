// 1. 배열 순회
let arr = [1, 2, 3];

// 1. 배열 인덱스

for (let idx = 0; idx < arr.length; idx++) {
  console.log(arr[idx]);
}

// 1.2 for of 반복문 (오직 배열을 순회하는데 사용되는 반복문)
// 배열에서만 사용가능 [객체에서 사용 X]
// index를 사용하지 않음
for (let item of arr) {
  console.log(item);
}

// 2. 객체 순회

let person = {
  name: "susu",
  age: 4,
  hobby: "take a walk",
};

// 2.1 Object.keys 사용
// 객체에서 key값들만 뽑아서 새로운 배열로 반환

let keys = Object.keys(person);
console.log(keys); //[name, age, hobby]

for (let i = 0; i < keys.length; i++) {
  console.log(keys[i]); // name , age , hobby 순으로 출력
}

for (let key of keys) {
  const value = person[keys];
  console.log(key, value); // name susu , age 4 , hobby take a walk 순으로 출력
}

// 2.2 Object.values
// 객체에서 value값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
console.log(values); // [susu, 4, take a walk]

for (let value of values) {
  console.log(value); // susu, 4 ,take a walk
}

// 2.3 for in
// 객체에서만 사용가능 [배열에서 사용 X]
// person의 프로퍼티 키값을 key에 할당함
for (let key in person) {
  const value = person[key];
  console.log(key, value);
}
