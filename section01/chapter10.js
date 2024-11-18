// 반복문
for (let idx = 0; idx < 10; idx++) {
  // continue문을 만나게되면, 조건식의 다른 로직은 실행하지 않고 바로 다음회차로 넘어가게됨.
  if (idx % 2 === 0) {
    continue;
  }
  console.log(idx); // 홀수인 경우만 출력됨
  if (idx >= 5) {
    break;
  }
}
