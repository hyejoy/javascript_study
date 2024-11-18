//단락평가
//논리연산식에서 첫번째 피연산식에서 값만으로 연산의 값을 확정할수있다면
//그때는 두번째 피연산값에는 접근조차하지않는다. [단략평가]

function returnFalse() {
  console.log("false 함수");
  return undefined; // Falsy한값
}

function returnTrue() {
  console.log("true 함수");
  return 123; // Truty한 값
}

// false함수만 찍힘
console.log(returnFalse() && returnTrue());

// true, false 모두 호출됨
console.log(returnTrue() && returnFalse());

// true, false 모두 호출됨
console.log(returnFalse() || returnTrue());

// 단락평가 활용 사례
function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

/**
 * person의 값이 undefined인경우 falsy한 값이기때문에 false
 * name = false && ? 이므로 단락평가에 의해 false를 반환
 * console.log에서 false || ? 이므로 뒤의 true인 값인 "person의 값이 없음"을 출력
 */
printName();

/**
 * person의값이 truty한 값이기때문에 true
 * name = true && true 이기때문에 단락평가로 인해 person.name값이 들어가고
 * console.log에서 name이 true 이므로  단락평가로인해 name(person.name)이 출력
 */
printName({ name: "SUSU" });
