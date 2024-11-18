function add10(param) {
  const promise = new Promise((rs, rj) => {
    if (typeof param === "number") {
      rs(param + 10);
    } else {
      rj("정수 입력해주세요.");
    }
  });

  return promise;
}

add10(0) // 결과 10을반환
  .then((res) => {
    return add10(res); // 20을반환
  })
  .then((res) => {
    return add10(res); // 30을 반환
  })
  .then((res) => {
    console.log(res); //30
  })
  .catch((err) => {
    console.log(err);
  });
