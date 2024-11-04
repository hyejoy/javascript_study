// callback function
function main(value) {
  console.log(1);
  console.log(2);
  value();
  console.log("END");
}

function sub() {
  console.log("i am sub");
}

// 어떠한 함수를 다른함수의 인자로 전달하여 나중에 호출하도록 하는 함수를 콜백함수라고 한다.
// 나중에 실행되는 함수 라는 의미로 보면됨
main(sub);

// 같은 의미
main(() => {
  console.log("i am sub");
});

// 콜백함수 활용

function repeat(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx);
  }
}

function repeatDouble(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx * 2);
  }
}

repeat(5);
repeatDouble(5);
console.log("--------------------------");
// 구조가 흡사한 함수를 만들때마다... 계속 중복코드를 발생시키면 안좋잖앙.. 이럴때 콜백함수 사용

function repeat_new(count, callback) {
  for (let idx = 0; idx < count; idx++) {
    callback(idx);
  }
}

repeat_new(5, function (idx) {
  console.log(idx);
});
console.log("--------------------------");

repeat_new(5, (idx) => {
  console.log(idx * 2);
});
