// 1.Falsy한 값
// 거짓으로 평가되는 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = 0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

if (!f1) {
  console.log("falsy!");
}

// 2. Truty한 값
// -> 7가지 Falsy한 값들을 제외한 나머지 모든 값

let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if (t5) {
  console.log("Truty");
}

//3. 활용사례
function printName(person) {
  if (!person) {
    console.log("person값이 없어요");
    return;
  }
  console.log(person.name);
}

let person;
printName(person);

let person1 = {
  name: "CHOIHyeJo",
};
printName(person1);
