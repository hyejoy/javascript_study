// 5가지 배열 변형 메서드
// 1. filter
// 기존배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
  { name: "이정환", hobby: "IT" },
  { name: "최혜조", hobby: "IT" },
  { name: "김민재", hobby: "IT" },
  { name: "최소혜", hobby: "Design" },
];

const ItPeople = arr1.filter((item) => item.hobby === "IT");

console.log(ItPeople);

// 2.map
// 배열의 모든 요소를 순회하면서 각각 콜백함수를 실행하고
// 그 결과값을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult = arr2.map((item, idx, arr) => {
  console.log(idx, item);
  // forEach와 다르게 반환값을 설정해줄수 있다
  return item * 2;
});
console.log(mapResult);

let names = arr1.map((item) => item.name);
console.log(names);

// 3. sort
// 배열을 사전순(String) 으로 정렬하느 메서드
let arr3 = ["b", "a", "c"];
arr3.sort();
console.log(arr3);

let arr4 = [10, 3, 5];
// 대소관계를 정렬하고싶다면 callback함수도 넘겨줘야한다.
arr4.sort((a, b) => {
  if (a > b) {
    //b 가 a 앞에 와라
    return 1; // -> b, a 배치
  } else if (a < b) {
    //
    return -1; // a, b 배치
  } else {
    // 두 값의 자리를 바꾸지 마라
    return 0;
  }
});

console.log(arr4); // 오름차순으로 정렬됨 [3,5,10]

arr4.sort((a, b) => {
  if (a > b) {
    //b 가 a 앞에 와라
    return -1; // -> b, a 배치
  } else if (a < b) {
    //
    return 1; // a, b 배치
  } else {
    // 두 값의 자리를 바꾸지 마라
    return 0;
  }
});

console.log(arr4); // 내림차순 정렬됨 [10, 5, 3]

// 4. toSorted
// 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();
console.log(arr5);
console.log(sorted);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["hi", "im", "winterlood"];
const joined = arr6.join();
console.log(joined); // hi,im,winterlood
const joined2 = arr6.join("*"); // 구분자 변경
console.log(joined2); // hi*im*winterlood
