"use strict";

const app = require("../app");
const PORT = 3000; // 포트 번호를 3000으로 설정한다.

// 서버를 실행시킨다. app.litsen(포트번호, 콜백함수) 형태로 작성한다.
app.listen(PORT, () => {
  console.log(`${PORT}번 포트에서 서버가 실행되었습니다.`);
});
