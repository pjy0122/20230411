const express = require("express");
// react에서 import 기능을 뜻한다.
const userRouter = require("./routes/user");
const tweetRouter = require("./routes/tweet");
const app = express();

const port = 3010;
// localhost:3010 (아무거나 해도됨)

app.use("/user", userRouter);
app.use("/tweet", tweetRouter);

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// app.get("/user/:id", (req, res) => {
//   res.send("유저 정보 조회");
// });

// app.get("/todos", (req, res) => {
//   res.send("to do list 조회");
// });

// // post요청. 확인은 insomnia or postman에서 확인
// app.post("/", (req, res) => {
//   res.send("Post");
// });

// // put요청 [전체 업데이트 상황때 씀] (일부분만 업데이트땐 patch요청을 씀)
// app.put("/", (req, res) => {
//   res.send("Put");
// });

// // delete요청
// app.delete("/", (req, res) => {
//   res.send("Delete");
// });

app.listen(port, () => {
  console.log(`Server listening on port: ${port} 🙄`);
});
