//1. 대입 연산자
let var1 = 1;

//2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;

// 모듈러 연산자 ... + / - 보다 연산순위 높음
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = 1 + 2 * 10; // 2*10 우선
console.log(num6); //21
let num61 = (1 + 2) * 10; // 소괄호 우선
console.log(num61); //30

//3. 복합 대입 연산자
// 산술 + 대입

let num7 = 10;
num7 += 20; // num7 + 20
num7 -= 20; // num7 - 20
num7 *= 20; // num7 - 20
num7 /= 20; // num7 - 20
num7 %= 20; // num7 - 20
console.log(num7);

//4. 증감 연산자
let num8 = 10;
num8++; // 이라인이 끝나고나서야 num8 증가됨
// 해당라인에 즉시 연산을 하고싶다면 ++num8 또는 num8+=1
console.log(num8);

let num81 = 10;
console.log(--num81); //9 _ 전위
console.log(num81--); //9 _ 후위
console.log(num81); //8

//5. 논리 연산자
let or = true || false;
let and = true && false;
let not = !true;

console.log(or, and, not);

//6. 비교 연산자
let comp1 = 1 === 2; //동등 연산자
let comp2 = 1 !== 2; //비동등 연산자
console.log(comp1, comp2);

// == 는 자료형이 같은지 비교되지않지만 ===는 자료형이 같은지도 비교됨
let com1_1 = 1 == "1";
console.log(com1_1); // true

let comp3 = 2 < 1;
let comp4 = 1 < 2;
let comp5 = 2 >= 1;
let comp6 = 2 <= 2;
