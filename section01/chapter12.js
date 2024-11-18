// 1. 함수 표현식
function funcA() {
  // console.log("funcA");
}

//자바스크립트는 함수도 하나의 값으로 취급하기때문에 변수에 담을수가있음
let varA = funcA;
varA();

// 함수표현식
// 함수를 변수에 담아 사용하는 방식 호이스팅의 대상이 되지않음.
// 콜백함수에서 유용하게 사용이됨.
let varB = function () {
  // console.log("funcB");
};

varB();

// 2. 화살표 함수
let varC = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varC(10));
