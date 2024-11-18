// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

animal.age = 2;
animal.name = "까망";
delete animal.color;

// 추가 , 수정, 삭제 가능... 객체는 주소값만 저장하기 때문임
// 내용이 바꼈을뿐, 주소는 그대로이기때문에 상수여도 변경이 가능함

const person = {
  name: "최혜조",
  sayHi: () => {
    console.log("hi");
  },
  sayHi2() {
    console.log("hi2");
  }, // 객체의 동작을 정의한다.
};

person.sayHi();
person["sayHi"]();
