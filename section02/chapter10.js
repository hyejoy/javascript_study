// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 현재날짜 생성
console.log(date1);

let date2 = new Date("1997-01-01/10:10:10"); // - 나 . 이나 / 로 구분가능
let date3 = new Date(1997, 1, 7, 23, 59, 59); // - 나 . 이나 / 로 구분가능
console.log(date2);
console.log(date3);

// 2. 타임스탬프
// 특정시간이 "1970.01.01 00시 00분 00초"로부터 몇 ms가 지났는지 의미하는 숫자값
let ts1 = date1.getTime(); // UTC로부터 ~ms만큼 지났음을 숫자로 표현됨
console.log(ts1);

let date4 = new Date(ts1);
console.log(date4);

// 3. 시간 요소들을 추출하는방법
let year = date1.getFullYear();
// 자바스크립트 month 는 1월이 0부터 시작한다.
let month = date1.getMonth() + 1;
let date = date1.getDate();

let hour = date1.getHours();
let min = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(year, month, date, hour, min, seconds);

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2); // 3월로 설정
date1.setDate(30);
