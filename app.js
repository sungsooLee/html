const express = require("express");
const path = require("path");
const app = express();

// 숫자로 포트 번호를 정의해줘야 합니다.
const PORT = 3000;

// 1. 정적 파일 루트 설정
app.use(express.static(path.join(__dirname, "public")));

// 2. 기본 경로('/') 접속 시 index.html 연결
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "html", "index.html"));
});

// 3. '/html' 경로로 접속 시에도 연결
app.get("/html", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "html", "index.html"));
});

// 정의한 PORT 변수를 사용합니다.
app.listen(PORT, () => {
  console.log(`====================================`);
  console.log(`서버가 성공적으로 시작되었습니다!`);
  console.log(`접속 주소: http://localhost:${PORT}`);
  console.log(`====================================`);
});
