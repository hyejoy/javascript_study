/*원시타입 = 불변값*/
// 실제 메모리의 값은 수정되지 않음

let p1 = 1;
let p2 = p1;

console.log(p1, p2);

/**객체간의 비교는 기본적으로 참조값을 기준으로 이루어진다. */
let o1 = { name: "이름" };
let o2 = o1;
let o3 = { ...o1 };

console.log(o1 === o2); // true
console.log(o1 === o3); // false

let stringObject1 = JSON.stringify(o1);
let stringObject2 = JSON.stringify(o3);

console.log(stringObject1 === stringObject2); // true
