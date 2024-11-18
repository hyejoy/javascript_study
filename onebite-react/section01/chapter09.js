// 1. IF 조건문 (if문)

let num = 10;

if (num > 10) {
  console.log("num 은 10 이상입니다.");
} else if (num >= 5) {
  console.log("num은 5 이상입니다.");
} else {
  console.log("조건이 거짓이빈다.");
}

// 2. switch 문
// -> if문과 기능자체는동일
// -> 다수의 조건을 처리할 때 if보다 더 직관적이다.
// 변수의 값을 기준으로 다른 로직을 처리하고싶다면.. 추천

let animal = "ㅇ";

switch (animal) {
  case "cat": {
    console.log("고양잉");
    break;
  }
  case "dog": {
    console.log("개");
    break;
  }
  case "bear": {
    console.log("곰");
    break;
  }
  case "snake": {
    console.log("뱀");
    break;
  }
  case "tiger": {
    console.log("호랑잉");
    break;
  }
  default: {
    console.log("그런 동물은 전 몰라용");
  }
}
