// 호이스팅
// 자바스크립트는 호이스팅이라능 기능을 제공하기때문에,
// 선언문을 맨아래에 두어도 알아서 호이스팅돼서 실행되기때문에 아무런 문제가 발생하지않는다.
// 함수선언이 무조건 위에서 선언할필요가없음!

let area1 = getArea(10, 20); // 10과 20은 인수
console.log(area1);

function getArea(width, height) {
  // 중첩함수
  // 함수안에 또다른 함수
  function another() {
    console.log("another");
  }

  another();
  // width, height는 매개변수
  // let width = 10;
  // let height = 20;
  let area = width * height;

  return area;
}
