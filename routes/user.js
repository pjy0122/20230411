const express = require("express");

const router = express.Router();

router.get("/:id", (req, res) => {
    res.send("유저 조회");
});

router.post("/", (req, res) => {
    res.send("신규 유저 생성");
});

router.put("/:id", (req, res) => {
    res.send("유저 정보 수정");
  });

// export와 같은거
module.exports = router;