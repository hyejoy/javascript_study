// 1. Spread 연산자 (...)
// > Spread : 흩뿌리다, 펼치다 라는뜻
// > 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];

console.log(arr2); // [4,1,2,3,5,6]

let obj1 = {
  a: 1,
  n: 2,
};

let obj2 = {
  ...obj1,
  c: 4,
  d: 5,
};

console.log(obj2);

// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수
// 함수에 호출하면서 전달된 모든 인수들이  배열의 형태로 저장됨
// Rest 매개변수는 무조건 마지막에만 쓸 수 있다. (뒤에 추가적으로 매개변수를 선언할수 없다.)
function funcA(...rest) {
  console.log(rest);
}

function funcB(param1, ...rest) {
  console.log(param1); // 1
  console.log(rest); //[2,3]
}

funcA(...arr1);
funcB(...arr1);
