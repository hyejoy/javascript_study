// 5가지 요소 순회 탐색 메서드
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드

// 1.forEach
let arr1 = [1, 2, 3];

// callback함수
arr1.forEach(function (item, idx, arr) {
  console.log(idx, item * 2);
});

let doubleArr = [];
arr1.forEach((item) => {
  doubleArr.push(item * 2);
});

console.log(doubleArr);

// 2. includes
// 배열에 특정 요소가 있느지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude1 = arr2.includes(3); // 3포함하므로 true
let isInclude2 = arr2.includes(10); // 10포함안하므로 false

// 3. indexOf [ 얕은 비교 ]
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
// 얕은비교로 진행하기때문에 객체는 찾아낼수 없음
let arr3 = [1, 2, 3];
let index = arr3.indexOf(3); // 3의 위치 인덱스는 2
console.log(index);

// 4. findIndex [ 깊은 비교 ]
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];

// 가장처음으로 조건문을 만족시키는 인덱스를 반환한다.
// 조건을 만족하는게 없다면 return -1
// 깊은비교로 객체를 찾아낼 수 있음
const findIndex = arr4.findIndex((item) => {
  return item % 2 !== 0;
});

console.log(findIndex);

// 5.find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데 요소를 그대로 반환
let arr5 = [
  { name: "이정환" },
  { name: "홍길동" },
  { name: "이정환" },
  { name: "홍길동" },
];

const test = arr5.find((item) => item.name === "이정환");

// name이 이정환인 첫번째 객체를 return;
console.log(test);
